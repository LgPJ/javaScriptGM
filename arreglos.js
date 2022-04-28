//Leccion 6 GlobalMentoring Array
let log = console.log;
//Forma tradicional de definir arreglos
//let cars = new Array("BMW", "MERCEDES BENZ", "VOLVO");

//Forma recomendada de definir arreglos
const cars = ["BMW", "MERCEDES BENZ", "VOLVO"];
let objeto;
log(cars);

log(cars[0]);
log(cars[1]);
log(cars[2]);

for(let i = 0; i < cars.length; i++){

    log(i + ' - ' + cars[i]);

}
log("====================================================");

//AGREGAR ELEMENTOS EN EL ARREGLO
cars.push("TOYOTA");

for(let i = 0; i < cars.length; i++){

    log(i + ' - ' + cars[i]);

}

//Validar si estoy en manejando un arreglo
log(Array.isArray(cars));
log(Array.isArray(objeto));