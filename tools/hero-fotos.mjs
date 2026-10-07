// Hero-foto: de Omega Seamaster uit hun Google-profiel (1600x1600), zwart-wit en iets donkerder, zodat hij in het
// zwarte vlak van de hero opgaat. Geen verlenging: de overgang naar zwart doet een CSS-masker.
import sharp from 'sharp';
await sharp('bron/fotos/seamaster.jpg').grayscale().linear(1.12, -14).modulate({ brightness: 0.62 })
  .jpeg({ quality: 86, mozjpeg: true }).toFile('src/assets/hero/hero-seamaster.jpg');
console.log('hero-seamaster.jpg klaar');
