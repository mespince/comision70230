
import express from "express"; 
import { engine } from "express-handlebars";
const app = express(); 
const PUERTO = 8080; 

app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

app.use(express.json());
app.use(express.static("./src/public")); 

app.get("/", (req, res) => {
    res.render("index");
})

const httpServer = app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto 8080"); 
})


import { Server } from "socket.io";



const io = new Server(httpServer);

const usuarios = [
    {id: 1, nombre: "Lionel", apellido: "Messi"},
    {id: 2, nombre: "Cristiano", apellido: "Ronaldo"},
    {id: 3, nombre: "Neymar", apellido: "Junior"},
    {id: 4, nombre: "Pocho", apellido: "Lavezzi"},
]

io.on("connection", (socket) => {
    console.log("Un cliente se conecto conmigo");

    socket.on("mensaje", (data) => {
        console.log(data);
    })

    socket.emit("saludito", "Hola Cliente, ¿Como estas? "); 

    socket.emit("usuarios", usuarios);

})