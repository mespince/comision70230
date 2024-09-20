// src/app.js
const express = require('express');
const productsRouter = require('./routes/productsRouter');
const cartsRouter = require('./routes/cartsRouter');

const app = express();
const port = 8080;

// Middleware para parsear JSON
app.use(express.json());

// Configurar las rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// // // // Desde POSTMAN
// GET /api/products para obtener todos los productos.
// POST /api/products para agregar un producto.
// PUT /api/products/:pid para actualizar un producto.
// DELETE /api/products/:pid para eliminar un producto.
// POST /api/carts para crear un carrito.
// GET /api/carts/:cid para obtener los productos de un carrito.
// POST /api/carts/:cid/product/:pid para agregar un producto a un carrito.