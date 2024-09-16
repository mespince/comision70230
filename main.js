//1.1number
764
745.456
//Datos Numeros: Enteros o Decimamles.

//1.2 String:

//"esto es un string"
//'Esto es un String'

//1.3 Boolean
true
false
//pa ahcer bucles y condicionales

//1.4 Undifined
undefined
//Valor asignado a variable cuando no se le da otro valor

//1.5 Null
null
//Ausencia intencional de un Valor

//VARIABLES
//Algo modificable
let alumno;
console.log(typeof alumno);
//Asignar valor
alumno = "Matias"

let profesor = "Coder"

//CONSTANTE
//No se modifican
const nacimiento = 1995;
console.log(nacimiento);

//2 Tipo de Objeto

//2.1Array: coleccion de datos
let array = [1, "hola", true, null, undefined, [1, 2, 3]]

console.log(array);

console.log(array.length);
//2.2 Objetos:

let perro = {
    nombre: "Firulais",
    edad: 5,
    vacunado: true,
    raza: "ladrador",
}
console.log(perro)
console.log(perro.nombre);

perro.nombre= "Rex";

/////////////////////////////////////

//Plantillas Literales:

//antes:

let mascota = "Fatiga";
let mascotaEdad = 5;
console.log("Nuestro Perro " + mascota + "tiene " + mascotaEdad+ "años. " );

//ahora:
console.log(`Nuestro perro ${mascota} tiene ${mascotaEdad +1} años`);

//Declarativas:
//1 paso, las declaramos

function saludar (numeroComision){
    //Bloque de codigo que se ejecuta
    console.log("Hola Comision " + numeroComision)
}

//2 paso, las invocamos
saludar(70230);

//Expresivas
let nuevoSaludo= function(curso){
    console.log ("La mejor comision del mundo: " + curso)
}


nuevoSaludo("Backend");

//Funcion flecha:
let ultimoSaludo = () => {
    console.log("Funcion ultimoSaludo")
}

ultimoSaludo();

let chau = numCurso => console.log("Chauuuu " + numCurso);
chau(70320);

//Scope:
let global = 2024;

function saludito(){
    console.log("hola estamos en el año " + global);
let curso = "Backend";
console.log("Estamos estudiando " + curso);
};

saludito();
// console.log("Estaos estudiando " + curso);

//Closures:
function padre(){
    let deuda = 15000000;
    function anidada(){
        console.log(deuda);
    }
    return anidada;
}

let clausura = padre();
clausula();

//Clases
//Moldes para cosas similares

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }


saludar() {
    console.log("Hola, soy "+ this.nombre);
}


papucho() {
    console.log("Papuchooooo");
}

despedir() {
    console.log("Chau, soy " + this.nombre);
}
//Variable Estatica
static planeta = "Tierra";


static especie() {
    console.log("Soy un ser humano")
}
}
//Creacion

let coky = new Persona("Coky Argento", 17);
let paola = new Persona("Paola Argento", 18);
let moni = new Persona("Moni Argento", 40);
let pepe = new Persona("Pepe Argento", 17);

console.log(coky);
console.log(paola);
console.log(moni);
console.log(pepe);

coky.saludar();

//invocar estatica

console.log(Persona.planeta);

Persona.especie();

class Empleado extends Persona{
    constructor (nombre, edad, salario){
        super(nombre, edad);
        this.salario = salario;
    }

    cobrarSalario(){
    console.log("recibi " + this.salario);
    }
}

const homero = new Empleado ("Homero", 37, 7000);

homero.despedir;
homero.cobrarSalario;


