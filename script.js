function cambiarFondo() {
  document.body.style.backgroundImage = "url('nuevo-fondo.jpg')";
}

// Función para cambiar automáticamente la imagen de fondo cada 5 segundos
function cambiarFondoAutomatico() {
  var imagenesDeFondo = ["Fondo.jpeg", "Fondo2.jpeg", "Fondo3.jpeg"];
  var indiceActual = 0;

  setInterval(function () {
    document.body.style.backgroundImage =
      "url('" + imagenesDeFondo[indiceActual] + "')";
    indiceActual = (indiceActual + 1) % imagenesDeFondo.length;
  }, 5000); // Cambia la imagen cada 5 segundos
}

var indiceActual = 0;

function cambiarImagenDerechaManual() {
  var container = document.getElementById("slideshow-container");
  var imagenes = container.getElementsByTagName("img");

  // Oculta todas las imágenes al inicio
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
  }

  // Muestra la nueva imagen
  imagenes[indiceActual].style.display = "block";

  // Incrementa el índice
  indiceActual = (indiceActual + 1) % imagenes.length;
}

window.onload = function () {
  cambiarFondoAutomatico();

  // Oculta todas las imágenes al cargar la página
  cambiarImagenDerechaManual();
};
