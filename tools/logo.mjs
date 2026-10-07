// Maakt de witte achtergrond van het aangeleverde logo transparant. Vult vanaf de randen (flood fill), zodat
// lichte delen binnen het logo (wijzerplaat, tandwielen) blijven staan. Zachte rand tegen kartelranden.
import sharp from 'sharp';
const { data, info } = await sharp('bron/logo/logo-origineel.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const bg = [255, 255, 255];
const afstand = (i) => Math.hypot(data[i] - bg[0], data[i + 1] - bg[1], data[i + 2] - bg[2]);
const gezien = new Uint8Array(w * h);
const stapel = [];
for (let x = 0; x < w; x++) stapel.push([x, 0], [x, h - 1]);
for (let y = 0; y < h; y++) stapel.push([0, y], [w - 1, y]);
while (stapel.length) {
  const [x, y] = stapel.pop();
  if (x < 0 || y < 0 || x >= w || y >= h) continue;
  const p = y * w + x;
  if (gezien[p]) continue;
  const d = afstand(p * 4);
  if (d > 38) continue;
  gezien[p] = 1;
  // Zachte overgang: hoe dichter bij de achtergrondkleur, hoe transparanter.
  data[p * 4 + 3] = d < 14 ? 0 : Math.round(((d - 14) / 24) * 255);
  stapel.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}
await sharp(data, { raw: { width: w, height: h, channels: 4 } }).trim({ threshold: 1 }).png({ compressionLevel: 9 }).toFile('src/assets/logo.png');
const m = await sharp('src/assets/logo.png').metadata();
console.log('logo.png', m.width, m.height);
