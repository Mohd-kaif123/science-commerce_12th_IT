/* ==============================================================
   BRIGHT EDUCATION — ADMISSION POPUP
   ==============================================================
   Shows a promotional admission modal a few seconds after the
   homepage loads. Uses sessionStorage so it only appears once
   per browser session (not on every page navigation).

   TO EDIT THE POPUP MESSAGE: change the HTML inside the
   #admissionPopup element in index.html — this file only
   controls WHEN it shows/hides.

   TO CHANGE THE DELAY: edit POPUP_DELAY_MS below.
   TO DISABLE THE POPUP ENTIRELY: comment out the last line
   of this file (the DOMContentLoaded block).
   ============================================================== */

const POPUP_DELAY_MS = 2500;

function initAdmissionPopup() {
  const popup = document.getElementById("admissionPopup");
  if (!popup) return;

  const alreadyShown = sessionStorage.getItem("bePopupShown");
  if (alreadyShown) return;

  const closeEls = popup.querySelectorAll("[data-popup-close]");
  const show = () => {
    popup.classList.add("open");
    document.body.style.overflow = "hidden";
    sessionStorage.setItem("bePopupShown", "1");
  };
  const hide = () => {
    popup.classList.remove("open");
    document.body.style.overflow = "";
  };

  closeEls.forEach(el => el.addEventListener("click", hide));
  popup.addEventListener("click", (e) => {
    if (e.target === popup) hide();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  });

  setTimeout(show, POPUP_DELAY_MS);
}

document.addEventListener("DOMContentLoaded", initAdmissionPopup);
