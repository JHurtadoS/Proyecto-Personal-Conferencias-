"use strict";

require("../scss/app.scss");

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  TocarTarjeta();
});

function TocarTarjeta() {
  var tarjetas = document.querySelectorAll('.tarjeta-precio');
  tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener('click', function (e) {
      eliminarSelectarjeta(tarjeta);
      tarjeta.classList.toggle('seleccionado');
    });
  });
}

function eliminarSelectarjeta(seleccionado) {
  console.log(seleccionado);
  var tarjetas = document.querySelectorAll('.tarjeta-precio');
  tarjetas.forEach(function (tarjeta) {
    if (tarjeta.classList.contains('seleccionado') && seleccionado != tarjeta) {
      console.log('entro');
      tarjeta.classList.remove('seleccionado');
    }
  });
}