// Vierkante uitsnede van het gouden uurwerk voor hero E: het uurwerk precies in het midden,
// zodat het in een rond "kijkglas" past. Bron 720x900, uitsnede 680x680, dus nergens vergroot.
import sharp from 'sharp';
await sharp('bron/fotos/kaliber-321.jpg').extract({ left: 25, top: 176, width: 680, height: 680 })
  .modulate({ saturation: 1.05 }).sharpen({ sigma: 0.6 })
  .jpeg({ quality: 88, mozjpeg: true }).toFile('src/assets/hero/kaliber-rond.jpg');
console.log('klaar');
