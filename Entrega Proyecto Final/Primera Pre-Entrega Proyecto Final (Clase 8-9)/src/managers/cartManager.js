// src/managers/cartManager.js
const fs = require('fs');
const path = './data/carts.json';

class CartManager {
    constructor() {
        this.carts = [];
        this.init();
    }

    init() {
        if (fs.existsSync(path)) {
            const data = fs.readFileSync(path, 'utf-8');
            this.carts = JSON.parse(data);
        } else {
            fs.writeFileSync(path, JSON.stringify(this.carts));
        }
    }

    saveCarts() {
        fs.writeFileSync(path, JSON.stringify(this.carts));
    }

    createCart() {
        const newCart = {
            id: this.carts.length ? this.carts[this.carts.length - 1].id + 1 : 1,
            products: []
        };
        this.carts.push(newCart);
        this.saveCarts();
        return newCart;
    }

    getCartById(id) {
        return this.carts.find(cart => cart.id === id);
    }

    addProductToCart(cartId, productId) {
        const cart = this.getCartById(cartId);
        if (cart) {
            const productInCart = cart.products.find(p => p.product === productId);
            if (productInCart) {
                productInCart.quantity += 1;
            } else {
                cart.products.push({ product: productId, quantity: 1 });
            }
            this.saveCarts();
            return cart;
        }
        return null;
    }
}

module.exports = CartManager;
