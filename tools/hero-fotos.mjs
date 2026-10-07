// Beeld voor de vier hero-varianten. Alles uit bron/fotos, nergens groter dan de bron.
import sharp from 'sharp';
const zw = (i) => i.grayscale().linear(1.15, -18).jpeg({ quality: 86, mozjpeg: true });
// A: groen uurwerk (1600 breed) in zwart-wit, donker, liggend 1600x1000.
await zw(sharp('bron/fotos/uurwerk-groen.jpg').extract({ left: 0, top: 430, width: 1600, height: 1000 }).modulate({ brightness: 0.8 })).toFile('src/assets/hero/a-groen-zw.jpg');
// D: drie staande zwart-wit panelen van 720x900.
await zw(sharp('bron/fotos/kaliber-321.jpg')).toFile('src/assets/hero/d-321.jpg');
await zw(sharp('bron/fotos/seamaster.jpg').extract({ left: 260, top: 120, width: 1040, height: 1300 > 1600 ? 1300 : 1300 }).resize(720, 900)).toFile('src/assets/hero/d-seamaster.jpg');
await zw(sharp('bron/fotos/uurwerk-groen.jpg').extract({ left: 220, top: 560, width: 1000, height: 1000 * 1.25 > 1040 ? 1040 : 1250 }).resize(720, 900, { fit: 'cover' })).toFile('src/assets/hero/d-groen.jpg');
for (const n of ['a-groen-zw', 'd-321', 'd-seamaster', 'd-groen']) { const m = await sharp(`src/assets/hero/${n}.jpg`).metadata(); console.log(n, m.width, m.height); }
const s = await sharp('src/assets/omega-houder.jpg').extract({ left: 10, top: 600, width: 60, height: 60 }).stats();
console.log('grijs houderfoto', s.channels.map((c) => Math.round(c.mean)));
