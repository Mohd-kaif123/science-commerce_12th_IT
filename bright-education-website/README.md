# Bright Education / Bright Jr. College — Website

This is a static, multi-page website. No build tools, no server required —
just open `index.html` in a browser, or upload the whole folder to any
web host (Netlify, GitHub Pages, Hostinger, etc.).

## File Structure

```
bright-classes-website/
├── index.html              Home page (hero, about, courses, toppers carousel, popup)
├── toppers.html             Full toppers list (auto-generated grid) + certificate gallery
├── admission.html           Admission enquiry form
├── contact.html             Address, map, phone, quick enquiry form
├── styles.css                All design/CSS for every page (colors, fonts, layout)
├── script.js                 Nav menu, counters, scroll animation, form → WhatsApp logic
├── data/
│   └── toppers-data.js      ⭐ THE FILE YOU EDIT MOST OFTEN — every student's info
├── js/
│   ├── render.js             Turns toppers-data.js into HTML cards/carousel (rarely edited)
│   └── popup.js               Controls the admission popup timing (rarely edited)
└── images/
    ├── students/              Individual student photos (one .jpeg per student)
    ├── board-*.jpeg            Original topper board posters (certificate gallery)
    └── cert-*.jpeg             Original individual achievement certificates
```

## The #1 rule: to add/edit/remove a student, only touch `data/toppers-data.js`

Every student card — on the Home page carousel AND the Toppers page grid — is
generated automatically from the single array in `data/toppers-data.js`.
You never need to touch any HTML to change the toppers list.

### To add a new student:
1. Save their photo as `images/students/their-id.jpeg` (square photo works best).
2. Open `data/toppers-data.js`.
3. Copy any existing line (a `{ ... }` object) and paste it as a new line.
4. Update the fields — the file has a full field guide in its top comment.
5. Save. Refresh the browser. Done — no other file needs to change.

### To remove a student:
Delete their `{ ... }` line from the `TOPPERS` array in `data/toppers-data.js`.

### To feature a student in the homepage carousel:
Set `featured: true` on their entry. Keep the featured list to about 6-10
students so the carousel doesn't feel too long.

### Categories used for filtering (on the Toppers page):
| Category value | Meaning |
|---|---|
| `school` | Bright Education toppers, Std VII–X |
| `jrcollege` | Bright Jr. College toppers, Std XI–XII |
| `hsc` | Featured HSC board result achievers |
| `success` | Success stories (direct-entry passes) |

## Editing text/copy (headlines, descriptions, etc.)

All page text lives directly in the `.html` files as plain readable English.
Open the relevant page in any text editor and edit the text between tags.
The 4 pages repeat the same header/nav/footer — if you change contact info,
address, or social links, update it in all 4 files (search for the text
you want to change, e.g. "7021804267", to find every occurrence).

## Editing colors/fonts (design)

Everything is controlled from the top of `styles.css` under `:root { ... }`.
Change a value there and it updates across the entire site. For example:
```css
--navy-900:#0A1B42;   /* primary dark color */
--gold:#E7B84B;       /* accent color */
--crimson:#C21F3A;    /* call-to-action color */
```

## The admission popup

Controlled by `js/popup.js`. It shows once per browser session, 2.5 seconds
after the homepage loads. To change the delay, edit `POPUP_DELAY_MS` at the
top of that file. To change the popup's message/buttons, edit the
`#admissionPopup` block directly inside `index.html`.

## The admission form (WhatsApp submission)

This site has no backend/server, so the enquiry forms (on the Admission page
and Contact page) work by opening WhatsApp with a pre-filled message to
**7021804267**. This is handled in `script.js` under the `admissionForm`
submit handler. If you later get a proper backend or a form service (like
Formspree or Google Forms), that submit handler is the only place to change.

## Location map

The map on `contact.html` uses a Google Maps search-embed (no API key
needed) built from the address text. If the pin ever looks wrong, replace
the address text inside the `src="https://www.google.com/maps?q=...` URL
with a more precise address or exact GPS coordinates.

## Deploying the site live

This folder can be deployed as-is to any static hosting service:
- **Netlify / Vercel**: drag-and-drop the whole folder in their dashboard.
- **GitHub Pages**: push the folder to a repo and enable Pages in settings.
- **Any shared hosting (Hostinger, GoDaddy, etc.)**: upload the folder via
  FTP/File Manager into the `public_html` directory.

No build step is required — every file is already production-ready.
