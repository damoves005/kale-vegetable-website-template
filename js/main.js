// Navigation elements
const btn = document.querySelector(".toggle-nav");
const nav = document.querySelector("nav");

// Toggle navigation
btn.addEventListener("click", function () {
  nav.classList.toggle("show-nav");
  this.classList.toggle("active");
});

// Scroll to top functionality
const scrollTopBtn = document.querySelector(".scroll-top");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

// Smooth scroll to top when clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Close navigation when clicking links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show-nav");
    btn.classList.remove("active");
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
    btn.classList.remove("active");
  }
});

// FAQ Accordion functionality
document.querySelectorAll(".faq-section h3").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = question.classList.contains("active");

    // Close all other answers
    document.querySelectorAll(".faq-section h3").forEach((q) => {
      q.classList.remove("active");
      q.setAttribute("aria-expanded", "false");
      q.nextElementSibling.classList.remove("show");
    });

    // Toggle current answer
    if (!isOpen) {
      question.classList.add("active");
      question.setAttribute("aria-expanded", "true");
      answer.classList.add("show");
    }
  });
});
