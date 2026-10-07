# Joris Uurwerkreparatie, Herten: klantsite (herziening oktober 2026)

Status: klant (geen demo). Preview op github.io, noindex, zolang er `[[AANLEVEREN]]` in staat.

## Richting
- Zwaartepunt: officieel Omega Service Center. Kop in de hero, eigen sectie direct eronder, vertrouwensblok met drie feiten.
- Sfeer: luxe, rustig, betrouwbaar. Geen brochuretaal, geen designertrucs (de grote vage JORIS-letters zijn weg).

## Richting (8 okt 2026, na feedback Michael: "betrouwbaar, kwaliteit, strak", maatstaf Afzetbak.nl, ZBN, B-Advice)
Patroon van die sites, met een eigen identiteit voor een horlogemaker:
- USP-balk met vinkjes en de Google-score, zwevende witte navigatiekaart met telefoon en "Afspraak maken".
- Schermvullende foto-hero (eigen werkbankfoto, 1600 breed) met witte kop "Officieel Omega Service Center in Herten.",
  twee knoppen en rechts de feiten: sterren 4,5, plaats, groot telefoonnummer.
- Merkenrij als pills, Omega-blok met vinkjes en foto plus zwevende badge, diensten als rijkaarten met foto,
  werkwijze in een marine paneel met iconen en verbindlijn, Over met Google-scorekaart, "Waarom kiezen voor Joris?"
  met schildjes, Rolex-prijskaart, afspraakkaart in marine met formulier, afsluitende vraag, footer, mobiele balk.

## Typografie en kleur
- Red Hat Display (koppen 800, -0.025em) en Red Hat Text (18px). Stevig en zakelijk, niet modieus.
- Marineblauw #0f2a4a als enige merkkleur (knoppen, panelen, iconen), wit en koel lichtgrijs #f3f5f8, groen alleen voor
  vinkjes, geel alleen voor sterren. Afgeronde hoeken (12 tot 28px) en zachte schaduwen, zoals op Michaels eigen sites.

## Eerdere afwerkingsnotities
Dezelfde dichtheid als die sites, in de eigen sfeer van een horlogemaker: USP-balk, plakkende navigatie als kaart met
twee knoppen, hero met foto tot de rand en een feitenkaart op de foto (sterren, telefoon), merkenrij als pills,
kaarten met dunne lijn en lage schaduw, foto's die onderaan in wit overlopen, werkwijze met iconen en verbindlijn,
Google-blok met groot cijfer, afspraakkaart met formulier, afsluitende vraag, footer in vier kolommen, vaste balk op
mobiel. Geen pill-knoppen en geen afrondingen: rechte hoeken passen bij de serif en bij precisiewerk.

## Opbouw (één pagina plus privacy)
1. USP-balk (feiten van hun site) en navigatie met WhatsApp en Afspraak maken, zwevend over de hero.
2. Hero schermvullend (100svh) in inktblauw; foto kaliber 321 over de volle hoogte rechts (op ware grootte, 720x900),
   loopt naar links over in het blauw; op mobiel ligt de foto achter de tekst. "Officieel Omega Service Center in Herten.",
   knoppen Afspraak maken en WhatsApp, bellen en mailen als links,
   drie feiten met icoon (Omega, Longines en Rado, Google 4,5 uit 38), foto kaliber 321 met feitenkaart.
3. Merkenrij: alle merken van hun site als pills, Omega vol.
4. Omega Service Center (donker): vier punten met vinkjes, foto Omega-houder, plek voor certificaat, modellenkaart.
5. Diensten: vijf kaarten (drie met foto, twee met icoon) plus merkenkaart.
6. Werkwijze: vier stappen met icoon, nummer en verbindlijn.
7. Over: plek voor portret, Google-kaart met groot cijfer en sterren, werkgebied, werkplaats, vier zekerheden als AANLEVEREN.
8. Rolex, compact: prijstabel in een kaart, disclaimer "geen officieel Rolex-servicecentrum. Rolex is een geregistreerd merk van Rolex SA."
9. Afspraak (donker): uitleg, kanalen, formulier dat WhatsApp of e-mail opent met het bericht ingevuld.
10. Afsluiter met grote vraag, footer (woordmerk, contact, werkplaats, pandfoto, KvK en btw als AANLEVEREN), mobiele balk.

## Foto's
- Bron: bron/fotos (origineel), bewerkt via tools/fotos.mjs naar src/assets met één behandeling (verzadiging .88,
  contrast +8%, iets warmer). Pand bijgesneden zonder auto (505x630) en klein getoond. Onderdelenfoto (zacht) en
  Seamaster-in-doosje niet meer gebruikt.
- Geen foto groter dan de bron: kaliber 321 (720 breed) op 720 css-px in de hero, Omega-houder (1150) max 585, groen (1600),
  Seamaster (1280) en onderdelen (960) als kaartfoto's van max 390 css-px.
- Foto's van internet: Unsplash, Pexels en Wikimedia zijn vanuit deze omgeving geblokkeerd; Canva-beeldgeneratie gaf alleen
  thumbnails van 200 px en zat daarna door het tegoed heen. Daarom alleen eigen foto's en twee AANLEVEREN-vlakken.

