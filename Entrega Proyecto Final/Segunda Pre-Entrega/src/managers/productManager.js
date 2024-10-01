const fs = require('fs');
const path = require('path');

class ProductManager {
    constructor() {
        this.path = path.join(__dirname, '../../data/products.json');
        this.products = [];
        this.init();
    }

    init() {
        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf-8');
            try {
                this.products = data.trim() ? JSON.parse(data) : [];
            } catch (error) {
                console.error('Error al parsear products.json:', error);
                this.products = [];
            }
        } else {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        }
    }

    saveProducts() {
        fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2));
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    addProduct({ title, description, code, price, status, stock, category, thumbnails }) {
        if (this.products.some(product => product.code === code)) {
            return { error: "ERROR PAPURRI REPETIMO EL CODIGO QUE PASO?" };
        }

        const newProduct = {
            id: this.products.length ? this.products[this.products.length - 1].id + 1 : 1,
            title,
            description,
            code,
            price,
            status: status !== undefined ? status : true,
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
            // No permitir actualizar el id
            const { id: _, ...fieldsToUpdate } = updatedFields;
            Object.assign(product, fieldsToUpdate);
            this.saveProducts();
            return product;
        }
        return { error: "Producto no encontrado" };
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.saveProducts();
            return true;
        }
        return { error: "Producto no encontrado" };
    }
}

module.exports = ProductManager;
