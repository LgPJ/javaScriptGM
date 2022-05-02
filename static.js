//Static es una palabra reservada, las variables definidas o los metodos con esta terminologia,
//su acceso solo debe ser desde el metodo donde fueron definidas

const log = console.log;


//METODOS STATIC

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

    //Sobreescribiendo el metodo que esta dentro de la clase object
    toString(){
        return this.fullName();

    }

    //NOTA: un metodo static se relaciona con la clase pero no con los objetos
    static toGreet(){
        log('Saludos desde metodo STATIC');
    }

    static greetParameters(people){
        log('saludos ' +  people.lastName + ' le escribo desde el metodo static');

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

}*/

//let people = new People('Jose', 'Miguel');

//people.saludar(); No es posible llamar un metodo static desde un objeto

//para llamar a un metodo static, se le llamada desde la clase donde fue definido.
//People.toGreet();
//People.greetParameters(people);

//================================================================================================

//ATRIBUTOS STATIC

//clase padre
class People{

    //Variable static
    static peopleCounter = 0;


    //variable static y no modificable
    static get MAX_OBJ(){
        return 5;
    }

    constructor(name, lastName){
        
        this._name = name;
        this._lastName = lastName;
        
        //Validando la cantidad maxima de objetos, si fue alcanzada o aun tenemos espacio en la misma.
        if(People.peopleCounter < People.MAX_OBJ){
            
            this._idPeople = ++People.peopleCounter;

        } else {

            log('Cantidad de objetos maxima alcanzada');
        }
        

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
        return this._idPeople + ' ' + this._name + ' ' + this._lastName;
    }

    //Sobreescribiendo el metodo que esta dentro de la clase object
    toString(){
        return this.fullName();

    }

    //NOTA: un metodo static se relaciona con la clase pero no con los objetos
    static toGreet(){
        log('Saludos desde metodo STATIC');
    }

    static greetParameters(people){
        log('saludos ' +  people.lastName + ' le escribo desde el metodo static');

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

let people = new People('Jose', 'Miguel');
let employee = new Employee(people._name, people._lastName, 'Finanzas');

let people2 = new People('Anthony', 'Tavera');
let employee2 = new Employee(people2._name, people2._lastName, 'Administracion');

let people3 = new People('Romel', 'Parra');
let employee3 = new Employee(people3._name, people3._lastName, 'Deporte');

//
//log(people.toString());
//log(employee.toString());

//Accediendo a la variable static definida dentro de la clase.
//log(People.peopleCounter);

//Accediendo desde la clase hija a la variable definida dentro de la clase padre.
//log(Employee.peopleCounter);


//Accediendo a la variable tipo constante
//log(People.MAX_OBJ);


log('Validando la cantidad maxima');
log(people.toString());
log(employee.toString());
log(people2.toString());
log(employee2.toString());
log(people3.toString());
log(employee3.toString());

