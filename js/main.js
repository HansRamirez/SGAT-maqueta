function validarRutCompleto(rutInput) {
  let rut = rutInput.value.trim();
  if (!/^[0-9]{7,8}-[0-9kK]$/.test(rut)) {
    mostrarError(rutInput, "Formato inválido. Usa 12345678-9");
    return false;
  }

  const rutSinFormato = rut.replace(/^0+|[^0-9kK]/g, '').toUpperCase();
  const cuerpo = rutSinFormato.slice(0, -1);
  const dv = rutSinFormato.slice(-1);

  let suma = 0, multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i]) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  const digitoEsperado = 11 - (suma % 11);
  const dvEsperado = digitoEsperado === 11 ? '0' : digitoEsperado === 10 ? 'K' : digitoEsperado.toString();

  if (dv !== dvEsperado) {
    mostrarError(rutInput, "RUN incorrecto. Revisa el número ingresado");
    return false;
  }

  limpiarError(rutInput);
  return true;
}

function mostrarError(input, mensaje) {
  input.classList.add("input-error");
  const errorDiv = document.getElementById(`error-${input.id}`);
  if (errorDiv) {
    errorDiv.textContent = mensaje;
    errorDiv.style.color = "#e74c3c";
    errorDiv.style.fontSize = "0.85rem";
    errorDiv.style.marginTop = "4px";
  }
}

function limpiarError(input) {
  input.classList.remove("input-error");
  const errorDiv = document.getElementById(`error-${input.id}`);
  if (errorDiv) errorDiv.textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById('navbar');
  const footer = document.getElementById('footer');

  if (navbar) {
    fetch('../components/navbar.html')
      .then(res => res.text())
      .then(data => navbar.innerHTML = data);
  }

  if (footer) {
    fetch('../components/footer.html')
      .then(res => res.text())
      .then(data => footer.innerHTML = data);
  }

  const camposRut = document.querySelectorAll("input[id^='rut']");
  camposRut.forEach(input => {
    input.addEventListener("blur", () => validarRutCompleto(input));
  });

  const formularios = [
    { id: "vehiculoForm", msg: "✅ Trámite de vehículo registrado.", resultado: "resultado-vehiculo" },
    { id: "menorForm", msg: "📨 Autorización registrada correctamente.", resultado: "resultado-menor" },
    { id: "productosForm", msg: "📦 Declaración enviada correctamente.", resultado: "resultado-producto" }
  ];

  formularios.forEach(({ id, msg, resultado }) => {
    const form = document.getElementById(id);
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valido = true;

        form.querySelectorAll("input[id^='rut']").forEach(input => {
          if (!validarRutCompleto(input)) valido = false;
        });

        const archivo = form.querySelector("input[type='file']");
        if (!archivo || archivo.files.length === 0) {
          alert("📄 Adjunte un archivo PDF.");
          valido = false;
        }

        if (valido) {
          const divResultado = document.getElementById(resultado);
          if (divResultado) {
            divResultado.textContent = msg;
            divResultado.style.color = "#00b894";
            divResultado.style.fontWeight = "bold";
          }
        }
      });
    }
  });

  const consultaForm = document.getElementById('consultaForm');
  if (consultaForm) {
    consultaForm.addEventListener('submit', e => {
      e.preventDefault();
      const resultado = document.getElementById('resultadoConsulta');
      if (resultado) resultado.classList.remove('oculto');
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('✅ Usuario autenticado correctamente.');
    });
  }
});
