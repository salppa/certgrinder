export default {
  moduleId: 'togaf',
  mentor: 'teacher',
  episodes: [
    {
      id: 1,
      title: 'Arkkitehtuuristrategia',
      monologue: 'Uusi TOGAF-projekti alkaa. Johto odottaa selkeää visiota. Jokainen päätöksesi muovaa organisaation suunnan vuosiksi.',
      scenarios: [
        {
          id: 's1e1',
          text: 'CTO vaatii välitöntä pilvimigraatiota. EA-tiimi suosittelee vaiheistettua piloinia 6 kk aikajänteellä. Kumman linjan valitset?',
          left:  { label: 'Välitön migraatio',   deltas: { r1: -25, r2: +15, r3: -20, r4: -15 }, consequence: 'Kustannukset räjähtävät, compliance-riskit kasvavat' },
          right: { label: 'Vaiheistettu pilotti', deltas: { r1:  -8, r2: +10, r3:  +5, r4: +12 }, consequence: 'Hallittu muutos, tiimi pysyy mukana' },
        },
        {
          id: 's2e1',
          text: 'Sidosryhmät vaativat kattavan arkkitehtuuridokumentaation viikon sisällä. Laatu kärsii kiireessä.',
          left:  { label: 'Toimita viikossa',      deltas: { r1: +5,  r2: -10, r3: -15, r4:  -8 }, consequence: 'Dokumentaatio on vajavainen, riskit kasvavat' },
          right: { label: 'Neuvottele aikataulu',  deltas: { r1: -3,  r2:  +8, r3: +12, r4: +10 }, consequence: 'Laadukas tulos, sidosryhmät ymmärtävät' },
        },
        {
          id: 's3e1',
          text: 'Arkkitehtuurikatselmus paljastaa 12 kriittistä poikkeamaa. Kaikkien korjaaminen vie 3 kuukautta.',
          left:  { label: 'Korjaa kaikki heti',   deltas: { r1: -18, r2:  -5, r3: +20, r4: -10 }, consequence: 'Compliance paranee mutta projekti hidastuu' },
          right: { label: 'Priorisoi kriittiset',  deltas: { r1:  -8, r2:  +5, r3: +10, r4:  +8 }, consequence: 'Tasapainoinen lähestymistapa' },
        },
        {
          id: 's4e1',
          text: 'Kehitystiimi haluaa ohittaa ADM-prosessin säästääkseen aikaa. Projekti on myöhässä.',
          left:  { label: 'Salli ohitus',          deltas: { r1: +10, r2:  +5, r3: -25, r4:  +5 }, consequence: 'Aikataulu pelastuu, governance kärsii pahasti' },
          right: { label: 'Pidä kiinni ADM:stä',  deltas: { r1:  -5, r2:  -5, r3: +15, r4:  -8 }, consequence: 'Prosessi-integriys säilyy, aikataulu venyy' },
        },
      ],
    },
    {
      id: 2,
      title: 'Liiketoiminta-arkkitehtuuri',
      monologue: 'Liiketoimintayksikköjen tarpeet ovat ristiriidassa teknisen todellisuuden kanssa. Sinun tehtäväsi on löytää tasapaino.',
      scenarios: [
        {
          id: 's1e2',
          text: 'Myyntiosasto vaatii CRM-järjestelmän vaihtoa kilpailijaa nopeammin. IT arvioi riskin suureksi.',
          left:  { label: 'Hyväksy vaihto',            deltas: { r1: -20, r2: -15, r3: -10, r4: +15 }, consequence: 'Liiketoiminta iloitsee, integraatiot hajoavat' },
          right: { label: 'Tee vaikutusanalyysi ensin', deltas: { r1:  -5, r2:  +5, r3:  +8, r4:  -5 }, consequence: 'Päätös lykkääntyy mutta perustuu tietoon' },
        },
        {
          id: 's2e2',
          text: 'HR-prosessit on dokumentoitu vanhassa formaatissa. Mallintaminen BPMN:llä veisi kuukauden.',
          left:  { label: 'Jatka vanhalla',   deltas: { r1: +8,  r2:  -8, r3:  -5, r4: +5 }, consequence: 'Nopea ratkaisu mutta yhteentoimivuus kärsii' },
          right: { label: 'Mallinna BPMN:llä', deltas: { r1: -10, r2: +15, r3: +10, r4: +8 }, consequence: 'Standardi luo pohjan tulevalle kehitykselle' },
        },
        {
          id: 's3e2',
          text: 'Kaksi liiketoimintayksikköä haluaa erilliset ERP-instanssit. IT suosittelee yhteistä.',
          left:  { label: 'Erilliset instanssit', deltas: { r1: -20, r2: -10, r3:  -8, r4: +20 }, consequence: 'Yksiköt tyytyväisiä, kustannukset kaksinkertaistuvat' },
          right: { label: 'Yhteinen instanssi',   deltas: { r1: +15, r2: +10, r3:  +5, r4: -15 }, consequence: 'Tehokas ratkaisu, yksiköt vastustelevat' },
        },
        {
          id: 's4e2',
          text: 'Arkkitehtuuriperiaatteet kieltävät shadow IT:n, mutta markkinointitiimi käyttää 8 hyväksymätöntä SaaS-palvelua.',
          left:  { label: 'Salli poikkeus',     deltas: { r1: -5,  r2: +8,  r3: -20, r4: +15 }, consequence: 'Tiimi joustaa, governance-kulttuuri heikkenee' },
          right: { label: 'Vaadi lopettamaan', deltas: { r1: +5,  r2: -5,  r3: +15, r4: -20 }, consequence: 'Periaatteet pitävät, tiimi turhautuu' },
        },
      ],
    },
    {
      id: 3,
      title: 'Tietojärjestelmäarkkitehtuuri',
      monologue: 'Data on organisaation arvokkain resurssi. Sovellukset ovat sen selkäranka. Tee viisaita valintoja.',
      scenarios: [
        {
          id: 's1e3',
          text: 'Data-arkkitehti suosittelee data mesh -mallia. Legacy-tiimi vaatii keskitettyä data warehousea.',
          left:  { label: 'Data mesh',       deltas: { r1: -15, r2: +20, r3:  -5, r4: +10 }, consequence: 'Moderni arkkitehtuuri, korkea toteutusriski' },
          right: { label: 'Keskitetty DW',   deltas: { r1:  -8, r2:  +5, r3: +10, r4:  -5 }, consequence: 'Tuttu ratkaisu, skaalautuvuus rajallinen' },
        },
        {
          id: 's2e3',
          text: 'Sovelluskatalogi on vanhentunut — 40 % sovelluksista dokumentoimatta. Päivitys vie 3 kk.',
          left:  { label: 'Priorisoi kriittiset', deltas: { r1:  -5, r2:  +8, r3:  +8, r4:  +5 }, consequence: 'Osittainen parannus nopeasti' },
          right: { label: 'Täydellinen päivitys',  deltas: { r1: -15, r2: +15, r3: +15, r4: -10 }, consequence: 'Kattava dokumentaatio, projekti sitoo resursseja' },
        },
        {
          id: 's3e3',
          text: 'Kaksi osastoa on rakentanut päällekkäiset asiakasrekisterit. Yhdistäminen rikkoo kummankin prosessit.',
          left:  { label: 'Pidä erillisinä',  deltas: { r1: +5,  r2: -10, r3: -12, r4:  +8 }, consequence: 'Datakonsistenssi kärsii, yksiköt tyytyväisiä' },
          right: { label: 'Yhdistä rekisterit', deltas: { r1: -12, r2: +12, r3: +10, r4: -12 }, consequence: 'Single source of truth, transitio on hankala' },
        },
        {
          id: 's4e3',
          text: 'Kehitystiimi haluaa siirtyä mikropalveluihin. Monolitti toimii, mutta on vaikea ylläpitää.',
          left:  { label: 'Modernisoi nyt',     deltas: { r1: -20, r2: +18, r3: -5,  r4:  +5 }, consequence: 'Merkittävä investointi, tulevaisuuden arkkitehtuuri' },
          right: { label: 'Refaktoroi monolitti', deltas: { r1:  -8, r2:  +8, r3: +5,  r4: +10 }, consequence: 'Inkrementaalinen parannus, pienempi riski' },
        },
      ],
    },
    {
      id: 4,
      title: 'Teknologia-arkkitehtuuri',
      monologue: 'Infrastruktuuri on arkkitehtuurin perusta. Väärä valinta maksaa vuosia.',
      scenarios: [
        {
          id: 's1e4',
          text: 'Vanhentunut konesali vie 35 % IT-budjetista. Siirtyminen pilveen maksaa enämman lyhyellä tähtäimlellä.',
          left:  { label: 'Pidä konesali',  deltas: { r1: +15, r2: -12, r3:  -5, r4:  +5 }, consequence: 'Budjetti helpottuu nyt, tekninen velka kasvaa' },
          right: { label: 'Siirry pilveen', deltas: { r1: -20, r2: +18, r3:  +8, r4: +10 }, consequence: 'Pitkäaikainen säästö, lyhytaikainen kipu' },
        },
        {
          id: 's2e4',
          text: 'Tietoturva-auditointi vaatii palvelimien päivitystä 30 päivässä. Resurssit eivät riitä.',
          left:  { label: 'Priorisoi kriittiset',  deltas: { r1: -10, r2:  -5, r3: +15, r4:  +5 }, consequence: 'Osittainen compliance, audit-löydös avoimena' },
          right: { label: 'Pyydä lisäresursseja', deltas: { r1: -18, r2:  +5, r3: +20, r4:  +8 }, consequence: 'Täydellinen compliance, budjetti ylittyy' },
        },
        {
          id: 's3e4',
          text: 'Vendor tarjoaa 5-vuotista sopimusta infra-palveluista 20 % alennuksella. Toimittajariippuvuus kasvaa.',
          left:  { label: 'Hyväksy sopimus',   deltas: { r1: +20, r2:  +5, r3: -15, r4:  +5 }, consequence: 'Merkittävä säästö, mutta lock-in-riski kasvaa' },
          right: { label: 'Neuvottele lyhyempi', deltas: { r1:  +8, r2:  +5, r3:  +5, r4:  +8 }, consequence: 'Pienempi alennus, enemmän joustavuutta' },
        },
        {
          id: 's4e4',
          text: 'DevOps-tiimi haluaa ottaa käyttöön Kubernetesin. Oppimiskäyrä on jyrkkä ja projekti kriittisessä vaiheessa.',
          left:  { label: 'Ota käyttöön nyt', deltas: { r1: -12, r2: +15, r3:  -8, r4: -15 }, consequence: 'Moderni infra, lyhytaikainen kaaos' },
          right: { label: 'Pilotoi ensin',     deltas: { r1:  -5, r2:  +8, r3:  +5, r4: +10 }, consequence: 'Hallittu oppiminen, hitaampi käyttöönotto' },
        },
      ],
    },
    {
      id: 5,
      title: 'Hallinto ja migraatio',
      monologue: 'Viimeinen episodi. Arkkitehtuurin arvo mitataan sen kyvyssä muuttua hallitusti. Tee viimeinen siirtosi viisaasti.',
      scenarios: [
        {
          id: 's1e5',
          text: 'Arkkitehtuurikatselmuslautakunta on pullonkaula — päätökset kestävät 3 viikkoa. Tiimit kiertävät prosessia.',
          left:  { label: 'Delegoi päätösvaltaa', deltas: { r1: +8,  r2: +12, r3: -15, r4: +15 }, consequence: 'Nopeus paranee, mutta governance hajoaa' },
          right: { label: 'Tehosta prosessia',    deltas: { r1: -5,  r2:  +8, r3: +10, r4:  +8 }, consequence: 'Governance säilyy, prosessi nopeutuu' },
        },
        {
          id: 's2e5',
          text: 'Legacy-migraatio on 6 kk myöhässä. Voidaan leikata scope tai pyyтää lisäbudjettia.',
          left:  { label: 'Leikkaa scopea', deltas: { r1: +15, r2: -12, r3:  -8, r4:  +5 }, consequence: 'Budjetti pelastuu, toiminnallisuudet jäävät puuttumaan' },
          right: { label: 'Lisäbudjetti',   deltas: { r1: -18, r2: +10, r3:  +5, r4: +10 }, consequence: 'Täydellinen toimitus, johdon luottamus koetuksella' },
        },
        {
          id: 's3e5',
          text: 'Uusi lainsäädäntö vaatii arkkitehtuurimuutoksia 6 kk siirtymäajalla. Nykyinen roadmap pitää uudelleenpriorisoida.',
          left:  { label: 'Compliance ensin', deltas: { r1: -15, r2: -10, r3: +25, r4:  -5 }, consequence: 'Lainmukainen toiminta, roadmap viivästyy' },
          right: { label: 'Rinnakkaistyö',   deltas: { r1: -20, r2:  +5, r3: +15, r4:  +5 }, consequence: 'Kallis mutta molemmat saavutetaan' },
        },
        {
          id: 's4e5',
          text: 'Arkkitehtuuriohjelma on saavuttanut tavoitteensa. Jatketaanko, lopetetaanko vai muutetaanko pysyväksi toiminnoksi?',
          left:  { label: 'Tee pysyvä toiminto', deltas: { r1: -10, r2: +10, r3: +15, r4: +10 }, consequence: 'Arkkitehtuuri institutionalisoituu osaksi kulttuuria' },
          right: { label: 'Päätä ohjelma',        deltas: { r1: +10, r2:  -5, r3: -10, r4:  +5 }, consequence: 'Resurssit vapautuvat, käytännöt voivat heikentyä' },
        },
      ],
    },
  ],
}
