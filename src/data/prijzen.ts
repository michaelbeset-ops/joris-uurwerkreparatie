// Prijzen voor de reparatiecalculator. ALLEEN echte prijzen invullen.
// Bekend (jorisuurwerkreparatie.nl, Rolex-pagina): Rolex-servicebeurten en polijsten vanaf € 125 (alleen bij een servicebeurt).
// Alle andere prijzen staan op null = [[AANLEVEREN: prijs van Hugo]]. De calculator toont dan "prijs na onderzoek".
// Prijs per merk: { omega: 395 } of één prijs voor alle merken: { alle: 85 }.

// VOORBEELDPRIJZEN: alleen om de calculator te laten zien zolang Hugo zijn eigen prijzen nog niet heeft aangeleverd.
// Ze worden gebruikt waar hierboven/hieronder null staat, en alleen zolang toonVoorbeeldprijzen true is.
// [[AANLEVEREN: echte prijzen van Hugo; daarna toonVoorbeeldprijzen op false zetten]]
export const toonVoorbeeldprijzen = true;
export const voorbeeldprijzen: Record<string, Partial<Record<string, number>>> = {
  servicebeurt: { omega: 395, longines: 295, rado: 295, swatch: 195, overig: 325 },
  glas: { alle: 85 },
  wijzerplaat: { alle: 145 },
  wijzers: { alle: 65 },
  kroon: { alle: 95 },
  waterdicht: { alle: 45 },
  band: { alle: 35 },
};

export type Merk = 'omega' | 'longines' | 'rado' | 'rolex' | 'swatch' | 'overig';

export const merken: { id: Merk; naam: string; uitleg: string }[] = [
  { id: 'omega', naam: 'Omega', uitleg: 'Officieel Service Center' },
  { id: 'longines', naam: 'Longines', uitleg: 'Erkend servicecenter' },
  { id: 'rado', naam: 'Rado', uitleg: 'Erkend servicecenter' },
  { id: 'rolex', naam: 'Rolex', uitleg: 'Vaste servicebeurtprijzen' },
  { id: 'swatch', naam: 'Hamilton, Tissot, Mido, Certina', uitleg: 'Swatch Group' },
  { id: 'overig', naam: 'Ebel, Nomos, Mühle', uitleg: 'Met originele onderdelen' },
];

// Modellen per merk, alleen zoals Hugo ze op zijn eigen site noemt. Bij elk merk kan de klant ook "Ander model" invullen.
export const modellen: Partial<Record<Merk, string[]>> = {
  omega: ['Speedmaster', 'Seamaster', 'Constellation', 'De Ville'],
  longines: ['Master Collection', 'HydroConquest', 'Conquest', 'Spirit', 'DolceVita', 'Heritage'],
  rado: ['DiaStar', 'True', 'Centrix', 'HyperChrome', 'Captain Cook', 'DiaMaster', 'Integral'],
  rolex: ['Submariner', 'Datejust', 'Day-Date', 'Air-King', 'GMT-Master', 'Explorer', 'Oyster Perpetual', 'Super Precision'],
};
// Rolex-modellen met een GMT-kaliber (bepaalt de prijscategorie, zoals op Hugo's Rolex-pagina).
export const rolexGmtModellen = ['GMT-Master'];
// Grens voor "30 jaar en ouder" (Hugo's Rolex-pagina).
export const rolexOudVanaf = 30;
export const materialen = ['Staal', 'Staal en goud (bicolor)', 'Goud', 'Platina', 'Keramiek', 'Titanium'];

type Prijs = Partial<Record<Merk | 'alle', number | null>>;
export type Onderdeel = {
  id: string;
  naam: string;
  uitleg: string;
  icoon: string;
  prijs: Prijs;
  /** Alleen te kiezen samen met een servicebeurt (zoals op hun site bij polijsten). */
  alleenMetServicebeurt?: boolean;
  /** Wat houdt dit in: alleen wat op hun eigen site staat. */
  toelichting: string;
};

