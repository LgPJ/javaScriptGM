//capturando el log, para asi tener una facilidad al imprimir los datos.
const log = console.log;

/*
Llamar a una funcion antes de su definicion se puede realizar gracias al Hoisting
Hoisting, permite ejecutar funciones antes de su definicion.
*/

//Primera llamada a la funcion.
//log(fTest(4,5));

//Definicion de la funcion y sus variables.
function fTest(a , b) {

    //cuerpo de la funcion.
    return a + b;
}

//Segunda llamada a la funcion.

//Impresion del valor de la funcion
//log(fTest(1,2));


//Funcion de tipo Expresion.
let test = function(a,b){return a + b};

//Llamando a la funcion de tipo expresion.

//Impresion del valor de la funcion
//log(test(10,10));


//Funciones de tipo self Invoking
/**Este tipo de funciones se llaman asi mismas, no se le asigan el valor a una variable
 * se le anexa los () parentesis al final, para asi determinar que la funcion se esta llamando a ella misma.
 * 
 * al igual que los () pueden ser colocados en otra posicion deseada o donde desea hacer el llamado.
 * 
 * NOTA: una funcion del tipo self Invoke, no puede ser llamada antes de su definicion.
 */

(function(a , b){
    
    let result = a + b;
    log("Ejecutando funcion self invoike");
    log(result);

})//(1,2)

//(1,2);


//Funciones flechas 
/* No es necesario utilizar la palabra reservada function 
    No es necesario colocar {}
    No es necesario colocar la palabra return
*/
const funcionFlecha = (a , b) => a + b;

//Impresion del valor de la funcion
//log(funcionFlecha(22,22));

//Ejemplo de impresion de los argumentos de una funcion

let sum = function(a,b){

    //og(arguments[0]); //Equivale al primer parametro de la funcion
    //log(arguments[1]); //Equivale al segundo parametro de la funcion
    return a + b;
}

//log(sum(1,2))

//Paso por valor en funciones

//Son tipos que no son objetos


let num = 10;

function pasoValor(argu){

    /*
    El paso por valor solo crea una copia en este caso de la variable num dentro de argu
    al salir de la funcion, la variable num mantiene su valor inicial.
    */ 
    argu = 20;

}

//se imprime el valor de la variable que le aplico el metodo.
pasoValor(num);
//log(num);


//Paso por referencia

const person = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function pasoReferencia(p1){
    p1.nombre = 'Miguel';
    p1.apellido = 'Lara';
}

pasoReferencia(person);
log(person);

