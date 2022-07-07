/**
 * Objetivos de la sesion:
 * 1. Trabajar con el checkbox ---> seleccionado o no seleccionado.
 */

/**
 * Para trabajar con el checkbox necesito acceder al elemento
 */
let checkbox1 = document.getElementById('flexCheckDefault');
let checkbox2 = document.getElementById('flexCheckChecked');

/**
 * Comprobar si estan o no seleccionados.
 * Utilizo el console.log() sobre las variables de los checkbox
 * Se puede ver si estan seleccionados con la llamada checked
 */
console.log(checkbox1.checked);
console.log(checkbox2.checked);

/**
 * Objetivo.
 * Realizar una validacion sobre un formulario y comprobar si estan aceptadas las condiciones
 */

// Agrego un evento de tipo click que ejecuta la funcion comprobar
// El evento es sobre el elemento con id aceptar (boton)
document.getElementById('aceptar').addEventListener('click', comprobar);

function comprobar(){
    // 1. Recoger el valor del input
    let inputTexto = document.getElementById('texto');

    // 2. Recoger el valor del checkbox
    let checkbox = document.getElementById('ch');

    /*
    * 3. Comprobar si ckeckbox esta seleccionado.
    * - Si esta seleccionado no pasa nada.
    * - Si no esta seleccionado, cambiamos el color a rojo
    */
    if(checkbox.checked){
        // Esta seleccionado. No pasa nada
        checkbox.style.borderColor = 'green';
    }else{
        // No esta seleccionado. Cambiar color del elemento
        checkbox.style.borderColor = 'red';
    }

    /**
     * 4. Comprobar si el input tiene mas caracteres de 3
     * Utilizo la propiedad .length
     */
     if(inputTexto.value.length < 4){
        // Si su longitud es menor que 4, error
        inputTexto.style.borderColor = 'red';
    }else{
        // Si es mayor que 4, esta correcto
        inputTexto.style.borderColor = 'green';
    }

    /**
     * 5. Si checkbox ok y input ok.
     * Entonces alert con mensaje correcto
     */
    if(checkbox.checked && inputTexto.value.length > 4){
        alert('TODO CORRECTO');
    }else{
        alert('CORRIGE COSAS');
    }
}