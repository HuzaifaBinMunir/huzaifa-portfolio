// Mobile menu toggle
const menuBtn = document.querySelector("[data-menu-btn]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Highlight active nav link based on current file
const current = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav-link]").forEach((a) => {
  const href = a.getAttribute("href");
  if (href === current) a.classList.add("active");
});

document.querySelectorAll(".card.clickable").forEach(card => {
  card.addEventListener("click", (e) => {

    // Prevent clicking button from triggering full card
    if (e.target.tagName.toLowerCase() === "a") return;

    const url = card.dataset.url;
    if (url) {
      window.open(url, "_blank");
    }
  });
});
// Typewriter effect for hero headline // 
(function typewriterInit(){
  const els = document.querySelectorAll("[data-typewriter]");
  if (!els.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return; // keep normal text

  els.forEach((el) => {
    const fullText = (el.textContent || "").trim();
    if (!fullText) return;

    el.textContent = "";
    el.classList.add("typewriter");

    let i = 0;
    const speed = 22; // typing speed

    const tick = () => {
      el.textContent = fullText.slice(0, i);
      i++;
      if (i <= fullText.length) setTimeout(tick, speed);
      else el.classList.remove("typewriter"); // stop cursor blink if you want
    };

    setTimeout(tick, 250);
  });
})();