// Gestión de navegación activa
// Selecciona todos los enlaces del menú de navegación
var enlacesMenu = document.querySelectorAll('.nav-link');

enlacesMenu.forEach(function (enlace) {
  if (enlace.href === window.location.href) {
    enlace.classList.add('active');
  } else {
    enlace.classList.remove('active');
  }
});

// Gestión de clicks en las tarjetas
// Selecciona todas las tarjetas de clima
var tarjetasClima = document.querySelectorAll('.weather-card');

tarjetasClima.forEach(function (tarjeta) {
  tarjeta.addEventListener('click', function () {
    // Redirige a la página de detalle
    window.location.href = './detalle.html';
  });
});