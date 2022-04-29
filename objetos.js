//Manejo de objetos en JavaScript
const log = console.log;

let people = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
}

//Accediendo a los datos del objeto
//log(people.name);
//log(people.lastName);
//log(people.email);
//log(people.age);

//Imprimir el objeto en su totalidad
//log(people);

/**=====================================================================================*/

//Agregando metodo en los objetos, metodo sin parametros
let objectPeopel = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
    fullName: function(){
        return this.name + ' ' + this.lastName;
    } 

}

//Accediendo al metodo definido dentro objeto
//log(objectPeopel.fullName());

/**=====================================================================================*/

//Ejemplo 2, metodo con parametros
let objectPeopel2 = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
    fullName: function(inName, inLastName){
        return inName + ' ' + inLastName;
    } 

}

//log(objectPeopel2.fullName('Jose', 'Villegas'));

/**=====================================================================================*/

//Creacion de objetos de forma dinamica
let people3 = new Object(); //Reserva el espacio en memoria.

people3.nombre = 'Carlos'; //se asigna valor a los argumentos del objeto
people3.direccion = 'VENEZUELA';
people3.telefono = '0412-4000499';

//Imprimir el nuevo objeto creado
//log(people3);

/**=====================================================================================*/

//Agregar y eliminar propiedades de un objeto.
let peopel4 = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
    fullName: function(){
        return this.name + ' ' + this.lastName;
    } 

}

//Agregando una porpiedad al objeto
peopel4.phone = '55555555';

//Eliminar una propiedad del objeto
delete peopel4.age;

//log(peopel4);

/**=====================================================================================*/

//Diferentes formas de imprimir un objeto

let people5 = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
    fullName: function(){
        return this.name + ' ' + this.lastName;
    } 

}

//FOR IN
for (propertyName in people5) {

  //  log(people5[propertyName]);
}

//CONSOLE 
//log('=====================================')
//log(people5.name + ' ' + people5.lastName + ' ' + people5.email + ' ' + people5.age);

//CONVIRTIENDO EL OBJETO A ARREGLO
//log('=====================================')
//log(Object.values(people5));

//IMPRESION DEL OBJETO
//log('=====================================')
//log(people5);

/**=====================================================================================*/

//Metodos get y set en objetos

let people6 = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
    language: 'es',

    fullName: function(){

        return this.name + ' ' + this.lastName;
    },
    get nombreCompleto(){

        return this.name + ' ' + this.lastName;
    },
    get lang(){
        
        return this.language.toUpperCase();
    },
    set lang(change) {

        this.language = change.toUpperCase();
    }

}

/*
log(people6.lang);
people6.lang = 'en';
log(people6.lang);
*/

/**=====================================================================================*/

//Creacion de objetos por medio de constructores

function People(name, lastName, age, email){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

//log(new People('Luis', 'Manuel', 25, 'lMnauel@gmail.com'));
//log(new People('Miguel', 'Eduardo', 12, 'mEduardo@gamil.com'));

//Uso de prototype

function People2(name, lastName, age, email){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

People2.prototype.phone = '12345678';
//log(new People2('Luis', 'Manuel', 25, 'lMnauel@gmail.com'));

/**=====================================================================================*/

//Uso de Call JavaScript

//Nos permite llamar a un objeto que esta dentro de otro objeto.

/*let people7 = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
    fullName: function(){
        return this.name + ' ' + this.lastName;
    } 
}*/
//Uso de call con argumentos en el metodo.

let people7 = {
    
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 15,
    fullName: function(title, phone){
        return title + ' ' + this.name + ' ' + this.lastName + ' ' + phone;
    } 
}

let people8 = {
    
    name: 'Jose',
    lastName: 'David',
    email: 'jDavid@gmail.com',
    age: 25
}

//Usando call para llamar al metodo del objeto perople7, dentro de persona 8
//log(people7.fullName.call(people8));

//Usando call para llamar al objeto y pasar parametros
log(people7.fullName.call(people8, 'Developer', '55-55-55'));

//Llamado sencillo al metodo de imprimir nombre completo.
//log(people7.fullName());

