/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////

// Nuevas Funcionalidades ECMAScript

// 2016
// operador de exponenciacion
//Includes: Sabe si hay algo en array

// antes de ES7
let base= 4;
let exponente = 3;

let resultado = Math.pow(base, exponente);
console.log(resultado);

// con ES7
let resultadoNuevo = base ** exponente;
console.log(resultadoNuevo);

// Includes:

let misterygang = ["Shaggy", "Scooby", "Velma", "Fred", "Daphne"];
console.log(misterygang.indexOf("Fred") > -1); //True

// con ES7

console.log(misterygang.includes("Velma"));

// Si ta true, si no ta False

// Es8 : 2017
// Cayo el async await
// object.values, object.entries, object.eys = Estos etodos estaticos nos perite tener valores de un objeto as simple

const empleado ={
    nombre: "Peter",
    apellido: "Parker",
    Edad: 18,
    Puesto: "Fotografo",
}

// Values

let resultadoEmpleadoValues = Object.values(empleado);
console.log(resultadoEmpleadoValues);

// Keys

let resultadoEmpleadoKeys = Object.keys(empleado);
console.log(resultadoEmpleadoKeys);

//Entries

let resultadoEmpleadoEntries = Object.entries(empleado);
console.log(resultadoEmpleadoEntries)


// ES9: 2018
// finally() se ejecuta siempre si la promesa se resuelve o no
// Spread Operator

let arrayNombres = ["Nico", "Tomy", "Juli", "La Mina"];
    console.log(...arrayNombres);
console.log(arrayNombres[0], arrayNombres[1], arrayNombres[2], arrayNombres[3]);

// Copiar Objetos

const iroman = {
    Nombre: "Anthony",
    Apellido: "Stark",
    Edad: 47,
}

const iroman2 = iroman;
//Copia y ya
//Si cambio valor en 2 no cambia xD

// concatenar arrays

let numeros = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
let numerosConcatenados = [...numeros, ...numeros2];
console.log(numerosConcatenados);

//Pasar argumentos a una funcion

const sumar = (a, b, c) => {
    console.log(a + b+ c);
};
const numeroASumar = [ 6, 6, 5];

sumar(...numeroASumar);

// ES10:
// String.trim() = elimina espacios de cadena de caracteres.
//String.flat() = nos permite aplanar un array


// TRIM
let fraseConEspacios = "      Hola, mi nombre es Javier     ";
console.log(fraseConEspacios.trim());

//Flat, aplanar = convertir un multidimensional en una dimension
// ej:
let arrayMultidimensional = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// console.log(arrayMultidimensional);
console.log(arrayMultidimensional.flat(2));
//  el 2 que pasaos como parametro es la profundidad del array. por defect es 1.

//Desestructuracion:
const pelicula = {
    titulo: "El PAdrino",
    director: "Francis F. Coppola",
    genero: "Drama",
    Lanzamiento: 1972,
}

// antes

let titulo = pelicula.titulo;
titulo = "Titanic";
console.log(titulo);
console.log(pelicula);

//Ahora con la desestructuracion yo puedo hacer lo siguiente

let{titulo:tituloPeli, director, genero, Lanzamiento} = pelicula;
console.log(director);
console.log(lanzaiento);

const numeritos = [1, 2, 3, 4, 5];

let uno = numeritos[0];
let dos = numeritos[1];

// ahora
let [indiceCero, indiceUno, indiceDos] = numeritos
console.log(indiceUno);

// Valores por defecto:

function saludar(nombre = "Invitado") {
    console.log (`hola ${nombre} bienvenido!`);
};

//ES11 2020
//Nullish Coalescings
//Acceso Condicional a Objetos

//Nullish nos permite establecer un valor por def cuando tenemos null o undifined

let cliente = "Matias";
console.log(cliente ?? "Anonimo");

let alumno = null;
console.log(alumno?.nombre); // el ? sirve de condicional. 

alert("aca hay mas codigo");

//Variablesprivadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de insctancia de una clase y solo sea utilizada de manera interna

class Persona{
    #nombre
    #edad
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre (){
    return this.#nombre;
}
}

const personita = new Persona ("Homero", 39);
console.log(personita.nombre);


/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////

// Sincronismos y Asincronismo

// Lo sincronico va en orden de lectura 

console.log("primero");
console.log("segundo");
console.log("tercero");

//cada tarea se ejecuta en orden

function a (){
    console.log(1);
    b()
};
function b() {
    console.log(2);
    c()
};
function c(){
    console.log(3);
};

// Asincronico 
// las tareas se ejecutan en segundo plano y no bloquean na
// ej:

setTimeout (() => {
    console.log("primer tarea");
}, 4000);

console.log("Segunda Tarea");

// Callback
// Funcion que sirve como argumento en otra funcion.

function suma(numA, numB, callback){ 
    let resultado = numA + numB;
    callback(resultado);
}

function mostrarResultado (dato){
    console.log("El resultado de la operacion essss...... " + dato)
}

suma(10, 5, mostrarResultado)

// Ejemplo con map

let array = [1,2,3,4,5];
let numerosDuplicados = array.map(numero => numero*2);
console.log(numerosDuplicados);

// Map mmade in haus

function mapear(arrayOriginal, callback){
    let nuevoArray = [];
        for(let i = 0; i < arrayOriginal.length; i++){
            nuevoArray.push(callback(arrayOriginal[i]))
        } 
    return nuevoArray
};

function duplicar(numero){
    return numero * 2;
};

console.log("Nueva funcion map:   " + mapear(array, duplicar));

//Promesas
//representan un hecho a futuro. se utilizan en op asincronicas que pueden ser bien o mal

//pendiente: (pending) Estado inicial, no se completo ni se rechazo
//exitoso: (fullfilled) Completado correstamente, resuelta la promise, poder recibir result
//fallida (rejected) Operacion Async fallo y se rechazo, puede pasar que haya error en algun lao

const promesa = new Promise((resolve, reject) => {
    //aca va el codigo a ejecutar
    if(true){
        resolve("exito en la promesa")
    }
    else{
        reject("no se cumplio")
    }
})

console.log(promesa);

// then y catch:
//Manejan resultado del prmise. se concatenan
//then lo ejecutamos cuando se resuelve
//catch cuando se rechaza
//finally siempre 

promesa
    .then(() => console.log("Gane 2Millones en el Casino"))
    .catch(() => console.log("Juge todo al Rojo"))
    .finally(() => console.log("Me revente todo por la timba"))

// podemos practicar con un array de datos:

const productos = [
    {id: 1, nombre: "BG1", precio: 36},
    {id: 2, nombre: "BG2", precio: 45},
    {id: 3, nombre: "BG3", precio: 60}
]

function buscarProductoPorID(id) {
    return new Promise ((resolve, reject) => { 
        setTimeout( () => {
            const producto = productos.find(producto => producto.id ===id);
            if (producto) {
                resolve(producto);
            } else {
                reject ("no existe ese producto")
            }
        }, 2000)
    })
}

buscarProductoPorID (2000)
.then ((producto) => console.log(producto))
.catch((error) => console.log(error))

async function buscarProductoPorIDAsync(id) {
    const producto = await buscarProductoPorID(id);
    console.log(producto);
}

buscarProductoPorIDAsync(1);
//con await se espera a que la promesa este hecha, pero para usarla tenes q tener async

fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => Response.json())
    //lo paso x json para obtener los datos
    .then( usuarios => console.log(usuarios))

// ASync await?
async function obtenerUsuarios(){
    try{
        const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users")
    const usuarios = await respuesta.json();
    console.log(usuarios)
    } catch {
        console.log(error);
    }
}

/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////