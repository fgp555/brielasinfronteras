/* =============================================
   FOOTER — componente inyectable
   ============================================= */

function getFooterHTML() {
  const year = new Date().getFullYear();

  return /* html */ `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-logo">
            <div class="logo-icon small">
              <img src="./imgs/logo.webp" alt="" />
            </div>
            <span>BRIELA SIN FRONTERAS</span>
          </div>
          <div class="footer-contact">
            <p><i class="fa-solid fa-phone"></i> Contacto general: +51 939 939 759</p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:brillasinfronteras@gmail.com">brillasinfronteras@gmail.com</a>
            </p>
            <p><i class="fa-brands fa-whatsapp"></i> WhatsApp: +51 939 939 759</p>
          </div>
        </div>

        <div class="footer-col">
          <h4>Descubre</h4>
          <ul>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Campañas</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Voluntariado</a></li>
            <li><a href="#">Donar</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>¿Qué hacemos?</h4>
          <ul class="what-list">
            <li>Educación: impulsamos aprendizaje que abre oportunidades</li>
            <li>Tecnología: conectamos innovación con impacto social</li>
            <li>Salud: promovemos bienestar donde más se necesita</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${year} Todos los derechos reservados · BRIELA SIN FRONTERAS</p>
      </div>
    </footer>
  `;
}

export function initFooter() {
  // Inyectar HTML al final del body
  document.body.insertAdjacentHTML("beforeend", getFooterHTML());
}
