import '../scss/app.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands';

import Glide from '@glidejs/glide'




document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    carrusel();
    TocarTarjeta();
    acordion();
});


function TocarTarjeta() {
    let tarjetas = document.querySelectorAll('.tarjeta-precio');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', e => {

            eliminarSelectarjeta(tarjeta);
            tarjeta.classList.toggle('seleccionado');

        });
    })
}

function acordion() {
    let first = document.querySelector('.twists');
    let second = document.querySelector('.more-about-us');
    first.addEventListener('click', () => {
        first.classList.toggle('activo');
        if (second.classList.contains('activo')) {
            first.classList.toggle('activo-2');
        }
    });
    second.addEventListener('click', () => {
        second.classList.toggle('activo');
        if (second.classList.contains('activo')) {
            first.classList.toggle('activo-2');
        }
    });
}

function eliminarSelectarjeta(seleccionado) {
    console.log(seleccionado)
    let tarjetas = document.querySelectorAll('.tarjeta-precio');
    tarjetas.forEach(tarjeta => {
        if (tarjeta.classList.contains('seleccionado') && seleccionado != tarjeta) {
            console.log('entro');
            tarjeta.classList.remove('seleccionado');
        }
    });
}


function carrusel() {
    var glide = new Glide('.glide', {
        type: 'carousel',

        autoplay: 2000
    }).mount();
}