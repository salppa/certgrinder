import * as cdk       from 'aws-cdk-lib'
import * as dynamodb  from 'aws-cdk-lib/aws-dynamodb'
import * as lambda    from 'aws-cdk-lib/aws-lambda'
import * as apigwv2   from 'aws-cdk-lib/aws-apigatewayv2'
import * as integ     from 'aws-cdk-lib/aws-apigatewayv2-integrations'
import * as s3        from 'aws-cdk-lib/aws-s3'
import * as cf        from 'aws-cdk-lib/aws-cloudfront'
import * as origins   from 'aws-cdk-lib/aws-cloudfront-origins'
import { Construct }  from 'constructs'

export class CertGrinderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // ── DynamoDB ─────────────────────────────────────────────────────────────
    // PK = USER#<userId>  |  SK = MODULE#<moduleId>#<type>  (progress | sympathy)
    const table = new dynamodb.Table(this, 'UserData', {
      tableName:    'certgrinder-user-data',
      partitionKey: { name: 'pk', type: dynamodb.AttributeType.STRING },
      sortKey:      { name: 'sk', type: dynamodb.AttributeType.STRING },
      billingMode:  dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
    })

    // ── Lambda ───────────────────────────────────────────────────────────────
    const fn = new lambda.Function(this, 'UserDataFn', {
      functionName: 'certgrinder-user-data',
      runtime:      lambda.Runtime.PYTHON_3_12,
      handler:      'user_data.handler',
      code:         lambda.Code.fromAsset('lambda'),  // relative to certgrinder/infra/
      timeout:      cdk.Duration.seconds(10),
      environment:  { TABLE_NAME: table.tableName },
    })
    table.grantReadWriteData(fn)

    // ── HTTP API (API Gateway v2) ─────────────────────────────────────────────
    const api = new apigwv2.HttpApi(this, 'Api', {
      apiName: 'certgrinder-api',
      corsPreflight: {
        allowOrigins: ['*'],   // restrict to CloudFront URL in production
        allowMethods: [
          apigwv2.CorsHttpMethod.GET,
          apigwv2.CorsHttpMethod.PUT,
          apigwv2.CorsHttpMethod.OPTIONS,
        ],
        allowHeaders: ['content-type', 'authorization'],
        maxAge:       cdk.Duration.days(1),
      },
    })

    const integration = new integ.HttpLambdaIntegration('FnInteg', fn)

    for (const dtype of ['progress', 'sympathy']) {
      api.addRoutes({
        path:    `/users/{userId}/modules/{moduleId}/${dtype}`,
        methods: [apigwv2.HttpMethod.GET, apigwv2.HttpMethod.PUT],
        integration,
      })
    }

    // ── S3 + CloudFront ───────────────────────────────────────────────────────
    const bucket = new s3.Bucket(this, 'FrontendBucket', {
      bucketName:        `certgrinder-frontend-${this.account}-${this.region}`,
      removalPolicy:     cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    })

    const distribution = new cf.Distribution(this, 'Cdn', {
      defaultBehavior: {
        origin:               origins.S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy:          cf.CachePolicy.CACHING_OPTIMIZED,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 200, responsePagePath: '/index.html' },
        { httpStatus: 404, responseHttpStatus: 200, responsePagePath: '/index.html' },
      ],
    })

    // ── Outputs ───────────────────────────────────────────────────────────────
    new cdk.CfnOutput(this, 'ApiUrl', {
      value:       api.url!,
      description: 'Paste into certgrinder/.env as VITE_API_URL',
    })
    new cdk.CfnOutput(this, 'CloudFrontUrl', {
      value:       `https://${distribution.distributionDomainName}`,
      description: 'Public URL for CertGrinder frontend',
    })
    new cdk.CfnOutput(this, 'BucketName', {
      value:       bucket.bucketName,
      description: 'Upload: aws s3 sync dist/ s3://<bucket> --delete',
    })
    new cdk.CfnOutput(this, 'TableName', {
      value:       table.tableName,
      description: 'DynamoDB table for user progress and sympathy values',
    })
  }
}
