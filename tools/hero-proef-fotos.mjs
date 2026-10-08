// Uitsneden voor hero-proeven F t/m I. Alles uit bron/fotos (eigen foto's van Hugo), nergens vergroot.
import sharp from 'sharp';
const uit = 'src/assets/hero/';
// F: het uurwerk in de rode Omega-houder, scherp voor de "loep", en dezelfde foto vaag als achtergrond.
await sharp('bron/fotos/omega-houder.jpg').extract({ left: 450, top: 0, width: 600, height: 600 }).sharpen({ sigma: 0.6 }).jpeg({ quality: 88, mozjpeg: true }).toFile(uit + 'houder-rond.jpg');
await sharp('bron/fotos/omega-houder.jpg').resize(800).blur(14).modulate({ brightness: 0.55 }).jpeg({ quality: 70 }).toFile(uit + 'houder-vaag.jpg');
// G: de wijzerplaat van de Seamaster, rond uitgesneden.
await sharp('bron/fotos/seamaster.jpg').extract({ left: 334, top: 142, width: 820, height: 820 }).jpeg({ quality: 86, mozjpeg: true }).toFile(uit + 'seamaster-rond.jpg');
console.log('klaar');
// K: de Seamaster met opgerekte niveaus, zodat de lichte doos wit wordt en het horloge op wit lijkt te zweven.
await sharp('bron/fotos/seamaster.jpg').extract({ left: 256, top: 0, width: 1088, height: 1344 }).grayscale().linear(1.35, -60).jpeg({ quality: 88, mozjpeg: true }).toFile(uit + 'seamaster-wit.jpg');
