const express = require('express');
const ProductManager = require('../managers/productManager');

module.exports = function(io) {
    const router = express.Router();
    const productManager = new ProductManager();

    router.get('/', (req, res) => {
        const products = productManager.getAllProducts();
        res.json({ products });
    });

    router.get('/:pid', (req, res) => {
        const productId = parseInt(req.params.pid);
        const product = productManager.getProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: "Producto no encontrado" });
        }
    });

    router.post('/', (req, res) => {
        const { title, description, code, price, status, stock, category, thumbnails } = req.body;
        if (!title || !description || !code || !price || stock === undefined || !category || !thumbnails) {
            return res.status(400).json({ error: "Faltan datos papurri" });
        }

        const newProduct = productManager.addProduct({ title, description, code, price, status, stock, category, thumbnails });
        if (newProduct.error) {
            return res.status(400).json({ error: newProduct.error });
        }

        io.emit('newProduct', newProduct);

        res.status(201).json(newProduct);
    });

    router.put('/:pid', (req, res) => {
        const productId = parseInt(req.params.pid);
        const updatedFields = req.body;

        if (updatedFields.id) {
            delete updatedFields.id;
        }

        const updatedProduct = productManager.updateProduct(productId, updatedFields);
        if (updatedProduct.error) {
            return res.status(404).json({ error: updatedProduct.error });
        }

        io.emit('updateProduct', updatedProduct);

        res.json(updatedProduct);
    });

    router.delete('/:pid', (req, res) => {
        const productId = parseInt(req.params.pid);
        const result = productManager.deleteProduct(productId);
        if (result.error) {
            return res.status(404).json({ error: result.error });
        }

        io.emit('deleteProduct', { id: productId });

        res.status(204).send();
    });

    return router;
};
