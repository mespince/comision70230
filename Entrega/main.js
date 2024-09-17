class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1; 
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return { error: "Faltan datos papurri" }; 
        }

        const existingProduct = this.products.find(p => p.code === product.code);
        if (existingProduct) {
            return { error: "Pa, no te confundas de codigo plis" }; 
        }

        const newProduct = { 
            id: this.nextId,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock
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
                    reject("Esto no esta");
                }
            }, 2000); 
        });
    }
}

const manager = new ProductManager();

console.log(manager.addProduct({
    title: "Baldur's Gate 3",
    description: "GOTY",
    price: 34.99,
    thumbnail: "ruta/bg3.jpg",
    code: "PROD001",
    stock: 15
}));

console.log(manager.addProduct({
    title: "DLC - Digital Deluxe Edition",
    description: "Cosméticos xD",
    price: 5.49,
    thumbnail: "ruta/DDE.jpg",
    code: "PROD002",
    stock: 50
}));

console.log(manager.addProduct({
    title: "DLC - Toolkit Data",
    description: "Pa'cer Mods",
    price: 0,
    thumbnail: "ruta/TD.jpg",
    code: "PROD001", 
    stock: 20
}));

console.log("Todos los productos:", manager.getProducts());

manager.getProductById(1)
    .then(product => console.log("Producto encontrado:", product))
    .catch(error => console.error("Error:", error));

manager.getProductById(99)
    .then(product => console.log("Producto encontrado:", product))
    .catch(error => console.error("Error:", error));

/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////



