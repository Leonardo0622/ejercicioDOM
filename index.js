const CambioDeColorBoton = document.getElementById('CambioDeColorBoton');
const Parrafo = document.getElementById('Parrafo');

CambioDeColorBoton.addEventListener('click', () => {
Parrafo.style.color = 'blue'; });

function agregarImagen(){
const ContenedorImagen = document.getElementById('ContenedorImagen');
const imagen = document.createElement('img');
imagen.src = 'https://i.ibb.co/k3z1Mxm/2024-04-11-23-01-46.png';
imagen.alt = 'Icono de simbolo';
ContenedorImagen.appendChild(imagen);
}
window.addEventListener('load', agregarImagen);

const EliminarElBoton = document.querySelectorAll('.EliminarBoton');

EliminarElBoton.forEach(boton => {
boton.addEventListener('click', () => {
const listItem = boton.parentElement;
listItem.remove();
});
});