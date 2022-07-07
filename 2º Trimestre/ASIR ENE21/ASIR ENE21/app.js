// Capturo en la variable boton el boton hamburguesa 
let boton = document.getElementById('button-menu');

// Capturo el nav sobre el que aplico el toggle
let nav = document.getElementById('nav');

// Creo el evento click para el menu hamburguesa
// Cada vez que pulso el boton se ejecuta la funcion menu
boton.addEventListener('click', menu);

function menu(){
    nav.classList.toggle('show')
    boton.classList.toggle('close')
}