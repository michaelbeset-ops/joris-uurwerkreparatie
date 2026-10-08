// Witte variant van het logo voor op donkere foto's: grijze en zwarte delen worden wit,
// de lichte wijzerplaat wordt marine zodat de wijzers (dan wit) zichtbaar blijven. Goud blijft goud.
import sharp from 'sharp';
const { data, info } = await sharp('src/assets/logo.png').raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  if (sat > 40) continue;
  const l = (r + g + b) / 3;
  if (l > 215) { data[i] = 10; data[i + 1] = 29; data[i + 2] = 53; } else { data[i] = data[i + 1] = data[i + 2] = 255; }
}
await sharp(data, { raw: info }).png().toFile('src/assets/logo-wit.png');
console.log('klaar');
