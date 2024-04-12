const CambioDeColorBoton = document.getElementById('CambioDeColorBoton');
const Parrafo = document.getElementById('Parrafo');

CambioDeColorBoton.addEventListener('click', () => {
Parrafo.style.color = 'blue'; });

function agregarImagen(){
const ContenedorImagen = document.getElementById('ContenedorImagen');
const imagen = document.createElement('img');
imagen.src = 'https://wallpaperaccess.com/full/5473184.jpg';
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