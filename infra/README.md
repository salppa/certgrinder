# CertGrinder — AWS Infrastructure

## Arkkitehtuuri

```
Selaimen käyttäjä
    │
    ├── CloudFront (CDN) ──── S3 (React build)
    │
    └── API Gateway (HTTP API)
              │
              └── Lambda (user_data.py)
                        │
                        └── DynamoDB (certgrinder-user-data)
```

## DynamoDB-rakenne

| PK | SK | data |
|----|----| -----|
| `USER#timnu` | `MODULE#togaf#progress` | `{"completed": [1, 2]}` |
| `USER#timnu` | `MODULE#togaf#sympathy` | `{"value": 65}` |

## Esitietovaatimukset

```bash
# 1. AWS CLI
brew install awscli            # Mac
winget install Amazon.AWSCLI   # Windows

# 2. Kirjaudu AWS:n
aws configure
# Anna: Access Key, Secret Key, Region (eu-north-1), Output format (json)

# 3. Node.js täytyy olla asennettu (jo on)

# 4. CDK bootstrap (kerran per AWS-tili)
npx cdk bootstrap
```

## Deploy

```bash
cd certgrinder/infra
npm install
npm run deploy
```

Deploy tulostaa:
```
✔️  CertGrinderStack

Outputs:
CertGrinderStack.ApiUrl          = https://abc123.execute-api.eu-north-1.amazonaws.com/
CertGrinderStack.CloudFrontUrl   = https://d1234abcd.cloudfront.net
CertGrinderStack.BucketName      = certgrinder-frontend-123456789-eu-north-1
```

## Frontend-konfigurointi

```bash
# Luo certgrinder/.env
echo "VITE_API_URL=https://abc123.execute-api.eu-north-1.amazonaws.com" > certgrinder/.env
```

## Frontend-deploy

```bash
cd certgrinder
npm run build
aws s3 sync dist/ s3://certgrinder-frontend-<account>-eu-north-1 --delete
aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
```

## API-reitit

| Metodi | Polku | Käyttö |
|--------|-------|--------|
| GET  | `/users/{userId}/modules/{moduleId}/progress`  | Hae episodiprogressio |
| PUT  | `/users/{userId}/modules/{moduleId}/progress`  | Päivitä episodiprogressio |
| GET  | `/users/{userId}/modules/{moduleId}/sympathy`  | Hae sympathy-arvo |
| PUT  | `/users/{userId}/modules/{moduleId}/sympathy`  | Päivitä sympathy-arvo |

## Tuotantoon siirryttyäessä

1. Vaihda `userId` Cogniton JWT-tokenin sub-kenttään (ei kovakoodattu 'local')
2. Rajoita CORS: korvaa `'*'` CloudFront-domain-osoitteella
3. Lisää Lambda Authorizer API Gatewayhin

## Kustannusarvio (skaalautuvasti)

| Palvelu | Hinta |
|---------|-------|
| DynamoDB | ~$0 (free tier kattaa 25 GB + 200M req/kk) |
| Lambda | ~$0 (free tier 1M req/kk) |
| API Gateway | ~$1 per miljoona |
| S3 | ~$0.023/GB |
| CloudFront | ~$0.0085/GB |
