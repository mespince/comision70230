// Clase Express Avanzado

// Temas
// Codigos de Estado
// APÏs
// API Rest
// Metodos de Peticion
// POSTMAN
// Practicar GET - POST - PUT - DELETE

// ABM: Alta Baja Modificacion 
// CRUD: Create Read Update Delete

// CODIGO DE ESTADO
// 100: Informativo
// 200: Afirmativo
// 300: Redireccion
// 400: Error del Cliente
// 500: Error del Servidor

// API
// Reglas para q dos equipos trabajen juntos.
// Iniciamos un Servidor:
// con Comon JS:
// const express = require("express");

// con ES Modules
import express from "express";
const app = express();
const PUERTO = 8080; 

// Dos herramientas adicionales que e premiten trabajar con forato JSON y con multiples consultas
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// Rutas
const clientes = [
    {id: 2, nombre: "Rafael", Raza: "Tortuga"},
    {id: 1, nombre: "Leonardo", Raza: "Tortuga"},
    {id: 4, nombre: "Miguelangelo", Raza: "Tortuga"},
    {id: 3, nombre: "Donatello", Raza: "Tortuga"},
    {id: 5, nombre: "Splinter", Raza: "Rata"},
]

app.get("/clientes", (req, res) => {
    res.send(clientes);
})

//Esta ruta me retorna 1 solo por id: 

app.get("/clientes/:id", (req, res) => {
    let {id} = req.params;

    const clienteBuscado = clientes.find(cliente => cliente.id === id); 

    if (clienteBuscado) {
        res.send(clienteBuscado);
    } else {
        res.send("No se encuentra cliente con ese ID");
    }
})
//Post nuevo cliente

app.post("/clientes", (req, res) => {
    const nuevoCliente = req.body; 

    clientes.push(nuevoCliente);
    console.log(clientes);
    res.status(201).send("Cliente creado!");
})

//La ruta PUT /:id deberá tomar un cliente y actualizarlo por los campos enviados desde el body. Nunca se debe actualizar o eliminar un ID. 

app.put("/clientes/:id", (req, res) => {
    //tengo que recuperar el id del cliente que viene de params
    //tengo que recuperar el nombre y apellido actualizados que viene del body
    let {id} = req.params;
    let {nombre, apellido} = req.body; 

    //Vamos a buscar el indice de un cliente determinado: 
    let indiceCliente = clientes.findIndex(cliente => cliente.id === id); 
    //indiceCliente solo guarda el indice del cliente buscado (ejemplo: 0, 4, 3); 

    if(indiceCliente !== -1) {
        //Esto quiere decir que el cliente existe y que lo encontre!
        clientes[indiceCliente].nombre = nombre;
        clientes[indiceCliente].apellido = apellido; 

        console.log(clientes);
        res.send("Cliente actualizado")
    } else {
        //Si no lo encuentro, avisemos por mensaje
        res.status(404).send("Cliente no encontrado"); 
    }
    
})

//La ruta DELETE /:id deberá eliminar el cliente que pasemos por params

app.delete("/clientes/:id", (req, res) => {
    let {id} = req.params; 

    //Vamos a buscar el indice de un cliente determinado: 
    let indiceCliente = clientes.findIndex(cliente => cliente.id === id); 
    //indiceCliente solo guarda el indice del cliente buscado (ejemplo: 0, 4, 3); 

    if(indiceCliente !== -1) {
        //Esto quiere decir que el cliente existe y que lo encontre!
        //Si lo encuentro, lo elimino!
        clientes.splice(indiceCliente, 1);

        console.log(clientes);
        res.send("Cliente Eliminado")
    } else {
        //Si no lo encuentro, avisemos por mensaje
        res.status(404).send("Cliente no encontrado"); 
    }

})









// 
// 
// 
// 
// 

app.listen(PUERTO, ()=>{
    console.log(`Escuchando en el Puerto ${PUERTO}`);
})

