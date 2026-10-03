// Eén kleurbehandeling voor alle foto's (lichte warmte, iets meer contrast, rust in de verzadiging),
// zodat beelden van drie bronnen (Google-profiel, oude site) als één serie ogen. Bron: bron/fotos, uitvoer: src/assets.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
mkdirSync('src/assets', { recursive: true });

const warm = (img) => img
  .modulate({ saturation: 0.88, brightness: 1.0 })
  .linear(1.08, -10)                       // iets meer contrast
  .recomb([[1.03, 0, 0], [0, 1.0, 0], [0, 0, 0.95]]) // warmer: iets meer rood, iets minder blauw
  .jpeg({ quality: 88, mozjpeg: true });

const fotos = {
  'kaliber-321.jpg': (i) => i,                                  // 720x900, hero
  'omega-houder.jpg': (i) => i.extract({ left: 230, top: 0, width: 1150, height: 720 }), // Omega-houder centraal, pincet rechts
  'uurwerk-groen.jpg': (i) => i,                                // 1600x1600
  'seamaster.jpg': (i) => i.extract({ left: 160, top: 60, width: 1280, height: 1280 }),
  'onderdelen.jpg': (i) => i.extract({ left: 400, top: 40, width: 960, height: 640 }),   // zacht beeld: alleen als kleine kaartfoto
  'pand.jpg': (i) => i.extract({ left: 0, top: 230, width: 505, height: 630 }),       // auto rechtsonder eruit
};
for (const [naam, snij] of Object.entries(fotos)) {
  const uit = `src/assets/${naam}`;
  await warm(snij(sharp(`bron/fotos/${naam}`))).toFile(uit);
  const m = await sharp(uit).metadata();
  console.log(naam, m.width, m.height);
}
