/* =============================================
   MAIN — punto de entrada, inicializa todo
   ============================================= */
import { initNavbar } from "./components/navbar/navbar.js?v=2606-004";
import { initFooter } from "./components/footer/footer.js?v=2606-004";

document.addEventListener("DOMContentLoaded", () => {
  // Siempre presentes en todas las páginas
  initNavbar();
  initFooter();
});

console.info("?v=2606-004");
