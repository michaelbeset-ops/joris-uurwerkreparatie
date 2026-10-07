// Prijzen voor de reparatiecalculator. ALLEEN echte prijzen invullen.
// Bekend (jorisuurwerkreparatie.nl, Rolex-pagina): Rolex-servicebeurten en polijsten vanaf € 125 (alleen bij een servicebeurt).
// Alle andere prijzen staan op null = [[AANLEVEREN: prijs van Hugo]]. De calculator toont dan "prijs na onderzoek".
// Prijs per merk: { omega: 395 } of één prijs voor alle merken: { alle: 85 }.

export type Merk = 'omega' | 'longines' | 'rado' | 'rolex' | 'swatch' | 'overig';

export const merken: { id: Merk; naam: string; uitleg: string }[] = [
  { id: 'omega', naam: 'Omega', uitleg: 'Officieel Service Center' },
  { id: 'longines', naam: 'Longines', uitleg: 'Erkend servicecenter' },
  { id: 'rado', naam: 'Rado', uitleg: 'Erkend servicecenter' },
  { id: 'rolex', naam: 'Rolex', uitleg: 'Vaste servicebeurtprijzen' },
  { id: 'swatch', naam: 'Hamilton, Tissot, Mido, Certina', uitleg: 'Swatch Group' },
  { id: 'overig', naam: 'Ebel, Nomos, Mühle', uitleg: 'Met originele onderdelen' },
];

type Prijs = Partial<Record<Merk | 'alle', number | null>>;
export type Onderdeel = {
  id: string;
  naam: string;
  uitleg: string;
  icoon: string;
  prijs: Prijs;
  /** Alleen te kiezen samen met een servicebeurt (zoals op hun site bij polijsten). */
  alleenMetServicebeurt?: boolean;
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
    prijs: { omega: null, longines: null, rado: null, swatch: null, overig: null } }, // [[AANLEVEREN: servicebeurtprijzen per merk]]
  { id: 'glas', naam: 'Glas vervangen', uitleg: 'Inclusief glasdichting', icoon: 'glans', prijs: { alle: null } }, // [[AANLEVEREN]]
  { id: 'wijzerplaat', naam: 'Wijzerplaat vervangen', uitleg: 'Origineel onderdeel', icoon: 'klok', prijs: { alle: null } }, // [[AANLEVEREN]]
  { id: 'wijzers', naam: 'Wijzers vervangen', uitleg: 'Uur-, minuut- of secondewijzer', icoon: 'klok', prijs: { alle: null } }, // [[AANLEVEREN]]
  { id: 'kroon', naam: 'Kroon en tube vervangen', uitleg: 'Opwindkroon en tube', icoon: 'pincet', prijs: { alle: null } }, // [[AANLEVEREN]]
  { id: 'waterdicht', naam: 'Waterdichtheid testen en herstellen', uitleg: 'Nieuwe dichtingen en test', icoon: 'druppel', prijs: { alle: null } }, // [[AANLEVEREN]]
  { id: 'polijsten', naam: 'Kast en band polijsten', uitleg: 'Alleen bij een servicebeurt', icoon: 'glans', prijs: { alle: 125 }, alleenMetServicebeurt: true },
  { id: 'band', naam: 'Band vervangen', uitleg: 'Leer, rubber of staal', icoon: 'horloge', prijs: { alle: null } }, // [[AANLEVEREN]]
];
