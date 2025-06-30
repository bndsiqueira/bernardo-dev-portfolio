document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  btn.addEventListener("click", function () {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });

  /* ---------- HERO: troca de palavras ---------- */
const words = ["Desenvolvimento Web", "Automação", "Mentoria", "IA para Inovação"];
let idx = 0;

function rotateWord() {
  const el = document.getElementById("rotating-word");
  if (!el) return;
  el.textContent = words[idx];
  idx = (idx + 1) % words.length;
}
rotateWord();
setInterval(rotateWord, window.innerWidth < 768 ? 4000 : 2400);

/* ---------- Tilt no card (desktop) ---------- */
if (window.innerWidth >= 768 && typeof VanillaTilt !== "undefined") {
  VanillaTilt.init(document.querySelectorAll(".tilt"));
}

/* ---------- Back to top ---------- */
const btnTop = document.getElementById("back-to-top");
btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


});
