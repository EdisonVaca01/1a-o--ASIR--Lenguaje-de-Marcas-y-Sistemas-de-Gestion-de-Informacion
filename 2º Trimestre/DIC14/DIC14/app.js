//alert("HOLA"); // Ventana con mensaje
//let nombre = prompt("Introduce un nombre"); // Introduccion de datos
//console.log(nombre);
/**
 * La variable nombre es de tipo cadena de caracteres 
 */

let nota = prompt("Introduce tu nota");
console.log(nota + 1);

/**
 * prompt siempre guarda los datos que recibe como cadena de caracteres.
 * Para pasar esta cadena a numero utilizo parseInt
 */

let notaNumerica = parseInt(nota);
console.log(notaNumerica + 1);

console.log(notaNumerica == 7);

/**
 * Diferencia entre simbolos '='
 * 
 * Cuando tengo un '=' asigno un valor a mi variable. Ejemplo en las lineas 8 y 16 
 * (introduzco un valor a las variables nota y notaNumerica)
 * 
 * Cuando tengo '==' comparo los valores de la izquierda y derecha del simbolo. Ejemplo en linea 19.
 * (miro si el valor de notaNumerica es 7)
 * Si es cierto devuelve 'true'
 * Si no es cierto devuelve 'false'
 * 
 */

console.log(notaNumerica >= 5);
console.log(notaNumerica < 5);

/**
 * Comparaciones.
 * Podemos comparar un valor numerico si es mayor, igual, menor... etc que otro.
 * '>' => miramos si es mayor que
 * '>=' => miramos si es mayor o igual que
 * '<' => miramos si es menor que
 * 
 * Ejemplos en las lineas 34 y 35.
 * 
 * Las comparaciones devuelven valores booleanos
 */

/**
 * Tipos de datos.
 * cadena de caracteres => tambien llamados string si van entre comillas (simples o compuestas). Ejemplo: "abc", '5'.
 * numerico => si no van entre comillas y son exclusivamente numeros. Ejemplo: 5 7 77 98...
 * booleano => solo contienen dos tipos de valores: true y false. Siembre van sin comillas.
 */

if(notaNumerica >= 5){
    console.log("ESTAS APROBADO");
}else{
    console.log("ESTAS SUSPENSO");
}

let cosa = 4;
if(notaNumerica >= cosa){
    console.log("ESTAS APROBADO");
}
if(notaNumerica < cosa){
    console.log("ESTAS SUSPENSO");
}

/**
 * Estructura IF-ELSE
 * Evalua lo que hay entre parentesis en el IF y en funcion del valor booleano que reciba, ejecuta o no lo que hay entre llaves.
 * Si recibe true => ejecuta el codigo entre llaves.
 * Si recibe false => NO ejecuta el codigo entre llaves (no hace nada).
 * 
 * Si hay un ELSE, se ejecuta el contenido entre llaves cuando IF sea FALSE.
 * 
 * En el ejemplo de las lineas 56 a 60 vemos que compara el valor de notaNumerica con 5.
 * Si es mayor o igual a 5 (comparacion true), ejecuta "ESTAS APROBADO" pero no ejecuta el ELSE.
 * Si NO es mayor o igual a 5 (solo menor), ejecuta "ESTAS SUSPENSO" pero no ejecuta el contenido de IF.
 */