# CertGrinder — Tuotedokumentaatio

**Versio:** 0.1.0  
**Päivitetty:** 2026-05-27  
**Status:** Vaihe 1 + 2 valmis — Infra deployattu, CI/CD käytössä

---

## Kuvaus

CertGrinder on CertDrillin rinnalle rakennettu uusi tuote, joka gamifioi
sertifikaattivalmistelun Reigns-tyylisellä kriisinhallintasimulaattorilla.
Glassmorphism-ulkoasulla, dynaamisilla mentoreilla ja emotionaalisella
designilla.

**Oma GitHub-repo:** [github.com/salppa/certgrinder](https://github.com/salppa/certgrinder)  
**CertDrill-repo:** [github.com/salppa/certdrill](https://github.com/salppa/certdrill)

---

## Hakemistorakenne

```
certgrinder/
├── .github/
│   └── workflows/
│       └── deploy.yml           # CI/CD — build + S3 + CloudFront
├── src/
│   ├── App.jsx                  # Router + taustaefektit
│   ├── main.jsx                 # React entry point
│   ├── theme/index.js           # T-tokenit + glass-objekti
│   ├── components/
│   │   ├── GlassCard.jsx        # Glassmorphism-peruskortti
│   │   ├── ResourceMeter.jsx    # R1–R4 mittari (Framer Motion)
│   │   ├── MentorAvatar.jsx     # Mentori + 4 ilmettä + fallback emoji
│   │   └── MentorMonologue.jsx  # Aloitusmonologi per episodi
│   ├── screens/
│   │   ├── Dashboard.jsx        # Etusivu
│   │   ├── ModulePicker.jsx     # Moduulivalinta + [SIMULAATIO]-badge
│   │   ├── ReignsScreen.jsx     # Pääpelinäkymä (swipe + mittarit)
│   │   ├── EpisodeSelect.jsx    # Episodivalinta
│   │   ├── EpisodeComplete.jsx  # Episodi läpi
│   │   └── GameOver.jsx         # Peli päättyi — mentori lohduttaa
│   ├── data/
│   │   ├── modules.js           # Moduulimäärittelyt + mentor-mapping
│   │   └── scenarios/
│   │       └── togaf.js         # TOGAF-skenaariot
│   ├── hooks/useProgress.js     # Edistymisen hallinta
│   └── lib/api.js               # API-kutsukirjasto
├── infra/                       # AWS CDK v2
│   ├── lib/
│   │   ├── app.ts               # CDK app entry point
│   │   └── certgrinder-stack.ts # Stack-määrittely
│   ├── lambda/
│   │   └── user_data.py         # Lambda-funktio (Python 3.12)
│   ├── cdk.json
│   ├── tsconfig.json
│   └── package.json
├── docs/CERTGRINDER.md          # Tämä tiedosto
├── package.json
└── vite.config.js
```

---

## Teema — Glassmorphism

| Token | Arvo | Käyttö |
|-------|------|--------|
| `T.glass` | `rgba(255,255,255,0.65)` | Korttien tausta |
| `T.glassBlur` | `blur(12px)` | `backdrop-filter` |
| `T.glassBorder` | `rgba(255,255,255,0.40)` | Korttien reunus |
| `T.radius` | `24` | Kaikkien korttien pyöristys |
| `T.bgFrom` | `#F8FAFC` | Tausta gradient alku |
| `T.bgTo` | `#EFF6FF` | Tausta gradient loppu |

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
- **Swing amplitude:** ±15 per swipe
- **Game over:** arvo ≤ 0 tai ≥ 100
- **Varoitustila:** arvo ≤ 15 tai ≥ 85 (mittari muuttuu punaiseksi)
- **Consequence preview:** aktivoituu 30px drag-vaiheessa

---

## Mentorit

| ID | Nimi | Moduuli | Väri |
|----|------|---------|------|
| `teacher` | Suomalainen opettaja | togaf | `#6366f1` |
| `cloud-architect` | Cloud-arkkitehti | cloud | `#3b82f6` |
| `ea-strategist` | EA-Strategi | ea | `#8b5cf6` |
| `itsm-consultant` | ITSM-konsultti | itsm | `#10b981` |
| `ai-compliance` | AI-Compliance | ai | `#f59e0b` |
| `chef` | Kokki | chef | `#ef4444` |

**Kuvat:** `public/assets/mentors/{mentorId}-{mood}.png`  
**Ilmeet:** `neutral` · `worried` · `angry` · `relieved`  
**Fallback:** Jos kuva puuttuu → emoji automaattisesti

**Mentori valitaan automaattisesti moduulin perusteella** (`MODULE_MENTOR` map `data/modules.js`)

---

## Episodirakenne

- **5 episodia** per moduuli
- **~1–2 domainia** per episodi
- **3–4 satunnaista skenaariota** per episodi
- Episodit lukitaan järjestyksessä (edellinen pitää suorittaa)

---

## Navigaatio

```
/dashboard            → Etusivu
/modules              → Moduulivalinta
/modules/:moduleId    → Episodivalinta
/reigns/:moduleId     → Reigns-pelinäkymä
/gameover/:moduleId   → Game over
/complete/:moduleId   → Episodi läpi
```

[SIMULAATIO]-nappi moduulikorteissa näkyy vain kun `module.hasScenarios === true`.

---

## Vaiheistus

| Vaihe | Status | Sisältö |
|-------|--------|---------|
| 1 | ✅ Valmis | UI-runko, glassmorphism theme, perusnäkymät, routing |
| 2 | ✅ Valmis | Reigns swipe, resurssimittarit, consequence preview, game over |
| 3 | ✅ Valmis | Mentori-ilmeet, aloitusmonologi, episodiprogressio, skenaariot |
| 4 | ✅ Valmis | AWS infra (CDK), Lambda, API Gateway, DynamoDB, S3, CloudFront |
| 5 | 🔲 Tulossa | DynamoDB sympathy-arvo, episodiprogressio tallennus, TOGAF-pilotti |

---

## Paikallinen kehitys

```bash
npm install
npm run dev
```

---

## AWS-infrastruktuuri

**Provider:** AWS CDK v2.1120+  
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

### Infra-deploy manuaalisesti

```bash
cd infra
npm install --strict-ssl=false
npx cdk bootstrap
npm run deploy
```

---

## CI/CD — GitHub Actions

**Tiedosto:** `.github/workflows/deploy.yml`  
**Triggerit:** push `main`-haaraan tai manuaalinen käynnistys

### Pipeline

1. **deploy-infra** — CDK deploy (vain jos `infra/`-tiedostoja muutettu)
2. **deploy-frontend** — `npm run build` → S3 sync → CloudFront invalidation

### GitHub Secrets (kaikki asetettu)

| Secret | Kuvaus |
|--------|--------|
| `AWS_ACCESS_KEY_ID` | IAM-avain |
| `AWS_SECRET_ACCESS_KEY` | IAM-salainen avain |
| `AWS_REGION` | `eu-north-1` |
| `VITE_API_URL` | API Gateway -osoite |
| `S3_BUCKET` | Frontend-bucket |
| `CLOUDFRONT_DISTRIBUTION_ID` | `EVR0BK0EBPDUO` |

---

## Avoimet päätökset (Vaihe 5+)

- `format=3` endpoint rakennetaan Vaiheessa 5
- Scenarios.js-skeema: lisää moduuleja togaf-mallin pohjalta
- Python batch-skripti: generoi skenaarioita build-time, ei runtime
- Sympathy value (Vs) DynamoDB: `USER#<id>` / `MODULE#<id>#sympathy`
