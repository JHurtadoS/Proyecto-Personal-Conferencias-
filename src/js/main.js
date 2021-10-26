import '../scss/app.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands';

import Glide from '@glidejs/glide'




document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    //carrusel();
    TocarTarjeta();
    acordion();
    formulario();
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

function initFormulario() {
    let pasosFormulario = document.querySelector('.form-registro');
    let clases = [];
    pasosFormulario.childNodes.forEach((element, index, array) => {
        //console.log(element);

        if (element.localName == 'fieldset') {
            clases.push(element);
        }

    });
    clases.forEach((e, index) => {
        e.classList.add('desactivado');
    });
    clases[0].classList.remove('desactivado')
    clases[0].classList.add('seleccionado');
    //console.log(clases[0]);
    return clases;
}

function next(array) {
    let index;
    array.forEach((e, i) => {
        if (i != 3) {
            if (e.classList.contains('seleccionado')) {
                e.classList.add('desactivado');
                e.classList.remove('seleccionado');
                index = i;
            }
        }
    });

    if (index + 1 < array.length) {
        array[index + 1].classList.add('seleccionado');
        array[index + 1].classList.remove('desactivado');
    }
}

function back(array) {
    let index;
    array.forEach((e, i) => {
        if (i != 0) {
            if (e.classList.contains('seleccionado')) {
                e.classList.add('desactivado');
                e.classList.remove('seleccionado');
                index = i;
            }
        }
    });

    if (index - 1 > -1) {
        array[index - 1].classList.add('seleccionado');
        array[index - 1].classList.remove('desactivado');
    }
}

function formulario() {
    let array = initFormulario();
    let botonNext = document.querySelector('.next');
    let botonBack = document.querySelector('.back');
    botonNext.addEventListener('click', e => {
        next(array);
    });
    botonBack.addEventListener('click', e => {
        back(array);
    });
    //console.log(array)
    //next(array);
}