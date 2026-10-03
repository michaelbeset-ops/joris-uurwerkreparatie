# Joris Uurwerkreparatie

Website van Joris Uurwerkreparatie, Herten. Astro + Tailwind, statisch, GitHub Pages.

- `npm run dev` lokaal, `npm run build && npm run preview` voor de productie-build op poort 4621.
- `node tools/fotos.mjs` bewerkt de foto's uit `bron/fotos` naar `src/assets`.
- `node tools/shot.mjs` maakt screenshots op 1440, 390 en 320 breed in `shots/`.
- `node tools/og.mjs` maakt `public/og.jpg`.
- Zolang er `[[AANLEVEREN]]` in `src/` staat: `preview: true` in `src/data/site.ts` (noindex) en alleen op github.io.

Zie `PLAN.md` voor de ontwerpkeuzes.
