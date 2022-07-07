/**
 * 1. Capturar el elemento que quiero utilizar.
 * 2. Realizar una accion sobre el elemento que acabo de capturar
 * 2.1. Ver que tipo de evento utilizo
 * onclick -----> realizar algo (funcion) cuando hago click
 * onkeyup ------> realizar algo (funcion) cuando escribo una tecla
 * 
 * 2.2. Agregar evento sobre el elemento en cuestion (input)
 * 
 * 2 formas:
 * a) sobre la etiqueta html -----> onkeyup = "funcion()"
 * b) sobre el javascript agregar el evento -----> addEventListener('tipo_evento', funcion) ----> donde tipo_evento puede ser click, keyup...
 */


// Ejemplo 1. Muestra error si esta vacio input
document.getElementById('t').addEventListener('keyup', mostrarError);

function mostrarError(){
    // Guardo en la variable contenido el valor del input 
    let contenido = document.getElementById('t').value;

    // Guardo en la variable mensajeError la etiqueta p con el mensaje a mostrar si esta vacio el input
    let mensajeError = document.getElementById('error');

    // Cuando el contenido (valor del input) este vacío, muestrar mensaje de error en rojo
    if(contenido == ''){
        mensajeError.style.display = 'block';
        mensajeError.style.color = 'red';
        mensajeError.innerHTML = 'Error, está vacío';
    }

    // Cuando el contenido (valor del input) tenga caracteres (no vacío), eliminar mensaje de error en rojo
    if(contenido != ''){
        mensajeError.style.display = 'none';
    }

    // Cuando el contenido (valor del input) sea 'Limon', muestra mensaje en verde de producto encontrado
    if(contenido == 'Limon'){
        mensajeError.style.display = 'block';
        mensajeError.style.color = 'green';
        mensajeError.innerHTML = 'Producto encontrado';
    }
}

// Ejemplo 2: BUSCADOR
document.getElementById('t').addEventListener('keyup', filtrar);

function filtrar(){
    // Guardo en la variable contenido el valor del input trasnformado a mayusculas
    let contenido = document.getElementById('t').value.toUpperCase();

    // Guardo en la variable manzana el contenido del ID manzana (card) trasnformado a mayusculas
    let manzana = document.getElementById('manzana').innerHTML.toUpperCase();

    // Guardo en la variable kiwi el contenido del ID kiwi (card) trasnformado a mayusculas
    let kiwi = document.getElementById('kiwi').innerHTML.toUpperCase();

    // Guardo en la variable pera el contenido del ID pera (card) trasnformado a mayusculas
    let pera = document.getElementById('pera').innerHTML.toUpperCase();

    // Guardo en la variable limon el contenido del ID limon (card) trasnformado a mayusculas
    let limon = document.getElementById('limon').innerHTML.toUpperCase();
    
     // Ocultamos todos los elementos antes de comprobar coincidencias.
    document.getElementById('manzana').style.display = 'none';
    document.getElementById('kiwi').style.display = 'none';
    document.getElementById('pera').style.display = 'none';
    document.getElementById('limon').style.display = 'none';

    // Compruebo los contenidos y valores. Si hay coincidencias, muestro el elemento escogido
    // Si es manzana, muestra manzana y oculta el resto
    if(manzana.includes(contenido)){
        document.getElementById('manzana').style.display = 'block';
    }
    // Si es kiwi, muestra kiwi y oculta el resto
    if(kiwi.includes(contenido)){
        document.getElementById('kiwi').style.display = 'block';
    }
    // Si es pera, muestra pera y oculta el resto
    if(pera.includes(contenido)){
        document.getElementById('pera').style.display = 'block';
    }
    // Si es limon, muestra limon y oculta el resto
    if(limon.includes(contenido)){
        document.getElementById('limon').style.display = 'block';
    }
}

/**
 * includes ---> buscar un valor contenido en otro (comparar)
 * toUpperCase ----> transformar en mayusculas todo el valor
 * toLowerCase -----> transformar en minusculas todo el valor
 */
