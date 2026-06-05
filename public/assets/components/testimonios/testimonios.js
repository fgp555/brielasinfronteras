/* =============================================
   TESTIMONIOS — slider con autoplay
   ============================================= */
export function initTestimonios() {
  // Salir si la sección no existe en esta página
  if (!document.querySelector(".testimonios")) return;

  const slides  = document.querySelectorAll(".testimonio");
  const dots    = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let current   = 0;
  let autoTimer = null;

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  prevBtn?.addEventListener("click", () => { goTo(current - 1); startAuto(); });
  nextBtn?.addEventListener("click", () => { goTo(current + 1); startAuto(); });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(parseInt(dot.dataset.index));
      startAuto();
    });
  });

  startAuto();
}