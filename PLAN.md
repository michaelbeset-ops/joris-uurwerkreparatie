# Joris Uurwerkreparatie, Herten: klantsite (herziening oktober 2026)

Status: klant (geen demo). Preview op github.io, noindex, zolang er `[[AANLEVEREN]]` in staat.

## Richting
- Zwaartepunt: officieel Omega Service Center. Kop in de hero, eigen sectie direct eronder, vertrouwensblok met drie feiten.
- Sfeer: luxe, rustig, betrouwbaar. Geen brochuretaal, geen designertrucs (de grote vage JORIS-letters zijn weg).

## Typografie (bewuste afwijking van de zware standaardkoppen)
- Koppen: Cormorant Variable, gewicht 500, regelafstand 1,08, bijna geen letterspatiëring. Klassieke serif met karakter,
  licht genoeg om niet te schreeuwen. Dit is een horlogemaker; een zware grotesk zou de sfeer breken.
- Tekst: Hanken Grotesk Variable 400, 18px (1,125rem), regelafstand 1,6. Bijtekst in #3a4158 (8,6:1 op papier),
  nergens meer lichtgrijs of bruinig klein.
- Labels: 12px kapitaal, spatiëring .14em, in messing (#7d6233, 4,9:1) of licht-zacht op donker.
- Woordmerk: JORIS in de serif (1,75rem mobiel, 2rem desktop) met .3em spatiëring, Uurwerkreparatie in kapitaal eronder in messing.

## Kleur
- Papier #f5f1ea (warm gebroken wit), vlak #ebe5da, inkt #14213b (inktblauw, ook het donkere contactblok),
  messing #7d6233 / #d2b27a op donker. Niets anders.

## Afwerking (maatstaf: ZBN en B-Advice, bekeken uit hun repo's; de domeinen zijn hier geblokkeerd)
Dezelfde dichtheid als die sites, in de eigen sfeer van een horlogemaker: USP-balk, plakkende navigatie als kaart met
twee knoppen, hero met foto tot de rand en een feitenkaart op de foto (sterren, telefoon), merkenrij als pills,
kaarten met dunne lijn en lage schaduw, foto's die onderaan in wit overlopen, werkwijze met iconen en verbindlijn,
Google-blok met groot cijfer, afspraakkaart met formulier, afsluitende vraag, footer in vier kolommen, vaste balk op
mobiel. Geen pill-knoppen en geen afrondingen: rechte hoeken passen bij de serif en bij precisiewerk.

## Opbouw (één pagina plus privacy)
1. USP-balk (feiten van hun site) en navigatie met WhatsApp en Afspraak maken.
2. Hero: "Officieel Omega Service Center in Herten.", knoppen Afspraak maken en WhatsApp, bellen en mailen als links,
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
