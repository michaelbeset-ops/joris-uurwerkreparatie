// Deelafbeelding (1200x630) in de huisstijl: woordmerk in de serif op warm papier, met de foto van het kaliber 321 rechts.
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f5f1ea"/>
  <text x="80" y="200" font-family="'Cormorant Light', Cormorant, Garamond, serif" font-size="96" font-weight="500" letter-spacing="26" fill="#14213b">JORIS</text>
  <text x="84" y="246" font-family="'Hanken Grotesk', 'Segoe UI', sans-serif" font-size="20" font-weight="500" letter-spacing="7" fill="#7d6233">UURWERKREPARATIE</text>
  <text x="80" y="380" font-family="'Cormorant Light', Cormorant, Garamond, serif" font-size="58" font-weight="500" fill="#14213b">Officieel Omega</text>
  <text x="80" y="440" font-family="'Cormorant Light', Cormorant, Garamond, serif" font-size="58" font-weight="500" fill="#14213b">Service Center in Herten.</text>
  <text x="80" y="540" font-family="'Hanken Grotesk', 'Segoe UI', sans-serif" font-size="22" fill="#3a4158">Onderhoud en reparatie met originele onderdelen.</text>
</svg>`;
const foto = await sharp('src/assets/kaliber-321.jpg').resize(504, 630, { fit: 'cover' }).toBuffer();
await sharp(Buffer.from(svg)).composite([{ input: foto, left: 696, top: 0 }]).jpeg({ quality: 85, mozjpeg: true }).toFile('public/og.jpg');
console.log('og.jpg klaar');
