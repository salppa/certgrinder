# CertGrinder — Tuotedokumentaatio

**Versio:** 0.1.0  
**Päivitetty:** 2026-05-27  
**Status:** Vaihe 1 + 2 valmis — Infra valmisteilla

---

## Kuvaus

CertGrinder on CertDrillin rinnalle rakennettu uusi tuote, joka gamifioi
sertifikaattivalmistelun Reigns-tyylisellä kriisinhallintasimulaattorilla.
Glassmorphism-ulkoasulla, dynaamisilla mentoreilla ja emotionaalisella
designilla.

---

## Hakemistorakenne

```
certgrinder/
├── src/
│   ├── App.jsx                  # Router + taustaefektit
│   ├── main.jsx                 # React entry point
│   ├── theme/index.js           # T-tokenit + glass-objekti
│   ├── components/
│   │   ├── GlassCard.jsx        # Glassmorphism-peruskortti
│   │   ├── ResourceMeter.jsx    # R1–R4 mittari (Framer Motion)
│   │   └── MentorAvatar.jsx     # Mentori + 4 ilmettä + fallback emoji
│   ├── screens/
│   │   ├── Dashboard.jsx        # Etusivu
│   │   ├── ModulePicker.jsx     # Moduulivalinta + [SIMULAATIO]-badge
│   │   ├── ReignsScreen.jsx     # Pääpelinäkymä (swipe + mittarit)
│   │   └── GameOver.jsx         # Peli päättyi — mentori lohduttaa
│   └── data/modules.js          # Moduulimäärittelyt + mentor-mapping
├── infra/                       # AWS CDK — tulossa (Vaihe 4)
│   ├── bin/                     # CDK app entry point
│   ├── lib/                     # Stack-määrittelyt
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
/dashboard          → Etusivu
/modules            → Moduulivalinta
/reigns/:moduleId   → Reigns-pelinäkymä
/gameover/:moduleId → Game over
```

[SIMULAATIO]-nappi moduulikorteissa näkyy vain kun `module.hasScenarios === true`.

---

## Vaiheistus

| Vaihe | Status | Sisältö |
|-------|--------|---------|
| 1 | ✅ Valmis | UI-runko, glassmorphism theme, perusnäkymät, routing |
| 2 | ✅ Valmis | Reigns swipe, resurssimittarit, consequence preview, game over |
| 3 | 🔲 Tulossa | Mentori-ilmeet, aloitusmonologi per episodi, episodiprogressio |
| 4 | 🔲 Tulossa | `format=3` backend-endpoint, `scenarios.js` per moduuli, Python batch |
| 5 | 🔲 Tulossa | DynamoDB sympathy-arvo, episodiprogressio, TOGAF-pilotti |

---

## Asennus

```bash
cd certgrinder
npm install
npm run dev
```

---

## AWS-infrastruktuuri

**Provider:** AWS CDK v2  
**Region:** `eu-north-1` (Tukholma)  
**Repo:** [github.com/salppa/certdrill](https://github.com/salppa/certdrill)

### Deploy (kun infra-kansio on luotu)

```bash
cd certgrinder/infra
npm install
npx cdk bootstrap
npm run deploy
```

### Edellytykset

- AWS CLI asennettu ja konfiguroitu (`aws configure list`)
- CDK: `npx cdk --version`
- Avaimet: `~/.aws/credentials` + region `eu-north-1`

---

## Avoimet päätökset (Vaihe 3+)

- `format=3` endpoint rakennetaan Vaiheessa 4
- Scenarios.js-skeema määritellään ennen Vaihetta 4
- Python batch-skripti: generoi skenaarioita build-time, ei runtime
- Sympathy value (Vs) DynamoDB: `{userId}:{moduleId}:sympathy`, per moduuli
