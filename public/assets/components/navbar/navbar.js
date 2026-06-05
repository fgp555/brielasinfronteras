/* =============================================
   NAVBAR — componente inyectable
   ============================================= */

function getNavbarHTML() {
  return /* html */ `
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <div class="logo-icon">
            <img src="./imgs/logo.webp" alt="" />
          </div>
          <span class="logo-text">BRIELA SIN FRONTERAS <sup>ONG</sup></span>
        </div>
        <ul class="nav-links">
          <li><a href="/#conocenos">Conócenos</a></li>
          <li><a href="/#proyectos">Proyectos</a></li>
          <li><a href="/#donaciones">Donaciones</a></li>
        </ul>
        <div class="nav-social">
          <a href="https://instagram.com/brielasinfronteras" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://tiktok.com/@brielasinfronteras" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://youtube.com/@brielasinfronterasoficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
        <button class="nav-toggle" id="navToggle" aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  // Inyectar HTML al inicio del body
  document.body.insertAdjacentHTML("afterbegin", getNavbarHTML());

  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");

  // Marcar el link activo según la ruta actual
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Scroll shadow
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });

  // Mobile toggle
  toggle?.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // Cerrar menú móvil al hacer clic en un enlace
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navbar.classList.remove("open"));
  });

  // Smooth scroll solo para enlaces ancla de la misma página
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
