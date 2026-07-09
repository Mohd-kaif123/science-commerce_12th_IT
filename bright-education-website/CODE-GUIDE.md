# CODE GUIDE — Bright Education Website
### Read this file before touching any code. It explains what every file does and exactly where to click/edit for common changes.

---

## 1. Quick Answers to Common Tasks

| I want to... | Go to file | What to do |
|---|---|---|
| Change a student's photo | `images/students/` | Replace the file, **keep the same filename** |
| Add a new student | `data/toppers-data.js` | Add one new `{ ... }` line (see §4) |
| Remove a student | `data/toppers-data.js` | Delete their `{ ... }` line |
| Change phone number everywhere | All 4 `.html` files | Find & Replace `7021804267` / `9209973707` (see §7) |
| Change address | All 4 `.html` files + `contact.html` map | Find & Replace the address text (see §7) |
| Change colors | `styles.css` (top of file) | Edit the `:root { }` variables (see §5) |
| Change any text/headline | The relevant `.html` file | Edit directly, it's plain English (see §6) |
| Change popup message | `index.html` | Edit inside `<div id="admissionPopup">` (see §8) |
| Change popup delay | `js/popup.js` | Edit `POPUP_DELAY_MS` (see §8) |
| Fix/move the map | `contact.html` | Edit the `iframe src="...maps?q=..."` URL (see §9) |
| Change what happens on form submit | `script.js` | Edit the `admissionForm` section (see §10) |

---

## 2. File Map (what each file is for)

```
index.html          Home page — hero, about, courses, toppers carousel, popup
toppers.html         Toppers page — auto-generated grid + certificate photo gallery
admission.html        Admission enquiry form page
contact.html           Address, map, phone, quick enquiry form

styles.css              ALL visual styling for ALL pages (colors, fonts, spacing, layout)
script.js                Shared behaviour: mobile menu, number counters, scroll-in
                          animations, form → WhatsApp submission, topper filter pills

data/toppers-data.js    ⭐ The list of every student. Edit this to add/change/remove
                          a student. Nothing else needs to change.
js/render.js              Reads data/toppers-data.js and builds the HTML cards for
                          the Toppers grid and the Home carousel. You rarely touch this.
js/popup.js                Controls when/how the admission popup shows. You rarely
                          touch this except to change the delay.

images/students/*.jpeg   One photo per student (filename = student's id)
images/board-*.jpeg      Original topper board posters (shown in Certificate Gallery)
images/cert-*.jpeg        Original individual achievement certificates
```

**Load order matters.** In `index.html` and `toppers.html`, scripts are loaded in this order:
```html
<script src="data/toppers-data.js"></script>  <!-- 1. the data -->
<script src="js/render.js"></script>            <!-- 2. builds cards from the data -->
<script src="js/popup.js"></script>              <!-- 3. (index.html only) -->
<script src="script.js"></script>                 <!-- 4. everything else -->
```
If you ever copy these `<script>` tags elsewhere, keep this order — `render.js` needs
`toppers-data.js` to already exist, and `script.js`'s filter buttons need `render.js`
to have already built the cards.

---

## 3. How a Student Card Actually Gets on the Page

You never write HTML for a student card by hand. Here's the chain:

1. You add/edit an object in the `TOPPERS` array inside `data/toppers-data.js`.
2. On page load, `js/render.js` runs `renderTopperGrid()` (on toppers.html) and/or
   `renderCarousel()` (on index.html — only for entries with `featured: true`).
3. Those functions loop over `TOPPERS` and turn each object into an HTML card using
   the templates `topperCardHTML()` / `carouselSlideHTML()` inside `render.js`.
4. The generated HTML is inserted into:
   - `<div class="grid-toppers" data-topper-grid></div>` on toppers.html
   - `<div class="carousel-track" data-carousel-track></div>` on index.html

So: **data.js = content, render.js = template/logic, styles.css = appearance.**

---

## 4. Adding / Editing a Student (data/toppers-data.js)

Every student is one object that looks like this:

```js
{ id:"khushi", name:"Khushi", photo:"images/students/khushi.jpeg",
  category:"school", percent:83, marksLabel:null, rank:"1st",
  scope:"in J.J.G.H. School", detail:"Std X · SSC", featured:true },
```

Field-by-field:
- **id** — unique lowercase key, no spaces. Also expected to match the photo filename.
- **name** — full display name shown on the card.
- **photo** — path to the photo file, or `null` to show initials instead (used for
  Tahreen, whose original certificate has no photo).
- **category** — controls which filter pill on toppers.html the card shows under:
  - `"school"` → Bright Education, Std VII–X
  - `"jrcollege"` → Bright Jr. College, Std XI–XII
  - `"hsc"` → Featured HSC board result achievers
  - `"success"` → Success stories (direct-entry passes)
