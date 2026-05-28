# Changelog

All notable changes to CertGrinder are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/) | Versioning: [SemVer](https://semver.org/)

## [Unreleased]

## [0.6.0] — 2026-05-28

### Added
- Google OAuth login via Cognito (PKCE flow, no SDK dependency)
- `src/lib/auth.js` — login, exchangeCode, logout, isAuthenticated, getUserId helpers
- `src/screens/LoginScreen.jsx` — "Kirjaudu Google-tilillä" screen
- `src/screens/AuthCallback.jsx` — authorization code exchange handler
- `src/components/AuthGuard.jsx` — redirects unauthenticated users to /login
- Cognito User Pool, Google Identity Provider, PKCE App Client, Hosted UI domain in CDK stack
- GitHub OIDC deploy role (certgrinder-github-deploy) — no more long-lived IAM keys in CI/CD
- CloudFront ResponseHeadersPolicy — CSP, HSTS, X-Frame-Options: DENY, XSS protection
- API Gateway JWT authorizer — all routes now require valid Cognito token
- Lambda X-Ray tracing, 1-month log retention, reserved concurrency (50)
- API Gateway throttling (50 rps / 100 burst)
- CDK outputs for all new resources (UserPoolId, ClientId, CognitoAuthDomain, GoogleCallbackUrl, GithubDeployRoleArn)

### Changed
- `src/App.jsx` — added /login and /callback routes; all other routes wrapped in AuthGuard
- `src/lib/api.js` — Authorization: Bearer <id_token> on every request; userId from JWT sub claim
- `infra/lambda/user_data.py` — userId extracted from JWT sub claim (not path parameter); added schema validation, 4 KB body cap, structured logging, data_type whitelist
- `.github/workflows/deploy.yml` — migrated from static IAM keys to OIDC; deploy-frontend now depends on deploy-infra
- `infra/lib/certgrinder-stack.ts` — CORS restricted to CloudFront + localhost; S3 RemovalPolicy changed to RETAIN

### Security
- Removed static AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY from CI/CD — replaced with OIDC
- CORS restricted from `*` to specific origins
- All API routes now require JWT authentication

## [0.5.0] — 2026-05-28

### Added
- 14 training modules across 4 domains (Enterprise Architecture, Cloud, ITSM, AI & Security)
- 24 mentor images (6 mentors × 4 moods: neutral, worried, angry, relieved)
- 13 question banks copied from CertDrill
- 21 overview HTML pages copied from CertDrill
- Scenario files generated for all 14 modules via Claude Opus 4.7 API
- `scripts/generate_scenarios.py` — batch scenario generator with SSL bypass
- `.gitignore` — node_modules, dist, cdk.out, lock files, .env
- `docs/CERTGRINDER.md` — full product documentation including SSL bypass rules and two-repo model
- `docs/ARCHITECTURE.md` — TOGAF Phases B, C, D architecture document

## [0.4.0] — 2026-05-27

### Added
- AWS CDK v2 infrastructure: DynamoDB, Lambda (Python 3.12), API Gateway v2, S3, CloudFront
- GitHub Actions CI/CD pipeline (deploy-infra + deploy-frontend jobs)
- GitHub Secrets configuration for AWS deployment
- `src/hooks/useProgress.js` — localStorage + DynamoDB dual-layer progress tracking
- `src/lib/api.js` — REST client for API Gateway

### Changed
- userId sourced from localStorage UUID (temporary — replaced by Cognito sub in 0.6.0)

## [0.3.0] — 2026-05-26

### Added
- Mentor avatars with four moods (neutral, worried, angry, relieved) responding to drag direction
- Episode opening monologue (MentorMonologue component)
- Episode progression lock logic — complete episode N to unlock N+1
- TOGAF scenario file (5 episodes × 4 scenarios, Finnish language)
- `EpisodeComplete` screen
- `GameOver` screen with mentor reaction

## [0.2.0] — 2026-05-26

### Added
- Reigns-style swipe mechanic with Framer Motion drag physics
- Four resource meters (R1 Cost, R2 Performance, R3 Compliance, R4 Team) with animated deltas
- Consequence preview appearing at 30px drag threshold
- Game over logic when any meter reaches 0 or 100

## [0.1.0] — 2026-05-26

### Added
- React 18 + Vite 5 + react-router-dom 6 project scaffold
- Glassmorphism design system (glass tokens in src/theme/index.js)
- Dashboard, ModulePicker, EpisodeSelect screens
- Client-side routing
