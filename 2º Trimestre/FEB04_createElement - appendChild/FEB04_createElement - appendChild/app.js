// let seccion = document.getElementById('section');
// console.log(seccion.childNodes)
/**
 * Crear un elemento <p> como nodo y conectarlo con el section
 * 
 * 1. Creo el elemento.
 * 2. Relleno el elemento con informacion
 * 3. Conecto elemento con un nodo de mi HTML
 */

//1
// let elementoNuevo = document.createElement('p');

//2
// elementoNuevo.setAttribute('id', 'identificador');
// elementoNuevo.innerHTML = 'ESTE ES EL CONTENIDO DE MI ETIQUETA';

//3
// seccion.appendChild(elementoNuevo);

/**
 * Misma operacion con etiqueta <span> dentro de la etiqueta <p> creada anteriormente
 */
// let elementoNuevo2 = document.createElement('span');
// elementoNuevo2.innerHTML = 'ELEMENTO DOS';
// document.getElementById('identificador').appendChild(elementoNuevo2);


/**
 * Eliminar un nodo
 */

//elementoNuevo.remove();

document.getElementById("buscar").addEventListener("keyup", buscar);
function buscar() {
    let cajas = document.getElementsByClassName("caja");
    let input = document.getElementById("buscar").value;

    for(let i = 0; i < cajas.length; i++){
        if(!cajas[i].innerHTML.includes(input)){
            cajas[i].style.display = 'none';
        }
        else{
            cajas[i].style.display = 'block';   
        }
    }
}

/**
 * RELLENO DE DIVS MEDIANTE RECOGER VALOR DE INPUT
 */

// Creo el evento de click para el boton con id 'btn' que ejecuta la funcion agregar
document.getElementById('btn').addEventListener('click', agregar);

function agregar(){
    let palabra = document.getElementById('relleno').value;
    
    // Si esta vacio el valor del input salta una alerta. Si contiene datos, crea el elemento
    if(palabra == ''){
        alert('CONTENIDO VACIO');
    }else{
        //1
        let divNuevo = document.createElement('div');

        //2
        divNuevo.setAttribute('class', 'caja');
        divNuevo.innerHTML = palabra;

        //3
        document.getElementById('section').appendChild(divNuevo);

        //4 ---> Liberar input
        document.getElementById('relleno').value = '';

        //5 ---> pongo el foco en el input
        document.getElementById('relleno').focus();
    }
}