# CertGrinder — Tuotedokumentaatio

**Versio:** 0.1.0  
**Päivitetty:** 2026-05-27  
**Status:** Vaihe 1–4 valmis — CI/CD käytössä

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

## Hakemistorakenne

```
certgrinder/
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
│   │   ├── EpisodeSelect.jsx        # Episodivalinta — lukituslogi
│   │   ├── ReignsScreen.jsx         # Pääpelinäkymä — swipe + mittarit
│   │   ├── EpisodeComplete.jsx      # Episodi läpäisty
│   │   └── GameOver.jsx             # Peli päättyi — mentori lohduttaa
│   ├── data/
│   │   ├── modules.js               # Moduulimäärittelyt + MODULE_MENTOR-map
│   │   └── scenarios/
│   │       └── togaf.js             # TOGAF: 5 episodia, 3–4 skenaariota/episodi
│   ├── hooks/
│   │   └── useProgress.js           # useProgress + useSympathy (localStorage + API)
│   └── lib/
│       └── api.js                   # REST-kutsut API Gatewayhin
├── infra/                           # AWS CDK v2
│   ├── lib/
│   │   ├── app.ts                   # CDK app entry point
│   │   └── certgrinder-stack.ts     # DynamoDB + Lambda + API GW + S3 + CloudFront
│   ├── lambda/
│   │   └── user_data.py             # Lambda handler (Python 3.12)
│   ├── cdk.json
│   ├── tsconfig.json
│   └── package.json
├── scripts/
│   └── generate_scenarios.py        # Claude API -pohjainen skenaariogeneraattori
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
| Skenaariot | Anthropic Claude API | — |

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

## Moduulit

| ID | Nimi | Mentori | Skenaariot | Episodit | Kysymyksiä |
|----|------|---------|-----------|----------|-----------|
| `togaf` | TOGAF | teacher | ✅ | 5 | 120 |
| `cloud` | Cloud Architecture | cloud-architect | ❌ | 5 | 85 |
| `itsm` | ITSM / ITIL | itsm-consultant | ❌ | 5 | 95 |

`[SIMULAATIO]`-badge näkyy vain kun `module.hasScenarios === true`.

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
**Fallback:** kuva puuttuu → emoji automaattisesti  
**Valinta:** automaattinen moduulin perusteella (`MODULE_MENTOR` map `data/modules.js`)

---

## Episodirakenne

- **5 episodia** per moduuli, lukittu järjestyksessä
- **Aloitusmonologi** per episodi (MentorMonologue-komponentti)
- **3–4 skenaariota** per episodi, satunnaisessa järjestyksessä
- **Lukituslogiikka:** episodi n on saatavilla vasta kun n−1 on suoritettu

### TOGAF-episodit

| Episodi | Otsikko |
|---------|---------|
| 1 | Arkkitehtuuristrategia |
| 2 | Liiketoiminta-arkkitehtuuri |
| 3 | Teknologia-arkkitehtuuri |
| 4 | Governance & Compliance |
| 5 | Muutoshallinta |

### Skeema (scenarios/togaf.js)

```js
{
  moduleId: 'togaf',
  mentor: 'teacher',
  episodes: [{
    id: 1,
    title: '...',
    monologue: '...',          // mentori puhuu ennen episodia
    scenarios: [{
      id: 's1e1',
      text: '...',             // tilannekuvaus
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

## Edistymisen tallennus (useProgress + useSympathy)

Kaksitasoinen tallennus: localStorage (offline) + DynamoDB (synkronoitu):

```js
useProgress(moduleId)   // { progress, completeEpisode, isLocked }
useSympathy(moduleId)   // { sympathy, updateSympathy }
```

- **userId:** `localStorage('cg:userId')` — automaattisesti generoitu UUID
- **Fallback:** jos API ei vastaa, käytetään localStorage-arvoa
- **DynamoDB-synk:** asynkroninen, epäonnistuminen ei kaada peliä

---

## Skenaariogeneraattori

`scripts/generate_scenarios.py` — generoi `scenarios.js`-tiedostot Claude API:n avulla.

```bash
export ANTHROPIC_API_KEY=sk-...
python generate_scenarios.py --module togaf
python generate_scenarios.py --module cloud --episodes 5 --per-episode 4
```

Generoidaan build-time, ei runtime.

---

## Paikallinen kehitys

```bash
npm install
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

### Manuaalinen deploy

```bash
cd infra
npm install --strict-ssl=false
npx cdk bootstrap
npm run deploy
```

---

## CI/CD — GitHub Actions

**Tiedosto:** `.github/workflows/deploy.yml`  
**Triggerit:** push `main`-haaraan tai manuaalinen `workflow_dispatch`

### Pipeline

| Job | Triggeroi kun | Tekee |
|-----|--------------|-------|
| `deploy-infra` | `infra/`-tiedostoja muutettu | `cdk deploy` |
| `deploy-frontend` | aina push main | build → S3 sync → CloudFront invalidation |

### S3-caching-strategia

- Staattiset assetsit (`dist/**` paitsi `index.html`): `max-age=31536000,immutable`
- `index.html`: `no-cache,no-store,must-revalidate`

### GitHub Secrets

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

| Vaihe | Status | Sisältö | Sessio |
|-------|--------|---------|--------|
| 1 | ✅ Valmis | UI-runko, glassmorphism, perusnäkymät, routing | 2026-05-26 |
| 2 | ✅ Valmis | Reigns swipe, resurssimittarit, consequence preview, game over | 2026-05-26 |
| 3 | ✅ Valmis | Mentori-ilmeet, aloitusmonologi, episodiprogressio, TOGAF-skenaariot | 2026-05-26 |
| 4 | ✅ Valmis | AWS CDK infra, Lambda, API GW, DynamoDB, S3, CloudFront, CI/CD | 2026-05-27 |
| 5 | 🔲 Tulossa | Sympathy-tallennuksen testaus tuotannossa, lisää moduuleja (cloud, itsm) | — |
| 6 | 🔲 Tulossa | Kognitoautentikointi, käyttäjäkohtainen historia, leaderboard | — |

---

## Avoimet päätökset

- `scenarios.js` puuttuu `cloud`- ja `itsm`-moduuleilta — generoi `generate_scenarios.py`:llä
- Sympathy-arvo: nyt tallennetaan, mutta pelimekaniikka ei vielä käytä sitä
- userId: nyt localStorage UUID — vaihdetaan Cognito sub:iin Vaiheessa 6
- CORS: nyt `allowOrigins: ['*']` — rajata CloudFront-domainiin tuotannossa
