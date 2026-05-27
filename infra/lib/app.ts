import * as cdk from 'aws-cdk-lib'
import { CertGrinderStack } from './certgrinder-stack'

const app = new cdk.App()
new CertGrinderStack(app, 'CertGrinderStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region:  process.env.CDK_DEFAULT_REGION || 'eu-north-1',
  },
  description: 'CertGrinder — DynamoDB + Lambda + API Gateway + S3 + CloudFront',
})
