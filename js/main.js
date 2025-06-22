function validarRut(rut) {
  rut = rut.replace(/^0+|[^0-9kK]/g, '').toUpperCase();
  if (rut.length < 2) return false;

  const cuerpo = rut.slice(0, -1);
  const dv = rut.slice(-1);

  let suma = 0, multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i]) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }

  const digitoEsperado = 11 - (suma % 11);
  const dvEsperado = digitoEsperado === 11 ? '0' : digitoEsperado === 10 ? 'K' : digitoEsperado.toString();

  return dv === dvEsperado;
}

document.addEventListener('DOMContentLoaded', () => {
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

  // Login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('✅ Usuario autenticado correctamente.');
    });
  }

  // Trámite Vehículo
  const vehiculoForm = document.getElementById('vehiculoForm');
  if (vehiculoForm) {
    vehiculoForm.addEventListener('submit', e => {
      e.preventDefault();
      const rut = document.getElementById('rut').value;
      const archivo = document.getElementById('doc').files.length;
      if (!validarRut(rut)) return alert('❌ RUT inválido.');
      if (archivo === 0) return alert('📄 Adjunte un archivo PDF.');
      alert('✅ Trámite de vehículo registrado.');
    });
  }

  // Autorización Menor
  const menorForm = document.getElementById('menorForm');
  if (menorForm) {
    menorForm.addEventListener('submit', e => {
      e.preventDefault();
      const rutMenor = document.getElementById('rutMenor').value;
      const rutApoderado = document.getElementById('rutApoderado').value;
      const archivo = document.getElementById('docNotarial').files.length;
      if (!validarRut(rutMenor) || !validarRut(rutApoderado))
        return alert('❌ RUT del menor o apoderado inválido.');
      if (archivo === 0) return alert('📄 Adjunte el PDF de autorización.');
      alert('✅ Autorización registrada correctamente.');
    });
  }

  // Declaración Productos
  const productosForm = document.getElementById('productosForm');
  if (productosForm) {
    productosForm.addEventListener('submit', e => {
      e.preventDefault();
      const rut = document.getElementById('rutDeclarante').value;
      const archivo = document.getElementById('declaracionPDF').files.length;
      if (!validarRut(rut)) return alert('❌ RUT inválido.');
      if (archivo === 0) return alert('📄 Adjunte declaración firmada.');
      alert('✅ Declaración enviada correctamente.');
    });
  }
});

// Consulta de estado
const consultaForm = document.getElementById('consultaForm');
if (consultaForm) {
  consultaForm.addEventListener('submit', e => {
    e.preventDefault();
    const resultado = document.getElementById('resultadoConsulta');
    if (resultado) resultado.classList.remove('oculto');
  });
}