// Servicebeurt: bij Rolex kiest de bezoeker het type model (prijzen van hun site).
export const rolexServicebeurt = [
  { id: 'tot30', naam: 'Model tot 30 jaar', prijs: 425 },
  { id: 'dames', naam: 'Damesmodel', prijs: 450 },
  { id: 'gmt', naam: 'Model met GMT-kaliber', prijs: 475 },
  { id: 'oud', naam: 'Model van 30 jaar en ouder', prijs: 525 },
  { id: 'gmtoud', naam: 'GMT-model van 30 jaar en ouder', prijs: 575 }, // 525 + 50 extra, zoals op hun site
];

export const onderdelen: Onderdeel[] = [
  { id: 'servicebeurt', naam: 'Complete servicebeurt', uitleg: 'Demonteren, reinigen, smeren, afstellen', icoon: 'tandwiel',
    toelichting: 'Inspectie, schoonmaken, smeren en afstellen, en waar nodig onderdelen vervangen. Bij Rolex inclusief opwindveer, achterdekseldichting, kroon- en tubedichting en ultrasoon reinigen van kast en band.',
    prijs: { omega: null, longines: null, rado: null, swatch: null, overig: null } }, // [[AANLEVEREN: servicebeurtprijzen per merk]]
  { toelichting: 'Nieuw glas met glasdichting. Origineel of generiek: u kiest vooraf.', id: 'glas', naam: 'Glas vervangen', uitleg: 'Inclusief glasdichting', icoon: 'glans', prijs: { alle: null } }, // [[AANLEVEREN]]
  { toelichting: 'Vervanging van de wijzerplaat met een origineel onderdeel van het merk.', id: 'wijzerplaat', naam: 'Wijzerplaat vervangen', uitleg: 'Origineel onderdeel', icoon: 'klok', prijs: { alle: null } }, // [[AANLEVEREN]]
  { toelichting: 'Vervanging van een of meer wijzers.', id: 'wijzers', naam: 'Wijzers vervangen', uitleg: 'Uur-, minuut- of secondewijzer', icoon: 'klok', prijs: { alle: null } }, // [[AANLEVEREN]]
  { toelichting: 'Nieuwe opwindkroon en tube. Origineel of generiek: u kiest vooraf.', id: 'kroon', naam: 'Kroon en tube vervangen', uitleg: 'Opwindkroon en tube', icoon: 'pincet', prijs: { alle: null } }, // [[AANLEVEREN]]
  { toelichting: 'Controle en herstel van de waterdichtheid, essentieel voor sportieve en duikmodellen.', id: 'waterdicht', naam: 'Waterdichtheid testen en herstellen', uitleg: 'Nieuwe dichtingen en test', icoon: 'druppel', prijs: { alle: null } }, // [[AANLEVEREN]]
  { toelichting: 'Kast en band herstellen en polijsten, met behoud van de originele uitstraling. Alleen bij een servicebeurt en alleen als u dat wilt.', id: 'polijsten', naam: 'Kast en band polijsten', uitleg: 'Optioneel, alleen bij een servicebeurt', icoon: 'glans', prijs: { alle: 125 }, alleenMetServicebeurt: true },
  { toelichting: 'Nieuwe band van leer, rubber of staal. Ook originele Omega-horlogebanden.', id: 'band', naam: 'Band vervangen', uitleg: 'Leer, rubber of staal', icoon: 'horloge', prijs: { alle: null } }, // [[AANLEVEREN]]
];

/** Prijs voor een onderdeel en merk: eerst de echte prijs, anders (indien aan) de voorbeeldprijs, anders null. */
export function prijsVoor(o: Onderdeel, merk: string): { prijs: number | null; voorbeeld: boolean } {
  const echt = o.prijs[merk as Merk] ?? o.prijs.alle;
  if (typeof echt === 'number') return { prijs: echt, voorbeeld: false };
  const vb = voorbeeldprijzen[o.id]?.[merk] ?? voorbeeldprijzen[o.id]?.alle;
  return toonVoorbeeldprijzen && typeof vb === 'number' ? { prijs: vb, voorbeeld: true } : { prijs: null, voorbeeld: false };
}

/** Prijstabel per onderdeel en merk, voor gebruik in de browser. */
export function prijstabel(merkIds: string[]) {
  return Object.fromEntries(onderdelen.map((o) => [o.id, Object.fromEntries(merkIds.map((m) => [m, prijsVoor(o, m)]))]));
}
