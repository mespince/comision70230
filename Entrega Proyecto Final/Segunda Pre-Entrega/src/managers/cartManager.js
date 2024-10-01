const fs = require('fs');
const path = require('path');

class CartManager {
    constructor() {
        this.path = path.join(__dirname, '../../data/carts.json');
        this.carts = [];
        this.init();
    }

    init() {
        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf-8');
            try {
                this.carts = data.trim() ? JSON.parse(data) : [];
            } catch (error) {
                console.error('Error al parsear carts.json:', error);
                this.carts = [];
            }
        } else {
            fs.writeFileSync(this.path, JSON.stringify(this.carts));
        }
    }

    saveCarts() {
        fs.writeFileSync(this.path, JSON.stringify(this.carts, null, 2));
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
        return { error: "Carrito no encontrado" };
    }
}

module.exports = CartManager;
