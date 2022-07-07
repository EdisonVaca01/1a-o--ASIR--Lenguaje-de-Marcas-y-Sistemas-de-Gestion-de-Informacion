/**
 * Validacion de un formulario
 * 
 * 1. Realizar funcion/es
 * 2. Crear evento asociado a algun elemento
 * 3. Comprobar que funciona
 * 
 * AUXILIO ----> console.log(ELEMENTO)
 * length ---> me da el valor de la cantidad de caracteres
 * style ----> introduce estilos.
 * innerHTML ----> introduce texto
 * addEventListener ----> crea un evento del tipo elegido y llama a la funcion seleccionada
 */

/**
 * ENUNCIADO:
 * Ejercicio 1.
 * Realiza una funcion que recoja el valor del input y lo valide
 * a. Comprueba que tiene longitud menor que 20
 * b. Comprueba que tiene longitud mayor 3
 * 
 * Ejercicio 2.
 * Realiza un evento click sobre el boton y que llame a la funcion del ejercicio 1
 */
document.getElementById('btn').addEventListener('click', compruebaInput);

function compruebaInput(){
    // Recojo el valor del input y lo guardo en la variable valorDelInput
    let valorDelInput = document.getElementById('exampleFormControlInput1').value;

    if(valorDelInput.length > 20){
        // ERROR, MUCHOS CARACTERES
        document.getElementById('mensajeErrorEmail').innerHTML = 'ERROR, MUCHOS CARACTERES';
        document.getElementById('mensajeErrorEmail').style.color = 'red';
    }else if(valorDelInput.length < 3){
        // ERROR, POCOS CARACTERES
        document.getElementById('mensajeErrorEmail').innerHTML = 'ERROR, POCOS CARACTERES';
        document.getElementById('mensajeErrorEmail').style.color = 'red';
    }else{
        // TODO CORRECTO
        document.getElementById('mensajeErrorEmail').innerHTML = 'FORMATO CORRECTO';
        document.getElementById('mensajeErrorEmail').style.color = 'green';
        // document.getElementById('mensajeErrorEmail').style.display = 'none';
    }
}