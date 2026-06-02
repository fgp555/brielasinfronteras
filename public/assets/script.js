/* =============================================
   BRILLA SIN FRONTERAS — main.js
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- NAVBAR: scroll shadow + mobile toggle ---- */
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });

  toggle?.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // Close mobile menu on link click
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navbar.classList.remove("open"));
  });

  /* ---- TESTIMONIOS SLIDER ---- */
  const slides = document.querySelectorAll(".testimonio");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let current = 0;
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

  prevBtn?.addEventListener("click", () => {
    goTo(current - 1);
    startAuto();
  });
  nextBtn?.addEventListener("click", () => {
    goTo(current + 1);
    startAuto();
  });
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(parseInt(dot.dataset.index));
      startAuto();
    });
  });

  startAuto();

  /* ---- CÓMO AYUDAR: opcion selector ---- */
  const opciones = document.querySelectorAll(".opcion");
  opciones.forEach((op) => {
    op.addEventListener("click", () => {
      opciones.forEach((o) => o.classList.remove("active"));
      op.classList.add("active");
    });
  });

  /* ---- FORM SUBMIT ---- */
  const formBtn = document.getElementById("formSubmit");
  formBtn?.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".ayudar-form input");
    let valid = true;
    inputs.forEach((inp) => {
      if (!inp.value.trim()) {
        valid = false;
        inp.style.borderColor = "#E53935";
        setTimeout(() => (inp.style.borderColor = ""), 2000);
      }
    });
    if (valid) {
      showToast("¡Gracias! Nos pondremos en contacto contigo pronto 🌟");
      inputs.forEach((inp) => (inp.value = ""));
    } else {
      showToast("Por favor completa todos los campos", true);
    }
  });

  /* ---- SCROLL REVEAL ---- */
  const revealEls = document.querySelectorAll(".mvv-card, .area-card, .proyectos-inner, .stat-item, .footer-col");

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

  /* ---- SMOOTH SCROLL for nav links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ---- TOAST HELPER ---- */
  function showToast(message, isError = false) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = isError
      ? `<i class="fa-solid fa-triangle-exclamation"></i> ${message}`
      : `<i class="fa-solid fa-circle-check"></i> ${message}`;
    toast.style.background = isError ? "#E53935" : "var(--blue)";

    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
  }
});
