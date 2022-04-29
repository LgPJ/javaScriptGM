//UNa clase es una plantilla para crear objetos apartir de ella

/*NOTA:     let persona = new People('Karla','juarez');*/

const log = console.log;

class Test{

    constructor(name, lastName){
        
        this._name = name;
        this._lastName = lastName;

    }

    get name(){
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        return this._lastName = lastName;
    }


}

//Imprimiendo el objeto original
let peopleTest = new Test('Juan', 'Perez');
//log(peopleTest);

//Ejecutando metodos SET dentro de la clase
peopleTest.name = 'XXXX';
peopleTest.lastName = 'XXXX';
//log(peopleTest);

//NOTA: no se pueden crear un objetos de una clase, antes de su declaracion linea 3



//================================================================================================
//Definicion de clases, una clase hija extendiendo de una clase padre

//clase padre
/*class People{

    constructor(name, lastName){
        
        this._name = name;
        this._lastName = lastName;

    }

    get name(){
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        return this._lastName = lastName;
    }


}

//clase Hija
class Employee extends People {

    constructor(name, lastName, department){
        super(name, lastName); //llamando al constructor de la clase padre que seria people
        this._department = department;
    }

    get department(){
        return this._department;
    }

    set department(department){
        return this._department = department;
    }
}
*/
//creando el objeto de la clase hija employee
//log(new Employee('Maria', 'Gabriela', 'Desarrollo'));

//================================================================================================

//Herencia

//clase padre
/*class People{

    constructor(name, lastName){
        
        this._name = name;
        this._lastName = lastName;

    }

    get name(){
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        return this._lastName = lastName;
    }

    //Metodo a heredar
    fullName(){
        return this._name + ' ' + this._lastName;
    }

}

//clase Hija
class Employee extends People {

    constructor(name, lastName, department){
        super(name, lastName); //llamando al constructor de la clase padre que seria people
        this._department = department;
    }

    get department(){
        return this._department;
    }

    set department(department){
        return this._department = department;
    }
}

let employee = new Employee('Maria', 'Becerra', 'Diseño');

log(employee.fullName());
log(employee.completeData());*/

//================================================================================================

//SobreEscritura de metodos.

/*
//clase padre
class People{

    constructor(name, lastName){
        
        this._name = name;
        this._lastName = lastName;

    }

    get name(){
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        return this._lastName = lastName;
    }

    //Metodo a heredar
    fullName(){
        return this._name + ' ' + this._lastName;
    }

}

//clase Hija
class Employee extends People {

    constructor(name, lastName, department){
        super(name, lastName); //llamando al constructor de la clase padre que seria people
        this._department = department;
    }

    get department(){
        return this._department;
    }

    set department(department){
        return this._department = department;
    }

    //Metodo sobreEscrito
    fullName(){
        return super.fullName() + ' it is ' + this._department;
    }
}
*/
//let employee = new Employee('Maria', 'Becerra', 'Diseño');
//log(employee.fullName());

//================================================================================================

//Clases Object, metodo ToString, sobreeescritura y poliformismo.

//clase padre
class People{

    constructor(name, lastName){
        
        this._name = name;
        this._lastName = lastName;

    }

    get name(){
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        return this._lastName = lastName;
    }

    //Metodo a heredar
    fullName(){
        return this._name + ' ' + this._lastName;
    }

    //Sobreescribiendo el metodo que esta dentro de la clase object
    toString(){
        return this.fullName();

    }

}

//clase Hija
class Employee extends People {

    constructor(name, lastName, department){
        super(name, lastName); //llamando al constructor de la clase padre que seria people
        this._department = department;
    }

    get department(){
        return this._department;
    }

    set department(department){
        return this._department = department;
    }

    //Metodo sobreEscrito
    fullName(){
        return super.fullName() + ' it is ' + this._department;
    }

}

let employee = new Employee('Maria', 'Becerra', 'Diseño');
log(employee.toString());