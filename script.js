
// Mobile Navigation Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("show");

  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Display the Current Year in the Footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact Form Interaction
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formStatus.textContent =
    "Thank you! Your form was submitted in this demo.";

  contactForm.reset();
});
