# CertGrinder — Tuotedokumentaatio

**Versio:** 0.3.0  
**Päivitetty:** 2026-05-28  
**Status:** Vaihe 1–5 valmis — 14 moduulia, CI/CD käytössä

**Repo:** [github.com/salppa/certgrinder](https://github.com/salppa/certgrinder)  
**CertDrill-repo:** [github.com/salppa/certdrill](https://github.com/salppa/certdrill)  
**Live:** [https://ddd8ui6hzibeo.cloudfront.net](https://ddd8ui6hzibeo.cloudfront.net)

---

## Kuvaus

CertGrinder on CertDrillin rinnalle rakennettu uusi tuote, joka gamifioi
sertifikaattivalmistelun Reigns-tyylisellä kriisinhallintasimulaattorilla.
Glassmorphism-ulkoasulla, dynaamisilla mentoreilla ja emotionaalisella designilla.

Käyttäjä tekee swipe-päätöksiä IT-arkkitehtuuri- ja hallintoskenaarioissa.
Jokainen päätös vaikuttaa neljään resurssimittariin. Mittarin päädyt (0 tai 100) = Game Over.

---

## Kaksi tuotetta — kaksi repoa

| | CertDrill | CertGrinder |
|-|-----------|-------------|
| **Tarkoitus** | Kysymys–vastaus-harjoittelu | Reigns-tyylinen simulaatio |
| **GitHub** | `github.com/salppa/certdrill` | `github.com/salppa/certgrinder` |
| **Paikallinen polku** | `C:\Users\Timnu\OneDrive\Desktop\StudyApp` | `C:\Users\Timnu\OneDrive\Desktop\Certgrinder\certdrill\certgrinder` |
| **Sisältää** | Frontend + backend + kysymyspankit | Frontend + CDK-infra + skenaariot |

> **Huomio:** CertGrinderin paikallinen kansio on `Certgrinder\certdrill\certgrinder` — 
> se on alkuperäinen git subtree -erotuksen tulema ja polku on tarkoituksella syvä.

### Materiaali CertDrilliltä

CertGrinder hyödyntää CertDrillissä tuotettua opiskelumateriaalia:

| Materiaali | Lähde | Kohde |
|------------|-------|-------|
| Kysymyspankit | `StudyApp/frontend/src/questions/` | `certgrinder/src/data/questions/` |
| Overviewt | `StudyApp/frontend/public/overviews/` | `certgrinder/public/overviews/` |
| Mentori-kuvat | `StudyApp/docs/mentors/` | `certgrinder/public/assets/mentors/` |

---

## Paikallinen ympäristö

### Kansiorakenne levyllä

```
C:\Users\Timnu\OneDrive\Desktop\
├── StudyApp\                        # CertDrill — git repo: github.com/salppa/certdrill
│   └── frontend\src\questions\      # Kysymyspankit (lähde)
└── Certgrinder\
    └── certdrill\
        └── certgrinder\             # CertGrinder — git repo: github.com/salppa/certgrinder
            ├── .gitignore
            ├── .github\workflows\deploy.yml
            ├── src\
            ├── public\
            ├── infra\
            ├── scripts\
            └── docs\CERTGRINDER.md  (tämä tiedosto)
```

### AWS-tunnukset

```
C:\Users\Timnu\.aws\credentials
```

```ini
[default]
aws_access_key_id     = ...
aws_secret_access_key = ...

[quizzy]
aws_access_key_id     = ...
aws_secret_access_key = ...
```

CDK deploy käyttää `[default]`-profiilia. Tarvittaessa: `--profile quizzy`.

### GitHub CLI

```
C:\Program Files\GitHub CLI\gh.exe
```

GitHub-token tallennettu Windows Credential Manageriin (Ohjauspaneeli → Tunnistetietojen hallinta → Windows-tunnistetiedot → `git:https://github.com`).

---

## SSL-ohitus — Corporate proxy

**Kaikki HTTPS-liikenne vaatii SSL-tarkistuksen ohituksen.** Jokaisella työkalulla on oma mekanismi:

### npm

```bash
npm install --strict-ssl=false
npm run build   # SSL ei vaikuta buildiin, vain installiin
```

### git

```bash
git -c http.sslVerify=false push
git -c http.sslVerify=false pull --rebase
git -c http.sslVerify=false push origin main
```

> **Älä** aseta `git config --global http.sslVerify false` — se koskee kaikkia repoja.

### AWS CDK (bootstrap & deploy)

```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED = "0"
npx cdk bootstrap aws://609247456986/eu-north-1
npm run deploy
```

Tai yhdellä rivillä:

```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 npx cdk deploy --require-approval never
```

### AWS CLI

```bash
aws cloudformation list-stacks --no-verify-ssl
aws s3 sync dist/ s3://bucket-name --no-verify-ssl
aws cloudfront create-invalidation --distribution-id ID --no-verify-ssl
```

### Python / anthropic SDK

```python
import httpx
import anthropic

client = anthropic.Anthropic(
    api_key=os.environ["ANTHROPIC_API_KEY"],
    http_client=httpx.Client(verify=False),
)
```

### GitHub Secrets API (PyNaCl)

```python
import requests

session = requests.Session()
session.verify = False
```

---

## Git & GitHub — Säännöt

### Päähaarakäytäntö

- Ainoa haara: `main`
- Suora push `main`-haaraan on sallittu (ei PR-pakkoa)
- CI/CD käynnistyy automaattisesti jokaisen `main`-pushin jälkeen

### Tavallinen työnkulku

```bash
# 1. Muutoksia paikallisesti
git add src/data/scenarios/togaf.js docs/CERTGRINDER.md

# 2. Commit
git commit -m "feat: add togaf scenarios"

# 3. Push SSL-ohituksella
git -c http.sslVerify=false push origin main
```

### Jos remote on edellä (rejected)

```bash
git -c http.sslVerify=false pull --rebase
git -c http.sslVerify=false push origin main
```

### Mitä ei commitoida (.gitignore)

```
node_modules/          # npm riippuvuudet
infra/node_modules/    # CDK riippuvuudet
dist/                  # Vite-build output
infra/cdk.out/         # CDK syntetisointiulostulo
package-lock.json      # Generoitu, vaihtelee ympäristöittäin
infra/package-lock.json
.env / .env.local      # Salaisuudet
```

### GitHub Secrets — Ylläpito

Secretit tallennetaan repoon `github.com/salppa/certgrinder → Settings → Secrets and variables → Actions`.

**Manuaalinen päivitys gh CLI:llä:**

```bash
gh secret set AWS_ACCESS_KEY_ID --body "AKIA..."
gh secret set AWS_SECRET_ACCESS_KEY --body "..."
gh secret set AWS_REGION --body "eu-north-1"
gh secret set VITE_API_URL --body "https://ku422tldi6.execute-api.eu-north-1.amazonaws.com/"
gh secret set S3_BUCKET --body "certgrinder-frontend-609247456986-eu-north-1"
gh secret set CLOUDFRONT_DISTRIBUTION_ID --body "EVR0BK0EBPDUO"
```

**Listaus:**

```bash
gh secret list
```

**SSL-ongelma gh CLI:n kanssa:**

```powershell
$env:GH_HOST = "github.com"
# Jos SSL-virhe: käytä Python-skriptiä (scripts/set_github_secrets.py)
```

**Python-skriptillä (SSL-ohitus):**

```python
# scripts/set_github_secrets.py
# Käyttää PyNaCl-kirjastoa salauksen ja requests.Session(verify=False) SSL-ohitukseen
# Aja: python scripts/set_github_secrets.py
```

---

## Hakemistorakenne

```
certgrinder/
├── .gitignore                       # node_modules, dist, cdk.out, .env
├── .github/
│   └── workflows/
│       └── deploy.yml               # CI/CD — build + S3 + CloudFront
├── src/
│   ├── App.jsx                      # Router + taustaefektit
│   ├── main.jsx                     # React entry point
│   ├── theme/
│   │   └── index.js                 # Design tokens + glass-objekti
│   ├── components/
│   │   ├── GlassCard.jsx            # Glassmorphism-peruskortti
│   │   ├── ResourceMeter.jsx        # R1–R4 animoitu mittari (Framer Motion)
│   │   ├── MentorAvatar.jsx         # Mentori-kuva + 4 ilmettä + emoji-fallback
│   │   └── MentorMonologue.jsx      # Aloitusmonologi per episodi
│   ├── screens/
│   │   ├── Dashboard.jsx            # Etusivu — moduulien yleiskatsaus
│   │   ├── ModulePicker.jsx         # Moduulivalinta + [SIMULAATIO]-badge
│   │   ├── EpisodeSelect.jsx        # Episodivalinta — lukituslogiikka
│   │   ├── ReignsScreen.jsx         # Pääpelinäkymä — swipe + mittarit
│   │   ├── EpisodeComplete.jsx      # Episodi läpäisty
│   │   └── GameOver.jsx             # Peli päättyi — mentori lohduttaa
│   ├── data/
│   │   ├── modules.js               # 14 moduulia + MODULE_MENTOR-map
│   │   ├── questions/               # Kysymyspankit CertDrilliltä (13 tiedostoa)
│   │   └── scenarios/               # Generoidut skenaariot (14 tiedostoa)
│   ├── hooks/
│   │   └── useProgress.js           # useProgress + useSympathy (localStorage + API)
│   └── lib/
│       └── api.js                   # REST-kutsut API Gatewayhin
├── public/
│   ├── assets/
│   │   └── mentors/                 # 24 mentori-kuvaa (6 × 4 ilmettä)
│   └── overviews/                   # 21 opiskelumateriaali-HTML:ää CertDrilliltä
├── infra/                           # AWS CDK v2
│   ├── lib/
│   │   ├── app.ts                   # CDK app entry point
│   │   └── certgrinder-stack.ts     # DynamoDB + Lambda + API GW + S3 + CloudFront
│   ├── lambda/
│   │   └── user_data.py             # Lambda handler (Python 3.12)
│   ├── cdk.json
│   ├── tsconfig.json                # moduleResolution: "node" pakollinen
│   └── package.json
├── scripts/
│   └── generate_scenarios.py        # Claude Opus -pohjainen skenaariogeneraattori
├── docs/
│   └── CERTGRINDER.md              # Tämä tiedosto
├── .env.example
├── package.json
└── vite.config.js
```

---

## Teknologiat

| Kategoria | Teknologia | Versio |
|-----------|-----------|--------|
| UI | React | 18.3 |
| Routing | react-router-dom | 6.26 |
| Animaatiot | Framer Motion | 11.3 |
| Build | Vite | 5.4 |
| Infra | AWS CDK | 2.1120+ |
| Lambda | Python | 3.12 |
| Skenaariogenerointi | Claude Opus 4.7 | — |

---

## Teema — Glassmorphism

| Token | Arvo | Käyttö |
|-------|------|--------|
| `T.glass` | `rgba(255,255,255,0.65)` | Korttien tausta |
| `T.glassBlur` | `blur(12px)` | `backdrop-filter` |
| `T.glassBorder` | `rgba(255,255,255,0.40)` | Korttien reunus |
| `T.radius` | `24` | Kaikkien korttien pyöristys |
| `T.bgFrom` | `#F8FAFC` | Taustagradientin alku |
| `T.bgTo` | `#EFF6FF` | Taustagradientin loppu |

Kaikki kortit käyttävät `glass`-objektia: `{ ...glass, padding: 24 }`

---

## Resurssimittarit

| ID | Nimi | Väri | Merkitys |
|----|------|------|----------|
| R1 | Kustannus | `#ef4444` Punainen | Budjetti 0–100 |
| R2 | Suorituskyky | `#3b82f6` Sininen | Tekninen suorituskyky |
| R3 | Compliance | `#8b5cf6` Violetti | Sääntelymääräystenmukaisuus |
| R4 | Tiimin tyytyväisyys | `#10b981` Vihreä | Henkilöstöhyvinvointi |

- **Aloitusarvo:** 50
- **Swing amplitude:** ±15 per swipe (skenaarion delta)
- **Game over:** arvo ≤ 0 tai ≥ 100
- **Varoitustila:** arvo ≤ 15 tai ≥ 85 → mittari punaiseksi
- **Consequence preview:** aktivoituu 30px drag-vaiheessa

---

## Moduulit (14 kpl)

### Enterprise Architecture

| ID | Nimi | Mentori | Kysymyksiä | Väri |
|----|------|---------|-----------|------|
| `togaf` | TOGAF | teacher | 80 | `#6366f1` |
| `togaf-basics` | TOGAF Basics | teacher | 64 | `#818cf8` |
| `archimate` | ArchiMate | ea-strategist | 80 | `#8b5cf6` |
| `cobit2019` | COBIT 2019 | ea-strategist | 80 | `#a855f7` |

### Cloud

| ID | Nimi | Mentori | Kysymyksiä | Väri |
|----|------|---------|-----------|------|
| `cloud` | Cloud Architecture | cloud-architect | 80 | `#3b82f6` |
| `az900` | Azure AZ-900 | cloud-architect | 80 | `#0ea5e9` |
| `aws-clf-c02` | AWS Cloud Practitioner | cloud-architect | 80 | `#f97316` |
| `gcp-fundamentals` | GCP Fundamentals | cloud-architect | 80 | `#22c55e` |

### IT Service Management

| ID | Nimi | Mentori | Kysymyksiä | Väri |
|----|------|---------|-----------|------|
| `itsm` | ITSM / ITIL | itsm-consultant | 80 | `#10b981` |
| `it4it` | IT4IT | itsm-consultant | 80 | `#14b8a6` |
| `it4it-advanced` | IT4IT Advanced | itsm-consultant | 80 | `#06b6d4` |

### AI & Security

| ID | Nimi | Mentori | Kysymyksiä | Väri |
|----|------|---------|-----------|------|
| `ai-compliance` | AI Compliance | ai-compliance | 40 | `#f59e0b` |
| `ai900` | Azure AI-900 | ai-compliance | 80 | `#eab308` |
| `sabsa` | SABSA | ai-compliance | 80 | `#ef4444` |

Kaikilla moduuleilla: `hasScenarios: true`, `badge: 'SIMULAATIO'`, 5 episodia × 4 skenaariota.

---

## Mentorit

| ID | Nimi | Moduulit | Väri |
|----|------|---------|------|
| `teacher` | Suomalainen opettaja | togaf, togaf-basics | `#6366f1` |
| `cloud-architect` | Cloud-arkkitehti | cloud, az900, aws-clf-c02, gcp-fundamentals | `#3b82f6` |
| `ea-strategist` | EA-Strategi | archimate, cobit2019 | `#8b5cf6` |
| `itsm-consultant` | ITSM-konsultti | itsm, it4it, it4it-advanced | `#10b981` |
| `ai-compliance` | AI-Compliance | ai-compliance, ai900, sabsa | `#f59e0b` |
| `chef` | Kokki | — (ei käytössä) | `#ef4444` |

**Kuvat:** `public/assets/mentors/{mentorId}-{mood}.png`  
**Ilmeet:** `neutral` · `worried` · `angry` · `relieved`  
**Lähde:** kopioitu CertDrilliltä, nimet muunnettu (`broken→angry`, `anxious→worried`, `happy→relieved`, `normal→neutral`)  
**Fallback:** kuva puuttuu → emoji automaattisesti

---

## Opiskelumateriaali

### Kysymyspankit (`src/data/questions/`)

Kopioitu CertDrilliltä. Käytetään `generate_scenarios.py`:ssä kontekstina.

| Tiedosto | Kysymyksiä |
|----------|-----------|
| togaf.js | 80 |
| togaf-basics.js | 64 |
| archimate.js | 80 |
| cobit2019.js | 80 |
| itil4.js | 80 |
| it4it.js | 80 |
| it4it-advanced.js | 80 |
| ai-compliance.js | 40 |
| az900.js | 80 |
| ai900.js | 80 |
| aws-clf-c02.js | 80 |
| gcp-fundamentals.js | 80 |
| sabsa.js | 80 |

### Overviewt (`public/overviews/`)

21 HTML-opiskelumateriaalisivua kopioitu CertDrilliltä. Linkitettävissä peliin.

`togaf.html` · `togaf-basics.html` · `archimate.html` · `cobit2019.html` · `itil4.html` · `it4it.html` · `it4it-advanced.html` · `ai-compliance.html` · `sabsa.html` · `az-900.html` · `ai-900.html` · `ai-103.html` · `ab-731.html` · `aws-clf-c02.html` · `gcp-fundamentals.html` · `finnish-culture.html` · `hygieniapassi.html` · `kastikkeet.html` · `kirjanpito.html` · `persoonallisuuspsykologia.html` · `retoriikka.html`

---

## Episodirakenne

- **5 episodia** per moduuli, lukittu järjestyksessä
- **Aloitusmonologi** per episodi (MentorMonologue-komponentti)
- **4 skenaariota** per episodi, satunnaisessa järjestyksessä
- **Lukituslogiikka:** episodi n saatavilla vasta kun n−1 suoritettu

### Skeema (`scenarios/{moduleId}.js`)

```js
{
  moduleId: 'togaf',
  mentor: 'teacher',
  episodes: [{
    id: 1,
    title: '...',
    monologue: '...',
    scenarios: [{
      id: 's1e1',
      text: '...',
      left:  { label, deltas: { r1, r2, r3, r4 }, consequence },
      right: { label, deltas: { r1, r2, r3, r4 }, consequence },
    }]
  }]
}
```

---

## Navigaatio

```
/                     → Dashboard (etusivu)
/modules              → ModulePicker (moduulivalinta)
/modules/:moduleId    → EpisodeSelect (episodivalinta)
/reigns/:moduleId     → ReignsScreen (pelinäkymä)
/gameover/:moduleId   → GameOver
/complete/:moduleId   → EpisodeComplete
```

---

## Edistymisen tallennus

Kaksitasoinen: localStorage (offline) + DynamoDB (synkronoitu):

```js
useProgress(moduleId)   // { progress, completeEpisode, isLocked }
useSympathy(moduleId)   // { sympathy, updateSympathy }
```

- **userId:** automaattisesti generoitu UUID (`localStorage('cg:userId')`)
- **Fallback:** API ei vastaa → localStorage-arvo
- **DynamoDB-synk:** asynkroninen, epäonnistuminen ei kaada peliä

---

## Skenaariogeneraattori

`scripts/generate_scenarios.py` — käyttää Claude Opus 4.7 API:a.

```bash
# Windows PowerShell
$env:ANTHROPIC_API_KEY = "sk-ant-..."
python scripts/generate_scenarios.py --module togaf
python scripts/generate_scenarios.py --module cloud --episodes 5 --per-episode 4

# Kaikki moduulit kerralla
foreach ($m in @("togaf","togaf-basics","archimate","cobit2019","cloud","az900","aws-clf-c02","gcp-fundamentals","itsm","it4it","it4it-advanced","ai-compliance","ai900","sabsa")) {
    python scripts/generate_scenarios.py --module $m
}
```

**Tuetut moduulit:** kaikki 14 (MODULE_CONTEXTS määritelty jokaiselle)  
**Tulostiedosto:** `src/data/scenarios/{moduleId}.js`  
**SSL-ohitus:** `httpx.Client(verify=False)` — pakollinen corporate proxy -ympäristössä  
**Enkoodaus:** Windows cp1252 → käytä ASCII-merkkejä konsolitulosteissa (ei ✓-merkkiä)  
**JSON-virhe:** Jos Claude palauttaa markdown-aitaukset (```json) skripti poistaa ne automaattisesti

---

## Paikallinen kehitys

```bash
npm install --strict-ssl=false
npm run dev        # http://localhost:5173
npm run build      # tuotantobuild → dist/
```

`.env.example` → kopioi `.env.local` ja aseta `VITE_API_URL`.

---

## AWS-infrastruktuuri

**Provider:** AWS CDK v2  
**Region:** `eu-north-1` (Tukholma)  
**Account:** `609247456986`

### Resurssit (deployattu 2026-05-27)

| Resurssi | Nimi / URL |
|----------|-----------|
| DynamoDB | `certgrinder-user-data` |
| Lambda | `certgrinder-user-data` (Python 3.12) |
| API Gateway | `https://ku422tldi6.execute-api.eu-north-1.amazonaws.com/` |
| S3 Bucket | `certgrinder-frontend-609247456986-eu-north-1` |
| CloudFront | `https://ddd8ui6hzibeo.cloudfront.net` |
| CloudFront ID | `EVR0BK0EBPDUO` |

### DynamoDB-skeema

```
PK: USER#<userId>
SK: MODULE#<moduleId>#progress | MODULE#<moduleId>#sympathy
```

### API-reitit

```
GET  /users/{userId}/modules/{moduleId}/progress
PUT  /users/{userId}/modules/{moduleId}/progress
GET  /users/{userId}/modules/{moduleId}/sympathy
PUT  /users/{userId}/modules/{moduleId}/sympathy
```

### Manuaalinen deploy (VS Code terminaali)

```powershell
cd infra
npm install --strict-ssl=false
$env:NODE_TLS_REJECT_UNAUTHORIZED = "0"
npx cdk bootstrap aws://609247456986/eu-north-1
npm run deploy
```

---

## CI/CD — GitHub Actions

**Tiedosto:** `.github/workflows/deploy.yml`  
**Triggerit:** push `main`-haaraan tai manuaalinen `workflow_dispatch`

| Job | Triggeroi kun | Tekee |
|-----|--------------|-------|
| `deploy-infra` | `infra/`-tiedostoja muutettu | `cdk deploy` |
| `deploy-frontend` | aina push main | build → S3 sync → CloudFront invalidation |

**S3-caching:** staattiset assetsit `max-age=31536000,immutable` · `index.html` `no-cache`

### GitHub Secrets (`github.com/salppa/certgrinder`)

| Secret | Arvo |
|--------|------|
| `AWS_ACCESS_KEY_ID` | IAM-avain |
| `AWS_SECRET_ACCESS_KEY` | IAM-salainen avain |
| `AWS_REGION` | `eu-north-1` |
| `VITE_API_URL` | `https://ku422tldi6.execute-api.eu-north-1.amazonaws.com/` |
| `S3_BUCKET` | `certgrinder-frontend-609247456986-eu-north-1` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `EVR0BK0EBPDUO` |

---

## Vaiheistus

| Vaihe | Status | Sisältö | Pvm |
|-------|--------|---------|-----|
| 1 | ✅ Valmis | UI-runko, glassmorphism, perusnäkymät, routing | 2026-05-26 |
| 2 | ✅ Valmis | Reigns swipe, resurssimittarit, consequence preview, game over | 2026-05-26 |
| 3 | ✅ Valmis | Mentori-ilmeet, aloitusmonologi, episodiprogressio, TOGAF-skenaariot | 2026-05-26 |
| 4 | ✅ Valmis | AWS CDK infra, Lambda, API GW, DynamoDB, S3, CloudFront, CI/CD | 2026-05-27 |
| 5 | ✅ Valmis | 14 moduulia, 24 mentori-kuvaa, 13 kysymyspankkia, 21 overviewta | 2026-05-28 |
| 6 | 🔲 Tulossa | Cognito-autentikointi, käyttäjäkohtainen historia, leaderboard | — |
| 7 | 🔲 Tulossa | Sympathy-mekaniikan aktivointi pelissä, moduulikohtaiset saavutukset | — |

---

## Avoimet päätökset

- **userId:** nyt localStorage UUID → vaihdetaan Cognito sub:iin Vaiheessa 6
- **CORS:** nyt `allowOrigins: ['*']` → rajata CloudFront-domainiin tuotannossa
- **Sympathy:** tallennetaan DynamoDB:hen mutta pelimekaniikka ei vielä käytä arvoa
- **chef-mentori:** kuvat olemassa mutta ei aktiivista moduulia
- **Overviewt:** linkitys peliin ei vielä toteutettu (suunniteltu Vaiheessa 7)
