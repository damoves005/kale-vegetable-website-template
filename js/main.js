// Navigation elements
const btn = document.querySelector(".toggle-nav");
const nav = document.querySelector("nav");

// Toggle navigation
btn.addEventListener("click", function () {
  nav.classList.toggle("show-nav");
});

// Close navigation when clicking links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show-nav");
  });
});

// Close navigation when clicking outside
document.addEventListener("click", (e) => {
  if (
    !nav.contains(e.target) &&
    !btn.contains(e.target) &&
    nav.classList.contains("show-nav")
  ) {
    nav.classList.remove("show-nav");
  }
});
