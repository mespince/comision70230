//Clase 9 Motores de Plantilla
//Te generan HTML Dinamico.
//Instalamos express-hadlebars

import express from "express"
const app = express();
const PUERTO = 8080;

//m9iddleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
//donde estan los arch


//ruta
app.get,("/", (req, res) => {
    res.send("Hola, Madre estoy programando desde el BackEnd")
});



app.listen(PUERTO, () =>{
    console.log(`Escuchando en el puerto ${PUERTO}`);
});