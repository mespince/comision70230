//6 Servidores Web

// Que es un servidor?
// Protocolo HTTP
// Modulo NAtivo HHTP
// Express JS
// Objeto Request
// Tarea para el hogar

// Servidor:
// Software o Hardware que almacena recurso. Responde a las peticiones de los clientes.

// Cliente = request (req)
// Servidor = response (res)

// HTTP = Protocolo de Transferencia de HiperTexto

// Modulo Nativo HTTP: Por defect en Node .JS
// Crea y envia un servidor por protocolol HTTP

// Primer paso: Importacion.

// const http = require("http");

// // Segundo paso: Crear el Servidor.
// // Se usa el etodo createserver() del moduulo http. 
// const server = http.createServer((request, response) =>{
//     // Cuerpo de la funcion. Esto se ejecuta en cada peticion
//     response.end("Hola");
// })

// // Tercer Paso: vamos a poner a escuchar nuestro server en un peurto de la PC

// const PUERTO = 8080;
// server.listen(PUERTO, ()=>{
//     console.log(`Estamos escuchando en http://localhost:${PUERTO}`);
// })


// Express JS:
// Crea servidores 
// Framework minimalista de NodeJS, perite crear servidores web de forma mas sencilla
// 1) Isntalar: npm i express
// 2) Paso:
const express = require("express");
// 3) paso:
const app = express();
// 4) paso: crea una ruta
app.get("/saludo", (req, res)=>{
    res.send("Mi Primer Servidor con Express, que felicidad");
})

// 5) paso: ponemos a escuchar el servidor con listen 
app.listen(8080, ()=>{
    console.log(`Escuchando en el puerto 8080 con express`)
})

// Metodos HTTP o verbos son los que permiten indicar al servidor
// Mas usados:
// Get: me permite solicitar datos al server
// post: se usa para enviar datos al server
// put: me sirve para actualizar datos del server
// delete: borra datos del server

const misProductos = [
    {id: 1, nombre: "Teclado", precio: 150},
        {id: 2, nombre: "Mouse", precio: 150},
        {id: 3, nombre: "Monitor", precio: 150},
        {id: 4, nombre: "Gabinete", precio: 150},
        {id: 5, nombre: "CPU", precio: 150},
]

app.get("/productos", (req, res)=>{
    // res.send("esta es la seccion Productos");
    res.json(misProductos);
})

app.get("/contactos", (req, res)=>{
    res.send("esta es la seccion Contactos");
})

app.get("/", (req, res)=>{
    res.send("HOME de la app")
})

// req.paras = request es un objeto que contiene parametros de la ruta.
// params = es una propiedad que almacena una variable dinamica que se me puede enviar por la ruta

// Vammos a crear una ruta que e retorna un producto particular por su ID:

app.get("/productos/:id", (req, res)=>{
    // Teneos que crear un paraetro dinaico(ejeplo :id :cliente)
    let idProducto = parseINT(req.params.id);
    // Todo dato que yo recupero de los paras es un String
    let producto =misProductos.find(producto => producto.id == idProducto);
    if(producto){
        res.send(producto);
    } else {
        res.send("Producto no encontrado, vaos a morir")
    }
})

// req.query: query se refiere a las multiples consultas que se pueden hacer a un deterinado endpoint. sipleente teneos que colocar el sibolo de interrogacion (?) y luego el nobre de la consulta.

app.get("/clientes", (req, res)=>{
    // let nombre = req.query.nobre;
    // let apellido = req.query.apellido
    let {nombre, apellido} = req.query;
    res.send (`Bienvenido ${nombre} - ${apellido}`)
})


