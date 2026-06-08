/* =============================================
   MAIN — punto de entrada, inicializa todo
   ============================================= */
import { initNavbar } from "./components/navbar/navbar.js?v=2606-005";
import { initFooter } from "./components/footer/footer.js?v=2606-005";

document.addEventListener("DOMContentLoaded", () => {
  // Siempre presentes en todas las páginas
  initNavbar();
  initFooter();
});

console.info("?v=2606-005");
