/*Clase 5 - Manejo de Archivos */

// Temas

// File System
// Manejo de Archivos sincronicamente
// manejo de archivos callbacks
// manejo de archivos promesas
// manejo de datos complejos
// activity

// File System: Manejador de Archivos que viene en NODE JS
// REaliza operaciones de escritura, lectura actualizado y borrado de archivos ( CRUD )
// 1- Primer Paso
const fs = require("fs");
// // console.log(typeof fs);
// // a) Forma sincronica
// const ruta = "./ejemplo-sin.txt" ;
// // Crear Archivo
// fs.writeFileSync("./ejemplo-sin.txt", "Hola estamos trabajando en un ejemplo sincronico");
// // Primer parametro el path, segundo la data

// // leer un archivo
// let contenido = fs.readFileSync(ruta,"utf-8" );
// console.log(contenido);

// // Podemos verificar si el archivo existe antes de leerlo
// if(fs.existsSync("./algorandom.txt")){
//     let respuesta = fs.readFileSync("./algorandom.txt", "uft-8");
//     console.log(respuesta);
// } else {
//     console.log("Eto no ta");
// }

// // Actualizar contenido
// fs.writeFileSync(ruta, "hola actualizao");

// // Agregamos mas Info al Final
// fs.appendFileSync(ruta, "Aca se agrega algo sres.")

// fs.unlinkSync(ruta);

// // Trabajar con Callbacks

// const rutaCallback = "./ejemplo-call.txt";
// fs.writeFile(rutaCallback, "Nuevo Archivo, ahora con Callbacks", (error) =>{
//     if (error) return console.log("no hay archivo nuevo creado");
//     // leemos el archivo
//     fs.readFile(rutaCallback, "utf-8", (error, contenido)=>{
//         // Aca el Callbac con 2 parametros, error y content
//         if (error) return console.log("no hay archivo pa leer")
//             console.log(contenido);

//     // mas info
//     fs.appendFile(rutaCallback, "y ahora a comer", (error)=>{
//         if (error) return console.log ("no pudimos agregar contenido");
//     // Pa borrar
//     fs.unlink(rutaCallback, (error) => {
//         if (error) return console.log("No se pudo borrar");
//     })    })
//     })
// })

// // Trabajamos con Promesas
// const rutaPromesas = ".Txt-pro.txt";
// const operacionesAsicronicas = async () =>{
//     // creamos archivos
//     await fs.promises.writeFile(rutaPromesas, "Nuevo Archivo con Promises");
//     // leer un archivo:
//     let respuesta = await fs.promises.readFile(rutaPromesas, "utf-8");
//     console.log(respuesta);
//     // agregar contenido adicional
//     await fs.promises.appendFile(rutaPromesas, " agregamos este texto");
//     // releer
//     respuesta = await fs.promises.readFile(rutaPromesas, "utf-8");
//     console.log(respuesta);
//     // Lo eliminamos
//     await fs.promises.unlink(rutaPromesas);
// }
// // llamar la funcion
// operacionesAsicronicas();
// // Funciones de Ejemplo
// // Leer
// const leerArchivo = async (ruta) => {
//     let resultado = await fs.promises.readFile(ruta, "utf-8");
//     return resultado;
// }
// // guardar
// const guardarArchivo = async (ruta, data) => {
//     await fs.promises.writeFile(ruta, data);
// }

// Manejo de Datos Complejos:

const TortugasNinja = [
    {nombre: "rafael", Edad: 12, gustos: "algunos"},
    {nombre: "miguel angel", Edad: 12, gustos: "algunos muchos"},
    {nombre: "leonardo", Edad: 12, gustos: "algunos pocos"},
    {nombre: "donatello", Edad: 12, gustos: "algunos varios"},
]

const archivoTortugas = "./archivo-tortugas.json";

const guardarTortugas = async () => {
    await fs.promises.writeFile(archivoTortugas, JSON.stringify(TortugasNinja, null, 2));
}

guardarTortugas();

// Recuperamos archivos

const leemosTortugas = async() => {
    let resultado = await fs.promises.readFile(archivoTortugas, "utf-8");
    const arrayFinaltortugas = JSON.parse(resultado);
    console.log(arrayFinaltortugas);
}

leemosTortugas();
