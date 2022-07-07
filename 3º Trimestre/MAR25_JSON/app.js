let coche = {
    neumaticos: {
        DI: [1, 2, 3],
        DD: "2",
        TI: "3",
        TD: "4",
        Reserva: "5"
    },
    motor: {
        marca: "",
        cilindrada: "",
        nombre: ""
    },
    numero_plazas: 4,
    num_ventanas: 5
};
console.log(coche.neumaticos);

let valorDI = coche.neumaticos.DI;

// for (INICIO; FIN; AUMENTO) --> utilizar la variable i como auxiliar
// Cuando acaba el for, la variable i SE DESTRUYE.
for (let i = 0; i < valorDI.length; i++) {
    console.log(valorDI[i]);
}

// 1. Instanciar objeto XMLHttpRequest (guardar en variable)
var xhttp = new XMLHttpRequest();

// 2. Crear llamada open con el tipo (GET/POST) y el fichero correspondiente (cosa.xml)
xhttp.open("GET", "datos.xml", true);

// 3. Enviar la peticion creada en el paso 2
xhttp.send();

// 4. Recibo peticion de llamada AJAX
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        let asir = this.responseXML.getElementsByTagName('Asir')[0];

        let modulos = asir.childNodes[1];

        let primero = modulos.childNodes[1];

        let cursos = primero.childNodes[1];
        console.log(cursos);
        
        let cursos2 = primero.childNodes[3];
        console.log(cursos2);
      
        let cursos3 = primero.childNodes[5];
        console.log(cursos3);
       
        let cursos4 = primero.childNodes[7];
        console.log(cursos4);
       
        let cursos5 = primero.childNodes[9];
        console.log(cursos5);
        
        let cursos6 = primero.childNodes[11];
        console.log(cursos6);
        
        for (let i = 1; i < primero.childNodes.length; i += 2) {
            let cursos = primero.childNodes[i];
            console.log(cursos);
        }
    }
};



