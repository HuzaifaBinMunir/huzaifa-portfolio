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
