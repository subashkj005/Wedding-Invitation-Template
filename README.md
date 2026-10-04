# Subash ❤ Gayathri — Wedding Invitation

A single-page invitation. No build step — just static files.

## Folder
```
index.html        ← the whole invitation (markup + logic)
support.js        ← runtime (keep next to index.html)
assets/           ← images + music
```

## Add your photos (drop files into `assets/` with these exact names)
| File | Where it shows |
|---|---|
| `groom.jpg` | Groom page (portrait, ~3:4) |
| `bride.jpg` | Bride page (portrait, ~3:4) |
| `story-1.jpg` … `story-4.jpg` | "Our Story" polaroids (portrait, ~4:5) |

Tip: resize photos to ~1200px on the long edge and compress (e.g. squoosh.app) so the page loads fast on mobile.
Want `.png` or `.webp`? Search `index.html` for `assets/groom.jpg` etc. and change the extension.

## Add your music
Put your song at `assets/music.mp3`. It starts when guests tap **Open Invitation** and loops; the ♪ button toggles it.
If the file is missing, a soft generated drone plays instead. Keep it under ~5 MB.

## Edit text & details (search in `index.html`)
- **Names / parents / places** — search `Subash`, `Gayathri`, `S/o`, `D/o`.
- **Events** — near the bottom, `const EV=[ … ]`: title, date, time, venue, and `s`/`e` (start/end in UTC, format `YYYYMMDDTHHMMSSZ`; IST = UTC + 5:30).
- **Countdown target** — `const TARGET=Date.UTC(2027,0,30,2,0,0)` (month is 0-based; 02:00 UTC = 7:30 AM IST).
- **Venue map** — search `Sri+Kalyana+Mandapam` (map embed + "Open in Maps" link).
- **WhatsApp share text** — search `wa.me`.

## Test locally
Browsers block some features on `file://`. Run a tiny server in this folder:
```
npx serve .        # or:  python3 -m http.server 8000
```
Then open http://localhost:8000 (or :3000 for `serve`).

## Deploy (free, any one)
- **Netlify Drop** — go to app.netlify.com/drop and drag this whole folder in. Done.
- **Vercel** — `npx vercel` inside this folder.
- **GitHub Pages** — push the folder to a repo → Settings → Pages → deploy from branch.
- **Cloudflare Pages** — "Upload assets" and select the folder.

Share the resulting URL on WhatsApp — the "Copy invitation link" and "Share on WhatsApp" buttons use whatever URL the page is served from.
