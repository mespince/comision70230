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

app.post("/clientes", (req, res) => {
    const nuevoCliente = req.body; 

    clientes.push(nuevoCliente);
    console.log(clientes);
    res.status(201).send("Cliente creado!");
})


app.put("/clientes/:id", (req, res) => {
    let {id} = req.params;
    let {nombre, apellido} = req.body; 

    let indiceCliente = clientes.findIndex(cliente => cliente.id === id); 

    if(indiceCliente !== -1) {
        clientes[indiceCliente].nombre = nombre;
        clientes[indiceCliente].apellido = apellido; 

        console.log(clientes);
        res.send("Cliente actualizado")
    } else {
        res.status(404).send("Cliente no encontrado"); 
    }
    
})


app.delete("/clientes/:id", (req, res) => {
    let {id} = req.params; 

    let indiceCliente = clientes.findIndex(cliente => cliente.id === id); 

    if(indiceCliente !== -1) {
        clientes.splice(indiceCliente, 1);

        console.log(clientes);
        res.send("Cliente Eliminado")
    } else {
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