- **percent** — a plain number (e.g. `83`) if a percentage exists, otherwise `null`.
- **marksLabel** — free text used INSTEAD of percent when there isn't a clean
  percentage (e.g. `"75 Marks in Maths"`, `"98 in Maths & IT"`). Leave `null` if
  `percent` is set.
- **rank** — short badge text, e.g. `"1st"`, `"12th"`, `"PASSED"`, `"Topper 2026"`.
- **scope** — where that rank applies, shown under the name, e.g.
  `"in Bright Jr. College"`, `"in S.V.E. School"`.
- **detail** — one short optional line, e.g. `"Std X · SSC"`, `"XII Science · 533/600"`.
- **featured** — `true`/`false`. Only `true` entries appear in the homepage carousel.
  Keep this list to roughly 6–10 students total so the carousel isn't too long.

**To add a student:** copy an existing object, paste it as a new line inside the
`TOPPERS = [ ... ]` array, change the values, save. Don't forget the comma at the
end of the line.

---

## 5. Changing Colors / Fonts (styles.css)

Right at the top of `styles.css` is the `:root { }` block — every color used
anywhere on the site is defined once here:

```css
:root{
  --navy-900:#0A1B42;   /* main dark background / header color */
  --navy-800:#122752;
  --navy-700:#1C3868;
  --gold:#E7B84B;         /* accent color (buttons, highlights) */
  --gold-light:#F6DD9C;
  --crimson:#C21F3A;     /* call-to-action / urgent color */
  --green:#1D8A54;        /* used for percentage numbers */
  --cream:#FAF6EC;        /* light section background */
  --display:'Fraunces', Georgia, serif;   /* headline font */
  --body:'Inter', sans-serif;              /* body text font */
  --mono:'Space Mono', monospace;          /* used for marks/numbers */
}
```
Change any hex value here and it updates everywhere on the site automatically —
you don't need to hunt through the rest of the CSS file.

---

## 6. Changing Text / Copy

All visible text lives directly inside the `.html` files as normal readable
English — there is no separate content file for page copy (only the student
data is separated out, see §4). Open the page in any text editor, find the
sentence you want to change, and edit it directly between the HTML tags.

**Important:** the header (logo/menu), the WhatsApp float button, and the
footer are repeated in all 4 HTML files. If you change something in one of
those three areas, repeat the same change in the other 3 files, or the site
will look inconsistent between pages.

---

## 7. Changing Phone Number / Address Everywhere

The phone numbers (`7021804267`, `9209973707`) and the address appear in
several places per page: the top bar, the footer, WhatsApp links
(`https://wa.me/917021804267`), and `tel:` links. Use your editor's
**Find & Replace across files** (in VS Code: `Ctrl+Shift+H` / `Cmd+Shift+H`)
and search the whole project folder for the old number/address, replacing
every occurrence in one go — much safer than editing each page manually.

---

## 8. The Admission Popup

Location: HTML markup is inside `index.html` near the bottom, in
`<div class="popup-overlay" id="admissionPopup">`. Behaviour/timing is
controlled separately in `js/popup.js`.

- To change the popup's headline/message/buttons → edit the HTML directly
  inside that `<div>` in `index.html`.
- To change how long it waits before showing → edit `POPUP_DELAY_MS` at the
  top of `js/popup.js` (value is in milliseconds; `2500` = 2.5 seconds).
- It only shows once per browser session (`sessionStorage`) so repeat
  visitors aren't annoyed on every page. To make it show on every visit
  instead, remove the `sessionStorage` check inside `initAdmissionPopup()`.

---

## 9. The Location Map (contact.html)

The map is a Google Maps **search embed** — no API key required. It's built
from a plain text address inside the iframe's `src`:

```html
<iframe src="https://www.google.com/maps?q=YOUR+ADDRESS+HERE&output=embed">
```

To fix or improve the pin: replace the text after `q=` with a more precise
address (spaces become `+`), or with exact GPS coordinates
(`q=19.xxxxx,73.xxxxx`) if you know them — coordinates are always the most
accurate option.

---

## 10. How the Admission Form Works (no backend/server)

This site has no database or server, so `script.js` makes the enquiry forms
(on Admission and Contact pages) work by building a WhatsApp link with the
form data pre-filled as a message, then opening it:

```js
const waNumber = '917021804267';
const waUrl = `https://wa.me/${waNumber}?text=${text}`;
window.open(waUrl, '_blank');
```

If you later want form submissions to go to email or a spreadsheet instead
(e.g. using Formspree, Google Forms, or a real backend), this is the one
function to replace — everything else on the page can stay the same.

---

## 11. Deploying / Hosting Checklist

This is a static site — every file is already "production ready", no build
step needed. For it to work correctly when hosted (GitHub Pages, Netlify,
etc.), the **folder structure must stay exactly as-is**, with `index.html`
and `styles.css` etc. sitting directly next to each other (not nested one
level deeper inside another folder) — otherwise the relative links like
`href="styles.css"` or `src="images/students/khushi.jpeg"` will break and
the page will load with no styling and no photos.
