const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Gracias por contactarnos. Te responderemos pronto.");

  e.target.reset();
});
