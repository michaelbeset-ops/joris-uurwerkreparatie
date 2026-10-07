// Hero-foto's. Bron: bron/fotos (eigen foto's van het Google-profiel), nergens groter getoond dan de bron.
import sharp from 'sharp';
// Groene werkmat met geopend chronograafuurwerk, in kleur, iets donkerder zodat witte tekst erop leesbaar blijft.
await sharp('bron/fotos/uurwerk-groen.jpg').modulate({ saturation: 0.9, brightness: 0.9 }).linear(1.05, -6)
  .jpeg({ quality: 86, mozjpeg: true }).toFile('src/assets/hero/hero-werkbank.jpg');
console.log('klaar');
