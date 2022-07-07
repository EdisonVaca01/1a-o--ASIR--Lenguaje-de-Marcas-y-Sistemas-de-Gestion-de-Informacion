console.log("saufaisufh");


/**
 * Funcion que carga los datos del fichero datos.txt
 */
function datosTXT(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "datos.txt", true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            // console.log(this.responseText);
        }
    }
}

/**
 * Funcion que carga los datos del fichero datos.json
 */
function datosJSON(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "datos.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            // console.log(this.responseText);

            // 1. Guardar en variable
            let datos = this.responseText;

            // 2. Parsear el texto a formato JSON
            let datosParseados = JSON.parse(datos);
            // console.log(datosParseados[0]["trabajador"]["apellido"]);
            let datosHTML = document.getElementById('datos');
            datosHTML.innerHTML = datosParseados[0]["trabajador"]["apellido"];

            console.log(datosParseados);
            // for(inicio; fin; aumento)
            for(let i = 0; i < datosParseados.length; i++){
                datosHTML.innerHTML += datosParseados[i];
            }
        }
    }
}

datosTXT();
datosJSON();