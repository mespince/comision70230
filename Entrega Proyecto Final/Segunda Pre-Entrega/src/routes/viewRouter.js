const express = require('express');
const ProductManager = require('../managers/productManager');

module.exports = function(io) {
    const router = express.Router();
    const productManager = new ProductManager();

    router.get('/home', (req, res) => {
        const products = productManager.getAllProducts();
        res.render('home', { products });
    });

    router.get('/realtimeproducts', (req, res) => {
        const products = productManager.getAllProducts();
        res.render('realTimeProducts', { products });
    });

    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');

        socket.on('addProduct', (data) => {
            const { title, description, code, price, status, stock, category, thumbnails } = data;

            if (!title || !description || !code || !price || stock === undefined || !category || !thumbnails) {
                socket.emit('error', { error: "Faltan datos papurri" });
                return;
            }

            const newProduct = productManager.addProduct({ title, description, code, price, status, stock, category, thumbnails });
            if (newProduct.error) {
                socket.emit('error', { error: newProduct.error });
                return;
            }

            io.emit('newProduct', newProduct);
        });

        socket.on('deleteProduct', (id) => {
            const productId = parseInt(id);
            const result = productManager.deleteProduct(productId);
            if (result.error) {
                socket.emit('error', { error: result.error });
                return;
            }

            io.emit('deleteProduct', { id: productId });
        });

        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });
    });

    return router;
};
