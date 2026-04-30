/* =========================
   MOBILE NAV TOGGLE
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar-container");
  const menu = document.querySelector(".menu");

  // Crear botón hamburguesa
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("menu-toggle");
  toggleBtn.innerHTML = "☰"; // puedes cambiar por icono FA si quieres

  // Insertar botón en navbar
  navbar.insertBefore(toggleBtn, menu);

  // Estado
  let isOpen = false;

  toggleBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    menu.classList.toggle("active", isOpen);
    toggleBtn.classList.toggle("open", isOpen);
  });

  // Cerrar al hacer click en link (UX móvil)
  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove("active");
        toggleBtn.classList.remove("open");
        isOpen = false;
      }
    });
  });
});