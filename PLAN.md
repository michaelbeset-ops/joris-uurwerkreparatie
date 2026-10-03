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

## Opbouw (één pagina plus privacy)
1. Hero: kop "Officieel Omega Service Center in Herten.", knop Afspraak maken (naar het contactblok), WhatsApp/Bellen/Mailen
   als gelijkwaardige tekstlinks, vertrouwensblok (Omega, Longines en Rado, Google 4,5 uit 38), foto kaliber 321.
2. Omega Service Center: vier feiten van hun Omega-pagina, plek voor certificaat/bordje, foto Omega-houder.
3. Diensten (vijf, van hun servicepagina's) en merken.
4. Werkwijze (vier stappen, genummerd 01 tot 04).
5. Over: plek voor portret, Google-samenvatting, werkgebied, en vier zekerheden als AANLEVEREN.
6. Rolex, compact, met de disclaimer "geen officieel Rolex-servicecentrum. Rolex is een geregistreerd merk van Rolex SA."
7. Contact (donker): kanalen, WhatsApp-berichtopbouw, adres, KvK en btw als AANLEVEREN.

## Foto's
- Bron: bron/fotos (origineel), bewerkt via tools/fotos.mjs naar src/assets met één behandeling (verzadiging .88,
  contrast +8%, iets warmer). Pand bijgesneden zonder auto (505x630) en klein getoond. Onderdelenfoto (zacht) en
  Seamaster-in-doosje niet meer gebruikt.
- Geen foto groter dan de bron: kaliber 321 (720 breed) max 490 css-px, Omega-houder (1150) max 585, groen (1600) max 480.

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
