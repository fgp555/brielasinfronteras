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
    const fullName = `${firstName} ${lastName}`;

    const htmlMessage = `
      <h2>Nueva solicitud ONG</h2>
      <p><b>Nombre:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${phone}</p>
      <p><b>Tipo de ayuda:</b> ${selectedOption}</p>
    `;
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    const payload = {
      toUser: email,
      toAdmins: isLocalhost
        ? ["fgp555@gmail.com"]
        : ["fgp555@gmail.com", "brielasinfronteras@gmail.com", "luisfernando.peru@hotmail.com"],
      senderName: document.title || "Briela Sin Fronteras ONG",
      subject: `Formulario ONG - ${selectedOption}`,
      html: htmlMessage,
      originUrl: window.location.href,
      type: "contact",
      saveInDB: false,
    };

    const backendProd = "https://frankgp.com/api/mail/submit";
    const backendDev = "http://localhost:3000/api/mail/submit";

    const response = await fetch(isLocalhost ? backendDev : backendProd, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-mail-auth": "mail_headers_auth",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
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
