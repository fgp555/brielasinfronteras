import { initTestimonios } from "./components/testimonios/testimonios.js?v=2606-004";
import { initAyudar } from "./components/ayudar/ayudar.js?v=2606-004";

document.addEventListener("DOMContentLoaded", () => {
  // Solo corren si su sección existe en el HTML
  initTestimonios();
  initAyudar();
  initScrollReveal();
});

/* ---- Scroll Reveal ---- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".mvv-card, .area-card, .proyectos-inner, .stat-item, .footer-col");
  if (!revealEls.length) return;

  revealEls.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealEls.forEach((el) => observer.observe(el));
}
