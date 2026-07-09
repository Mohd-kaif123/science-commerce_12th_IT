/* ==============================================================
   BRIGHT EDUCATION — RENDER ENGINE
   ==============================================================
   Turns the TOPPERS array (data/toppers-data.js) into HTML.
   You should not need to edit this file to add a student —
   edit data/toppers-data.js instead. Only edit this file if you
   want to change how a card LOOKS.
   ============================================================== */

function initialsOf(name) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

function photoBlock(student) {
  if (student.photo) {
    return `<img src="${student.photo}" alt="${student.name}" loading="lazy">`;
  }
  return `<div class="initials-avatar">${initialsOf(student.name)}</div>`;
}

function pctBlock(student) {
  if (student.percent !== null && student.percent !== undefined) {
    return `<div class="pct">${student.percent}<span class="pct-sign">%</span></div>`;
  }
  if (student.marksLabel) {
    return `<div class="pct pct-text">${student.marksLabel}</div>`;
  }
  return `<div class="pct pct-text">${student.rank}</div>`;
}

/* ---------- Grid card (used on toppers.html) ---------- */
function topperCardHTML(student) {
  return `
  <div class="topper-card" data-category="${student.category}">
    <div class="rank-badge">${student.rank}</div>
    <div class="photo">${photoBlock(student)}</div>
    <div class="info">
      <h4>${student.name}</h4>
      <div class="school">${student.scope}</div>
      ${pctBlock(student)}
      ${student.detail ? `<div class="detail-line">${student.detail}</div>` : ""}
    </div>
  </div>`;
}

/* ---------- Carousel slide (used on index.html) ---------- */
function carouselSlideHTML(student) {
  return `
  <div class="slide">
    <div class="slide-photo">${photoBlock(student)}</div>
    <div class="slide-info">
      <span class="slide-rank">${student.rank} ${student.scope}</span>
      <h3>${student.name}</h3>
      ${pctBlock(student)}
      ${student.detail ? `<p>${student.detail}</p>` : ""}
    </div>
  </div>`;
}

/* ---------- Mount grid on toppers.html ---------- */
function renderTopperGrid(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  target.innerHTML = TOPPERS.map(topperCardHTML).join("");
}

/* ---------- Mount carousel on index.html ---------- */
function renderCarousel(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  const featured = TOPPERS.filter(s => s.featured);
  target.innerHTML = featured.map(carouselSlideHTML).join("");
  startCarousel(target, featured.length);
}

function startCarousel(track, count) {
  let index = 0;
  const dotsWrap = document.querySelector("[data-carousel-dots]");
  if (dotsWrap) {
    dotsWrap.innerHTML = Array.from({ length: count }).map((_, i) =>
      `<button class="dot ${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join("");
  }

  function goTo(i) {
    index = (i + count) % count;
    track.style.transform = `translateX(-${index * 100}%)`;
    if (dotsWrap) {
      dotsWrap.querySelectorAll(".dot").forEach((d, di) => d.classList.toggle("active", di === index));
    }
  }

  let timer = setInterval(() => goTo(index + 1), 3800);

  const prevBtn = document.querySelector("[data-carousel-prev]");
  const nextBtn = document.querySelector("[data-carousel-next]");
  if (prevBtn) prevBtn.addEventListener("click", () => { goTo(index - 1); resetTimer(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { goTo(index + 1); resetTimer(); });
  if (dotsWrap) dotsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-dot]");
    if (!btn) return;
    goTo(parseInt(btn.getAttribute("data-dot")));
    resetTimer();
  });

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(index + 1), 3800);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderTopperGrid("[data-topper-grid]");
  renderCarousel("[data-carousel-track]");
});
