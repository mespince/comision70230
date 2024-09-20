// src/managers/productManager.js
const fs = require('fs');
const path = './data/products.json';

class ProductManager {
    constructor() {
        this.products = [];
        this.init();
    }

    init() {
        if (fs.existsSync(path)) {
            const data = fs.readFileSync(path, 'utf-8');
            this.products = JSON.parse(data);
        } else {
            fs.writeFileSync(path, JSON.stringify(this.products));
        }
    }

    saveProducts() {
        fs.writeFileSync(path, JSON.stringify(this.products));
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    addProduct({ title, description, code, price, stock, category, thumbnails }) {
        const newProduct = {
            id: this.products.length ? this.products[this.products.length - 1].id + 1 : 1,
            title,
            description,
            code,
            price,
            status: true,
            stock,
            category,
            thumbnails
        };
        this.products.push(newProduct);
        this.saveProducts();
        return newProduct;
    }

    updateProduct(id, updatedFields) {
        const product = this.getProductById(id);
        if (product) {
            Object.assign(product, updatedFields);
            this.saveProducts();
            return product;
        }
        return null;
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.saveProducts();
            return true;
        }
        return false;
    }
}

module.exports = ProductManager;
