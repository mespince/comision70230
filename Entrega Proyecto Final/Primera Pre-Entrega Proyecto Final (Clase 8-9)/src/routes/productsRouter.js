// src/routes/productsRouter.js
const express = require('express');
const ProductManager = require('../managers/productManager');

const router = express.Router();
const productManager = new ProductManager();

// GET /api/products/ - Obtiene todos los productos
router.get('/', (req, res) => {
    res.json(productManager.getAllProducts());
});

// GET /api/products/:pid - Obtiene un producto por su ID
router.get('/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

// POST /api/products/ - Agrega un nuevo producto
router.post('/', (req, res) => {
    const { title, description, code, price, stock, category, thumbnails } = req.body;
    if (!title || !description || !code || !price || !stock || !category || !thumbnails) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    const newProduct = productManager.addProduct({ title, description, code, price, stock, category, thumbnails });
    res.status(201).json(newProduct);
});

// PUT /api/products/:pid - Actualiza un producto
router.put('/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);
    const updatedProduct = productManager.updateProduct(productId, req.body);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

// DELETE /api/products/:pid - Elimina un producto
router.delete('/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);
    const result = productManager.deleteProduct(productId);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

module.exports = router;