## Bugfix (titels die niet renderden)
De broncode bevatte alle titels; de HTML in dist ook. De enige manier waarop server-gerenderde tekst onzichtbaar kon
blijven was de verschijn-animatie: elk `.rijs`-blok stond op opacity 0 tot een IntersectionObserver `.in` toevoegde.
Dat mechanisme is helemaal verwijderd; alle inhoud staat nu zonder JavaScript op de pagina.

## Zelf gekozen
- Geen merklogo's; merknamen in tekst tot Hugo bevestigt dat het mag.
- Geen batterijservice en geen verzending genoemd (hun site zegt dat ze dat niet doen; verzending staat op de AANLEVEREN-lijst).
- WhatsApp-formulier verstuurt zelf niets, opent WhatsApp met een voorbereid bericht. Daarom geen cookiemelding.

## Bronnen
jorisuurwerkreparatie.nl (bron/site-tekst.txt, 2 oktober 2026), Google-profiel (4,5 uit 38, eigenaar Hugo Joris).

## Logo en menu (8 okt 2026)
- Logo: aangeleverd door Michael (bron/logo/logo-origineel.png), witte achtergrond transparant gemaakt met tools/logo.mjs
  naar src/assets/logo.png. In de kop op wit, in de footer op een wit vlak (donkere letters zijn op marine niet leesbaar).
- Menu: uitklapmenu's voor Merken (zes merkgroepen), Diensten (vijf diensten plus werkwijze) en Contact (afspraak,
  WhatsApp, bellen, e-mail, route), met icoon en uitleg per regel; werkt met hover en toetsenbord. Bovenbalk met
  WhatsApp, e-mail en de Google-score. Mobiel: uitklapbare groepen en een belknop naast het menu.

## Kop en calculator (7 okt 2026)
- Kop: dunne donkere balk (vinkjes, WhatsApp, mail, Google) en daaronder een vaste witte menubalk over de volle breedte.
  De hero begint onder de kop en vult de rest van het scherm.
- Reparatiecalculator (#prijzen): merk kiezen, onderdelen aanvinken, prijsindicatie en de selectie via WhatsApp sturen.
  Prijzen in src/data/prijzen.ts. Alleen echte prijzen: Rolex-servicebeurten en polijsten (125, alleen bij servicebeurt).
  Alle andere prijzen zijn null = [[AANLEVEREN]] en tonen "prijs na onderzoek".

## Audit verwerkt (7 okt 2026)
- Geen zichtbare [[AANLEVEREN]] meer op de site: ontbrekende gegevens zijn verborgen tot Hugo ze aanlevert. De markeringen
  staan als commentaar in de bron (grep -rn AANLEVEREN src/). KvK en btw via site.kvk/site.btw, verschijnen vanzelf.
- Verificatiebalk onder de hero met links naar de officiële OMEGA-vermelding (storedetails/2085045, Aan de Dijk 126 Herten),
  de Longines-vermelding en Google. Ook in de Omega-sectie en de footer.
- Rolex: "Onafhankelijke service voor uw Rolex", origineel-of-generiek als apart blok met de waarde-afweging, disclaimer
  prominent. Polijsten alleen als de klant dat wil.
- Waarom-blok: alleen bevestigde feiten (garantie, doorlooptijd, verzekering, opsturen volgen na bevestiging).
- Niet gedaan, wacht op Hugo: aparte pagina's, gedocumenteerde intake/ontvangstbewijs, garantie, FAQ, "sinds 2017 niveau 3".

## Prijsindicatie: twee pakketten (verkoop Sitefront)
- Basis, 100 euro: src/components/Calculator.astro. Merk als knoppen, dienst als tegels met icoon, vanaf-prijs met
  uitleg wat erbij hoort, knoppen WhatsApp (bericht met merk en dienst) en bellen.
- Uitgebreid, 249 euro: src/components/CalculatorUitgebreid.astro. Stappenplan (merk, werkzaamheden, uw horloge,
  overzicht), noodzakelijk en optioneel werk gescheiden, "Wat houdt dit in?" per onderdeel, Rolex-model, opgeteld totaal
  in een meelopend vak, gegevens over het horloge (model, type, klacht, sinds, laatste service, contact, voorkeur),
  overzicht naar WhatsApp of e-mail, kopiëren, printen/pdf, keuzes onthouden in de browser.
- Schakelaar: src/components/Prijsindicatie.astro toont in de preview een demoschakelaar (ook via ?pakket=uitgebreid).
  Bij oplevering: site.preview = false en site.prijsindicatie = 'basis' of 'uitgebreid' in src/data/site.ts.
- Beide lezen dezelfde prijzen uit src/data/prijzen.ts.
- Uitgebreid verstuurt per e-mail via Web3Forms (PUBLIC_WEB3FORMS_KEY bij de build), met aanvraagnummer (JU-jjmmdd-...),
  antwoordadres van de klant en het hele overzicht. Zonder sleutel: demostand, er wordt niets verstuurd.
- Voorbeeldprijzen in src/data/prijzen.ts (toonVoorbeeldprijzen). Op false zetten zodra Hugo echte prijzen levert.
