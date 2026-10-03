// Full-page screenshots van de productie-build op 1440, 390 en 320 breed.
// De full-page opname wordt twee keer gemaakt: de eerste zet lazy afbeeldingen in beeld, de tweede legt ze vast.
import { chromium } from 'playwright';
const [url = 'http://localhost:4621/joris-uurwerkreparatie/', naam = 'home', ...breedtes] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const w of (breedtes.length ? breedtes : ['1440', '390', '320']).map(Number)) {
  const p = await b.newPage({ viewport: { width: w, height: w > 1000 ? 900 : 844 } });
  await p.goto(url, { waitUntil: 'load', timeout: 30000 });
  await p.waitForTimeout(500);
  await p.screenshot({ path: `shots/${naam}-${w}-fold.png` });
  // Lazy afbeeldingen laden pas na scrollen: eerst naar beneden, dan terug, dan pas de full-page opname.
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)); } window.scrollTo(0, 0); });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `shots/${naam}-${w}.png`, fullPage: true });
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  console.log(`${w}: scrollWidth ${sw}`);
  await p.close();
}
await b.close();
