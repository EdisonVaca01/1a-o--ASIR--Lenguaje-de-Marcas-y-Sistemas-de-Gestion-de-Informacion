//EN ESTE CASO LA FUNCTION DATOS NOS RECOGE LAS 3 FUNCIONES "PARTE_1,PARTE_2 Y PARTE_3"
function datos() {
    parte_1();
    parte_2();
    parte_3();
}
// EN ESTA PRIMERA PARTE  NOSOTROS NOS VAMOS HA DEDICAR EN EL APARTADO DE LA CABEZERA DE LA PÁGINA : EL TÍTULO COMO UNA PEQUEÑA DESCRIPCIÓN DE LA EMPRESA
function parte_1() {
    let xhttp = new XMLHttpRequest();
    // EN ESTE CASO NOSOTROS AGEGAMOS EN ESTA PARTE EL ARCHIVO DESCRIPTION.TXT EN EL QUE VA HA AGREGAR EL CONTENIDO DE DEICHO ARCHIVO
    xhttp.open('GET', 'descripcion.txt', true);
    //ESTA APARTADO NOS AYUDA HA QUE SE ENVIE LA INFORACIÓN
    xhttp.send();
    xhttp.onreadystatechange = function () {
        //GRACIA HA LA SIGUIENTE LÍNEAA EVITAMOS FUTUROS FALLOS
        if (this.readyState == 4 && this.status == 200) {
            // NOSOTROS AGREGANDO LA SIGUIENTE LÍNEA NOS AYUDA A COGER TODO EL TEXTO DE DESCRIPCIÓN.TXT YA QUE ES UN TEXTO PLANO
            document.getElementById('titulo').innerHTML = this.responseText;
        }
    }
}
//EN ESTA SEGUNDA PARTE NOS VAMOS HA DEDICAR DE LAS TARGET: ES DECIR DE LOS AVATARES CON SUS RESPECTIVAS DESCRIPCIONES
function parte_2() {
    let xhttp = new XMLHttpRequest();
    // EN ESTE CASO NOSOTROS AGREGAMOS EN ESTA PARTE EL ARCHIVO TRABAJADORES.JSON EN EL QUE VA HA AGREGAR EL CONTENIDO DE DICHO ARCHIVO
    xhttp.open('GET', 'json/trabajadores.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // NOSOTROS EN  ESTE CASO ESTAMOS AGREGANDO UNA NUEVA VARIABLE  CON NOMBRE DATOS EN LA QUE NOS VA A RECOEGR TODOS LOS DATOS
            let datos = this.responseText;
            // POSTERIORMENTE AL COGER TODA LA INFORMACIÓN CREAMOS UNA NUEVA VARIABLE CON EL NOMBRE DATOSPARSEADOS CON LA FINALIDA  DE LEERLO EN  JSON PERO DE FORMA PARSEADA
            let datosParseados = JSON.parse(datos);
            //CREAMOS OTRA VARIABLE EN LA QUE VA A SER IGUAL AL ID "TARGET_1" DEL QUE TENEMOS EN EL HTML AGREGADO  
            let datosHTML = document.getElementById('target_1');
            // VOLVEMOS HA RECOGER DATOSHTML, AGREGAMOS EL INNER.HTML DONDE PUEDA RECOGER  EL [0] CONCRETAMENTE EL PUESTO
            datosHTML.innerHTML = datosParseados[0]["puesto"];
            // HEMOS RECOGIDO TODO EL LET DATO DONDE RECOGEMOS TODO EL  ID
            let datoHTML = document.getElementById('apartado_1')
            //IMPORTANTE EN ESTE CASO HEMOS CONCATENADO EL NOMBRE COMO EL APELLIDO
            datoHTML.innerHTML = datosParseados[0]["nombre"] + ' ' + datosParseados[0]["apellidos"];
            // OTRA OPCIÓN QUE PODEMOS REALIZAR  ES RECOGER DIRECTAMENTE EL ID CONJUNTO HA UN INNER HTML DONDE REOCOGEMOS EL [0] DE FECHA_NACIMIENTO
            document.getElementById('fecha_1').innerHTML = datosParseados[0]["fecha_nacimiento"];
            document.getElementById('email_1').innerHTML = datosParseados[0]["correo"];
            document.getElementById('antiguedad_1').innerHTML = "Trabaja desde: " + datosParseados[0]["antigüedad"];
            // EN ESTE CASO EN VEZ DE AGREGARLE UN .INNERHTML ÚNICAMENTE AGREGAMOS EL .SRC
            document.getElementById('img').src = 'img/avatar1.png';
            let datos2 = this.responseText
            let datosParseados2 = JSON.parse(datos2);
            let datosHTML2 = document.getElementById('target_2');
            datosHTML2.innerHTML = datosParseados2[1]["puesto"];
            let datoHTML2 = document.getElementById('apartado_2')
            datoHTML2.innerHTML = datosParseados2[1]["nombre"] + ' ' + datosParseados2[1]["apellidos"];
            document.getElementById('fecha_2').innerHTML = datosParseados2[1]["fecha_nacimiento"];
            document.getElementById('email_2').innerHTML = datosParseados2[1]["correo"];
            document.getElementById('antiguedad_2').innerHTML = "Trabaja desde: " + datosParseados2[1]["antigüedad"];
            document.getElementById('img2').src = 'img/avatar2.png';
            let datos3 = this.responseText;
            let datosParseados3 = JSON.parse(datos3);
            let datosHTML3 = document.getElementById('target_3');
            datosHTML3.innerHTML = datosParseados3[2]["puesto"];
            let datoHTML3 = document.getElementById('apartado_3')
            datoHTML3.innerHTML = datosParseados3[2]["nombre"] + ' ' + datosParseados3[2]["apellidos"];
            document.getElementById('fecha_3').innerHTML = datosParseados3[2]["fecha_nacimiento"];
            document.getElementById('email_3').innerHTML = datosParseados3[2]["correo"];
            document.getElementById('antiguedad_3').innerHTML = "Trabaja desde: " + datosParseados3[2]["antigüedad"];
            document.getElementById('img_3').src = 'img/avatar3.png';
            let datos4 = this.responseText;
            let datosParseados4 = JSON.parse(datos4);
            let datosHTML4 = document.getElementById('target_4');
            datosHTML4.innerHTML = datosParseados4[3]["puesto"];
            let datoHTML4 = document.getElementById('apartado_4')
            datoHTML4.innerHTML = datosParseados4[3]["nombre"] + ' ' + datosParseados4[3]["apellidos"];
            document.getElementById('fecha_4').innerHTML = datosParseados4[3]["fecha_nacimiento"];
            document.getElementById('email_4').innerHTML = datosParseados4[3]["correo"];
            document.getElementById('antiguedad_4').innerHTML = "Trabaja desde: " + datosParseados4[3]["antigüedad"];
            document.getElementById('img_4').src = 'img/avatar4.png';
            let datos5 = this.responseText;
            let datosParseados5 = JSON.parse(datos5);
            let datosHTML5 = document.getElementById('target_5');
            datosHTML5.innerHTML = datosParseados5[4]["puesto"];
            let datoHTML5 = document.getElementById('apartado_5')
            datoHTML5.innerHTML = datosParseados5[4]["nombre"] + ' ' + datosParseados5[4]["apellidos"];
            document.getElementById('fecha_5').innerHTML = datosParseados5[4]["fecha_nacimiento"];
            document.getElementById('email_5').innerHTML = datosParseados5[4]["correo"];
            document.getElementById('antiguedad_5').innerHTML = "Trabaja desde: " + datosParseados5[4]["antigüedad"];
            document.getElementById('img_5').src = 'img/avatar5.png';
        }
    }
}
// EN ESTA PARTE 3 NOS ENFOCAMOS EN EL APARTADO DE UBICACIONES
function parte_3() {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'json/trabajadores.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // HEMOS COREADO UNA VARIABLE CON EL NOMBRE DATO 6
            let datos6 = this.responseText;
            // HEMOS VUELTO A PARSEAR LOS DATOS
            let datosParseados6 = JSON.parse(datos6);
            // HEMOS RECOGIDO UN ID DEL HTML DONDE HEMOS AGREGADO UN PEQUEÑO TEXTO QUE ES DESCRIPTIVO DONDE TAMBIÉN CONCATENAMOS (HACEMOS QUE LEA UBICACIÓN Y DESPUÉS LA SECCIÓN 0 )
            document.getElementById('ubicacion').innerHTML = "Ubicacion de la empresa: " + datosParseados6[5]["ubicacion"][0]["lugar"] + ", " + datosParseados6[5]["ubicacion"][0]["descripcion"];
            let datos7 = this.responseText;
            let datosParseados7 = JSON.parse(datos7);
            document.getElementById('ubicacion2').innerHTML = "Ubicacion de la empresa: " + datosParseados7[5]["ubicacion"][1]["lugar"] + ", " + datosParseados7[5]["ubicacion"][1]["descripcion"];
            let datos8 = this.responseText;
            let datosParseados8 = JSON.parse(datos8);
            document.getElementById('ubicacion3').innerHTML = "Ubicacion de la empresa: " + datosParseados8[5]["ubicacion"][2]["lugar"] + ", " + datosParseados8[5]["ubicacion"][2]["descripcion"];
        }
    }
}