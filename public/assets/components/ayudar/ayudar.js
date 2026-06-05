/* =============================================
   AYUDAR — selector de opción + formulario
   ============================================= */
export function initAyudar() {
  // Salir si la sección no existe en esta página
  if (!document.querySelector(".ayudar")) return;

  /* ---- Opciones selector ---- */
  const opciones = document.querySelectorAll(".opcion");
  opciones.forEach((op) => {
    op.addEventListener("click", () => {
      opciones.forEach((o) => o.classList.remove("active"));
      op.classList.add("active");
    });
  });

  /* ---- Form submit ---- */
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
}

/* ---- Toast helper (compartido) ---- */
export function showToast(message, isError = false) {
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