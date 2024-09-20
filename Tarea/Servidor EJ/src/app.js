
const express = require('express');
const ProductManager = require('./productManager');

const app = express();
const PUERTO = 8080;
const manager = new ProductManager();

app.get('/products', (req, res) => {
    const products = manager.getProducts();
    res.json(products);
});

app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);

    manager.getProductById(productId)
        .then(product => res.json(product))
        .catch(error => res.status(404).json({ error }));
});

manager.addProduct("Producto Prueba", "Esto es una prueba", 200, "sin imagen", "abc123", 25);
manager.addProduct("Baldur's Gate 3", "GOTY", 34.99, "ruta/bg3.jpg", "PROD001", 15);
manager.addProduct("DLC - Digital Deluxe Edition", "Cosméticos xD", 5.49, "ruta/DDE.jpg", "PROD002", 50);
manager.addProduct("DLC - Toolkit Data", "Pa'cer Mods", 0, "ruta/TD.jpg", "PROD003", 20);

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});


// Esto iniciará tu servidor en http://localhost:8080.

// Obtener todos los productos: http://localhost:8080/products
// Obtener un producto por ID: http://localhost:8080/products/1 