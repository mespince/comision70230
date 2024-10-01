const express = require('express');
const CartManager = require('../managers/cartManager');
const ProductManager = require('../managers/productManager');

module.exports = function(io) {
    const router = express.Router();
    const cartManager = new CartManager();
    const productManager = new ProductManager();

    router.post('/', (req, res) => {
        const newCart = cartManager.createCart();
        res.status(201).json(newCart);
    });

    router.get('/:cid', (req, res) => {
        const cartId = parseInt(req.params.cid);
        const cart = cartManager.getCartById(cartId);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ error: "Carrito no encontrado" });
        }
    });

    router.post('/:cid/product/:pid', (req, res) => {
        const cartId = parseInt(req.params.cid);
        const productId = parseInt(req.params.pid);

        const product = productManager.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        const updatedCart = cartManager.addProductToCart(cartId, productId);
        if (updatedCart.error) {
            return res.status(404).json({ error: updatedCart.error });
        }

        io.emit('updateCart', updatedCart);

        res.json(updatedCart);
    });

    return router;
};
