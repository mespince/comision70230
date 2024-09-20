// src/routes/cartsRouter.js
const express = require('express');
const CartManager = require('../managers/cartManager');

const router = express.Router();
const cartManager = new CartManager();

// POST /api/carts/ - Crea un nuevo carrito
router.post('/', (req, res) => {
    const newCart = cartManager.createCart();
    res.status(201).json(newCart);
});

// GET /api/carts/:cid - Obtiene un carrito por ID
router.get('/:cid', (req, res) => {
    const cartId = parseInt(req.params.cid);
    const cart = cartManager.getCartById(cartId);
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ error: "Carrito no encontrado" });
    }
});

// POST /api/carts/:cid/product/:pid - Agrega un producto a un carrito
router.post('/:cid/product/:pid', (req, res) => {
    const cartId = parseInt(req.params.cid);
    const productId = parseInt(req.params.pid);
    const updatedCart = cartManager.addProductToCart(cartId, productId);
    if (updatedCart) {
        res.json(updatedCart);
    } else {
        res.status(404).json({ error: "Carrito no encontrado" });
    }
});

module.exports = router;
