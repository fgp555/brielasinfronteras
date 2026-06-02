const submitBtn = document.getElementById("formSubmit");
const formMessage = document.getElementById("formMessage");

submitBtn?.addEventListener("click", async () => {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const selectedOption = document.querySelector(".opcion.active")?.dataset.opcion || "voluntario";

  if (!firstName || !lastName || !email || !phone) {
    formMessage.textContent = "Completa todos los campos.";
    formMessage.className = "form-message error";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  formMessage.textContent = "Enviando formulario...";
  formMessage.className = "form-message loading";

  try {
    const payload = {
      name: `${firstName} ${lastName}`,
      email,
      subject: `Formulario ONG - ${selectedOption}`,
      message: `
Nueva solicitud desde BRIELA SIN FRONTERAS

Tipo de ayuda: ${selectedOption}

Teléfono: ${phone}
      `.trim(),
      currentUrl: window.location.href,
      omitSend: false,
    };

    const response = await fetch("https://frankgp.com/api/mail/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Error al enviar");
    }

    formMessage.textContent = data.message || "¡Formulario enviado correctamente!";
    formMessage.className = "form-message success";

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  } catch (error) {
    console.error(error);

    formMessage.textContent = "No se pudo enviar el formulario. Inténtalo nuevamente.";
    formMessage.className = "form-message error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar";
  }
});
