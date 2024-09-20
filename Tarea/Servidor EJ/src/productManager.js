class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, img, code, stock) {
        if (!title || !description || !price || !img || !code || !stock) {
            return { error: "Faltan datos papurri" };
        }

        if (this.products.some(item => item.code === code)) {
            console.log("ERROR PAPURRI REPETIMO EL CODIGO QUE PASO?");
            return;
        }

        const newProduct = {
            id: this.nextId,
            title,
            description,
            price,
            img,
            code,
            stock,
        };

        this.nextId++;
        this.products.push(newProduct);

        return newProduct;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = this.products.find(p => p.id === id);
                if (product) {
                    resolve(product);
                } else {
                    reject("Esto no está");
                }
            }, 2000);
        });
    }
}

module.exports = ProductManager;
