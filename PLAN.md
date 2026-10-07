# Joris Uurwerkreparatie, Herten: klantsite (herziening oktober 2026)

Status: klant (geen demo). Preview op github.io, noindex, zolang er `[[AANLEVEREN]]` in staat.

## Richting
- Zwaartepunt: officieel Omega Service Center. Kop in de hero, eigen sectie direct eronder, vertrouwensblok met drie feiten.
- Sfeer: luxe, rustig, betrouwbaar. Geen brochuretaal, geen designertrucs (de grote vage JORIS-letters zijn weg).

## Typografie (variant A "Nacht", gekozen door Michael 7 okt 2026)
- Eén letter voor alles: Instrument Sans Variable. Koppen 500 met -0.03em, h1 tot 92px; tekst 400, 18px.
  Geen serif en geen gespatieerde kapitalen meer: die gaven de AI-luxe-look.
- Woordmerk "Joris Uurwerkreparatie" in tekst, Joris half vet. Leesbaar op mobiel.

## Kleur
- Zwart #0b0b0c (hero, contact), warm wit #f4f2ee, tekst #121314 en #474a51. Geen kleuraccent; alleen de Google-sterren.
- Rechte hoeken, dunne lijnen, geen schaduwen.

## Hero
- Schermvullend (100svh) zwart. Foto: de Omega Seamaster uit hun Google-profiel (1600x1600), zwart-wit en gedimd,
  rechts op 62% van de breedte, met een CSS-masker dat naar links in het zwart overloopt. Op 1440 en 1920 breed
  kleiner dan de bron, dus scherp. Mobiel: horloge bovenin, tekst eronder op zwart.
- Kop vast bovenaan: transparant op de hero, donkere balk na scrollen.

## Afwerking (maatstaf: ZBN en B-Advice, bekeken uit hun repo's; de domeinen zijn hier geblokkeerd)
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
