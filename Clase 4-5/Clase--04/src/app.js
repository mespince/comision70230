// **Clase 4 - NPM Y NODE JS **

// tEMA DE HOY:
// -NODE js
// Proyecto con MP
// Modulos
// Instalaciones Globales y locales
// Versionado de dependencias
// Politicas para Actualizar Dependencias

// Que es un Modulo?
// Archivo de JS que contiene conjunto de funciones que nos permite resolver una tarea en aprticular

// podemos trabajar Backend de 3 formas cn Modulos:

// 1) Modulos escritos por nosotros mismos

// Importar con Common JS:

// const saludos = require ("./saludos.js");

// saludos.temprano();
// saludos.tarde();
// saludos.noche();


// Iportar con ES Modules:
import { temprano, tarde, noche } from "./saludos.js";
temprano();
tarde();
noche();
// Hay que agregar "type": "module", en el package.json 


// Modulos Nativos de Node JS
// Modulos que ya vienen por def. con NODE JS

// Algunos conocidos

// fs: para trabajar con sistema de archivos
// http: para crear un servidor web
// path: para las rutas de archivos
// crypto: para trabajar con encriptacion de datos.
// timers: para trabajar con tareas asincronicas
// console: para mostrar mensajes en la consola

// Modulos de Terceros
// Desde la web de NPM hay modulos y paquetes
// http://npmjs.com

// Buscar Express
// instalar npm i express
// desintalar np u express
// version especifica npm install express@4.0.0
// ultima version npm install express@latest
// dependencia de desarrollo npm i nodemon -D
// Aquellas q solo necesitamos para desarrollar nuestra aplicacion

