import * as cdk      from 'aws-cdk-lib'
import * as cognito  from 'aws-cdk-lib/aws-cognito'
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as iam      from 'aws-cdk-lib/aws-iam'
import * as lambda   from 'aws-cdk-lib/aws-lambda'
import * as logs     from 'aws-cdk-lib/aws-logs'
import * as apigwv2  from 'aws-cdk-lib/aws-apigatewayv2'
import * as integ    from 'aws-cdk-lib/aws-apigatewayv2-integrations'
import * as authz    from 'aws-cdk-lib/aws-apigatewayv2-authorizers'
import * as s3       from 'aws-cdk-lib/aws-s3'
import * as cf       from 'aws-cdk-lib/aws-cloudfront'
import * as origins  from 'aws-cdk-lib/aws-cloudfront-origins'
import { Construct } from 'constructs'

export class CertGrinderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const googleClientId     = this.node.tryGetContext('googleClientId')     as string | undefined
    const googleClientSecret = this.node.tryGetContext('googleClientSecret') as string | undefined
    const cognitoDomainPrefix = (this.node.tryGetContext('cognitoDomainPrefix') as string) || 'certgrinder-app'

    if (!googleClientId || !googleClientSecret) {
      throw new Error(
        'Missing required CDK context: googleClientId and googleClientSecret.\n' +
        'Deploy with: cdk deploy -c googleClientId=... -c googleClientSecret=...'
      )
    }

    // ── Cognito User Pool ─────────────────────────────────────────────────────
    const userPool = new cognito.UserPool(this, 'UserPool', {
      userPoolName:           'certgrinder-users',
      selfSignUpEnabled:      false,  // Google-only — no email/password signup
      signInAliases:          { email: true },
      autoVerify:             { email: true },
      accountRecovery:        cognito.AccountRecovery.NONE,
      removalPolicy:          cdk.RemovalPolicy.RETAIN,
    })

    // Google identity provider
    const googleIdP = new cognito.UserPoolIdentityProviderGoogle(this, 'GoogleIdP', {
      userPool,
      clientId:          googleClientId,
      clientSecretValue: cdk.SecretValue.unsafePlainText(googleClientSecret),
      scopes:       ['openid', 'email', 'profile'],
      attributeMapping: {
        email:     cognito.ProviderAttribute.GOOGLE_EMAIL,
        givenName: cognito.ProviderAttribute.GOOGLE_NAME,
      },
    })

    const callbackUrl = `https://${this.node.tryGetContext('cloudfrontDomain') || 'localhost:5173'}/callback`

    const appClient = userPool.addClient('WebClient', {
      userPoolClientName: 'certgrinder-web',
      generateSecret:     false,
      oAuth: {
        flows:         { authorizationCodeGrant: true },
        scopes:        [cognito.OAuthScope.OPENID, cognito.OAuthScope.EMAIL, cognito.OAuthScope.PROFILE],
        callbackUrls:  [callbackUrl, 'http://localhost:5173/callback'],
        logoutUrls:    [`https://${this.node.tryGetContext('cloudfrontDomain') || 'localhost:5173'}`, 'http://localhost:5173'],
      },
      supportedIdentityProviders: [cognito.UserPoolClientIdentityProvider.GOOGLE],
      preventUserExistenceErrors:  true,
    })

    appClient.node.addDependency(googleIdP)

    const userPoolDomain = userPool.addDomain('Domain', {
      cognitoDomain: { domainPrefix: cognitoDomainPrefix },
    })

    // ── DynamoDB ─────────────────────────────────────────────────────────────
    const table = new dynamodb.Table(this, 'UserData', {
      tableName:    'certgrinder-user-data',
      partitionKey: { name: 'pk', type: dynamodb.AttributeType.STRING },
      sortKey:      { name: 'sk', type: dynamodb.AttributeType.STRING },
      billingMode:  dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
    })

    // ── Lambda ───────────────────────────────────────────────────────────────
    const fnLogGroup = new logs.LogGroup(this, 'FnLogGroup', {
      logGroupName:  '/aws/lambda/certgrinder-user-data',
      retention:     logs.RetentionDays.ONE_MONTH,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    const fn = new lambda.Function(this, 'UserDataFn', {
      functionName:     'certgrinder-user-data',
      runtime:          lambda.Runtime.PYTHON_3_12,
      handler:          'user_data.handler',
      code:             lambda.Code.fromAsset('lambda'),
      timeout:          cdk.Duration.seconds(10),
      environment:      { TABLE_NAME: table.tableName },
      tracing:          lambda.Tracing.ACTIVE,
      reservedConcurrentExecutions: 50,
      logGroup:         fnLogGroup,
    })
    table.grantReadWriteData(fn)

    // ── HTTP API (API Gateway v2) with JWT authorizer ─────────────────────────
    const issuerUrl = `https://cognito-idp.${this.region}.amazonaws.com/${userPool.userPoolId}`

    const jwtAuthorizer = new authz.HttpJwtAuthorizer('CognitoJwtAuth', issuerUrl, {
      jwtAudience: [appClient.userPoolClientId],
    })

    const api = new apigwv2.HttpApi(this, 'Api', {
      apiName: 'certgrinder-api',
      corsPreflight: {
        allowOrigins: ['https://ddd8ui6hzibeo.cloudfront.net', 'http://localhost:5173'],
        allowMethods: [apigwv2.CorsHttpMethod.GET, apigwv2.CorsHttpMethod.PUT, apigwv2.CorsHttpMethod.OPTIONS],
        allowHeaders: ['content-type', 'authorization'],
        maxAge:       cdk.Duration.days(1),
      },
    })

    // Throttling on the default stage (50 rps / 100 burst)
    const defaultStage = api.defaultStage?.node.defaultChild as apigwv2.CfnStage
    if (defaultStage) {
      defaultStage.defaultRouteSettings = {
        throttlingBurstLimit: 100,
        throttlingRateLimit:  50,
      }
    }

    const integration = new integ.HttpLambdaIntegration('FnInteg', fn)

    for (const dtype of ['progress', 'sympathy']) {
      api.addRoutes({
        path:        `/users/{userId}/modules/{moduleId}/${dtype}`,
        methods:     [apigwv2.HttpMethod.GET, apigwv2.HttpMethod.PUT],
        integration,
        authorizer:  jwtAuthorizer,
      })
    }

    // ── S3 ───────────────────────────────────────────────────────────────────
    const bucket = new s3.Bucket(this, 'FrontendBucket', {
      bucketName:        `certgrinder-frontend-${this.account}-${this.region}`,
      removalPolicy:     cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    })

    // ── CloudFront security headers ───────────────────────────────────────────
    const securityHeaders = new cf.ResponseHeadersPolicy(this, 'SecurityHeaders', {
      securityHeadersBehavior: {
        contentSecurityPolicy: {
          contentSecurityPolicy: [
            "default-src 'self'",
            "connect-src 'self' https://*.amazonaws.com https://*.amazoncognito.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self'",
          ].join('; '),
          override: true,
        },
        strictTransportSecurity: {
          accessControlMaxAge: cdk.Duration.seconds(63072000),
          includeSubdomains:   true,
          preload:             true,
          override:            true,
        },
        contentTypeOptions: { override: true },
        frameOptions:       { frameOption: cf.HeadersFrameOption.DENY, override: true },
        xssProtection:      { protection: true, modeBlock: true, override: true },
        referrerPolicy:     { referrerPolicy: cf.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN, override: true },
      },
    })

    // ── CloudFront ────────────────────────────────────────────────────────────
    const distribution = new cf.Distribution(this, 'Cdn', {
      defaultBehavior: {
        origin:                origins.S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy:  cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy:           cf.CachePolicy.CACHING_OPTIMIZED,
        responseHeadersPolicy: securityHeaders,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 200, responsePagePath: '/index.html' },
        { httpStatus: 404, responseHttpStatus: 200, responsePagePath: '/index.html' },
      ],
    })

    // ── GitHub OIDC deploy role ───────────────────────────────────────────────
    const githubProvider = new iam.OpenIdConnectProvider(this, 'GithubOIDC', {
      url:       'https://token.actions.githubusercontent.com',
      clientIds: ['sts.amazonaws.com'],
    })

    const githubRole = new iam.Role(this, 'GithubDeployRole', {
      roleName:   'certgrinder-github-deploy',
      assumedBy:  new iam.WebIdentityPrincipal(githubProvider.openIdConnectProviderArn, {
        StringEquals: { 'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com' },
        StringLike:   { 'token.actions.githubusercontent.com:sub': 'repo:salppa/certgrinder:*' },
      }),
    })

    // Allow assuming CDK bootstrap roles (needed for cdk deploy)
    githubRole.addToPolicy(new iam.PolicyStatement({
      actions:   ['sts:AssumeRole'],
      resources: [`arn:aws:iam::${this.account}:role/cdk-*`],
    }))

    // Allow S3 frontend deploy
    githubRole.addToPolicy(new iam.PolicyStatement({
      actions:   ['s3:PutObject', 's3:DeleteObject', 's3:ListBucket', 's3:GetObject'],
      resources: [bucket.bucketArn, `${bucket.bucketArn}/*`],
    }))

    // Allow CloudFront invalidation
    githubRole.addToPolicy(new iam.PolicyStatement({
      actions:   ['cloudfront:CreateInvalidation'],
      resources: [`arn:aws:cloudfront::${this.account}:distribution/${distribution.distributionId}`],
    }))

    // ── Outputs ───────────────────────────────────────────────────────────────
    new cdk.CfnOutput(this, 'ApiUrl', {
      value:       api.url!,
      description: 'VITE_API_URL — paste into GitHub Secrets',
    })
    new cdk.CfnOutput(this, 'CloudFrontUrl', {
      value:       `https://${distribution.distributionDomainName}`,
      description: 'Public URL for CertGrinder frontend',
    })
    new cdk.CfnOutput(this, 'BucketName', {
      value:       bucket.bucketName,
      description: 'S3_BUCKET — paste into GitHub Secrets',
    })
    new cdk.CfnOutput(this, 'TableName', {
      value:       table.tableName,
      description: 'DynamoDB table for user progress and sympathy',
    })
    new cdk.CfnOutput(this, 'UserPoolId', {
      value:       userPool.userPoolId,
      description: 'VITE_COGNITO_USER_POOL_ID — paste into GitHub Secrets',
    })
    new cdk.CfnOutput(this, 'UserPoolClientId', {
      value:       appClient.userPoolClientId,
      description: 'VITE_COGNITO_CLIENT_ID — paste into GitHub Secrets',
    })
    new cdk.CfnOutput(this, 'CognitoAuthDomain', {
      value:       `https://${userPoolDomain.domainName}.auth.${this.region}.amazoncognito.com`,
      description: 'VITE_COGNITO_DOMAIN — paste into GitHub Secrets',
    })
    new cdk.CfnOutput(this, 'GoogleCallbackUrl', {
      value:       `https://${distribution.distributionDomainName}/callback`,
      description: 'Add this URL to Google Cloud Console → OAuth 2.0 Client → Authorized redirect URIs',
    })
    new cdk.CfnOutput(this, 'GithubDeployRoleArn', {
      value:       githubRole.roleArn,
      description: 'GH_DEPLOY_ROLE_ARN — paste into GitHub Secrets',
    })
    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value:       distribution.distributionId,
      description: 'CLOUDFRONT_DISTRIBUTION_ID — paste into GitHub Secrets',
    })
  }
}
