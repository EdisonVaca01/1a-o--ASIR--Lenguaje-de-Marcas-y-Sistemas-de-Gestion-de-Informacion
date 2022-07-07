/**
 * Simulacro de examen ASIR.
 * Enunciado:
 * Realiza la validación del formulario.
 * 
 * Parte inicial.
 * Colocar todos los mensajes ocultos aplicando estilos css.
 * 
 * Parte 1.
 * Crea una funcion que realice la validacion del email comprobando los siguientes elementos
 * -  Valor vacío 
 * -  Valor con longitud menor que 15
 * -  Valor con longitud mayor que 3
 * -  Valor correcto.
 * 
 * En los tres primeros, se debe dar un mensaje de error en color rojo y cambiar el color del input a rojo.
 * En el último, se debe cambiar el color del input a verde y en cuanto al mensaje ocultarlo o mostrar mensaje en verde.
 * 
 * Parte 2.
 * Crea una funcion que realice la validacion de la edad comprobando los siguientes elementos
 * -  Valor vacío 
 * -  Valor menor de 18
 * -  Valor mayor de 18
 * 
 * En los dos primeros, se debe dar un mensaje de error en color rojo y cambiar el color del input a rojo.
 * En el último, se debe cambiar el color del input a verde y en cuanto al mensaje ocultarlo o mostrar mensaje en verde.
 * 
 * Parte 3.
 * Crea un evento click que realice la validacion completa del formulario utilizando las funciones de la parte 1 y parte 2.
 * - Si el checkbox esta seleccionado y email y password son correctos, mostrar un alert con mensaje de formulario correcto.
 * - Si el checkbox esta deseleccionado o el email o password no son correctos, no mostrar alerta (puesto que hay elementos en rojo).
 * 
 * SECCION DE AYUDA.
 * BASICO. Utiliza el console.log(COSA) para imprimir o comprobar elementos en la consola del navegador.
 * 1. Para la realicacion de eventos, utilizar addEventListener(evento, funcion);
 * 2. Para cambiar elementos css, utilizar style.CAMBIO.
 * 3. Para obtener el valor del checkbox en caso de estar o no seleccionado, utilzar ELEMENTO.checked = true|false
 */

// Parte 1.
function email(){
    /**
     * Recojo los elementos relacionados con email: input y div con mensaje de error
     */
    let inputEmail = document.getElementById('email');
    let mensajeEmail = document.getElementById('emailError');

    /**
     * Recoger el valor de inputEmail utilizando el value para poder comparar.
     */
    // Comparacion con elemento vacio
    if(inputEmail.value == ""){
        mensajeEmail.innerHTML = 'Escribe un dato';
        mensajeEmail.style.color = 'red';
        inputEmail.style.borderColor = 'red';
    }
    // Comparacion con elemento de longitud menor que 15
    else if(inputEmail.value.length > 15){
        mensajeEmail.innerHTML = 'Valor demasiado largo';
        mensajeEmail.style.color = 'red';
        inputEmail.style.borderColor = 'red';
    }
    // Comparacion con elemento de longitud mayor que 3
    else if(inputEmail.value.length < 3){
        mensajeEmail.innerHTML = 'Valor demasiado corto';
        mensajeEmail.style.color = 'red';
        inputEmail.style.borderColor = 'red';
    }
    // Valor correcto: no vacio y entre longitud 3 y 15
    else {
        mensajeEmail.innerHTML = 'Valor correcto';
        mensajeEmail.style.color = 'green';
        inputEmail.style.borderColor = 'green';
    }
    
}

// Parte 2.
function edad(){
    /**
     * Recojo los elementos relacionados con edad: input y div con mensaje de error
     */
    let inputEdad = document.getElementById('edad');
    let mensajeEdad = document.getElementById('edadError');

    /**
     * Recoger el valor de inputEdad utilizando el value para poder comparar.
     */
    // Comparacion con elemento vacio
    if(inputEdad.value == ""){
        mensajeEdad.innerHTML = 'Edad vacia';
        mensajeEdad.style.color = 'red';
        inputEdad.style.borderColor = 'red';
    }
    // Comparacion con valor menor que 18
    else if(parseInt(inputEdad.value) < 18){
        mensajeEdad.innerHTML = 'Menor de edad';
        mensajeEdad.style.color = 'red';
        inputEdad.style.borderColor = 'red';
    }
    // ¿EDAD CON NUMERO? Si introduzco letra, da error
    // Valor correcto: no vacio y edad mayor que 18
    else {
        mensajeEdad.innerHTML = 'Edad correcta';
        mensajeEdad.style.color = 'green';
        inputEdad.style.borderColor = 'green';
    }
}

// Parte 3
document.getElementById('btn').addEventListener('click', validacionTotal);

function validacionTotal(){
    // Compruebo email y edad que ya los tengo creados
    email();
    edad();

    // Una vez comprobado email y edad, compruebo checkbox
    let checkbox = document.getElementById('checkbox');
    let mensajeCheckbox = document.getElementById('checkboxError');

    if(checkbox.checked == false){
        mensajeCheckbox.innerHTML = 'Debes aceptar las condiciones';
        mensajeCheckbox.style.color = 'red';
        checkbox.style.borderColor = 'red';
    }
    else {
        mensajeCheckbox.innerHTML = 'Todo ok';
        mensajeCheckbox.style.color = 'green';
        checkbox.style.borderColor = 'green';

        if(document.getElementById('edadError').style.color == 'red' || document.getElementById('emailError').style.color == 'red'){

        }else{
            alert("Validacion completada");
        }
        
    }
}