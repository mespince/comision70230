/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1; 
    }

    addProduct(title, description, price, img, code, stock) {
        if (!title || !description || !price || !img || !code || !stock) {
            return { error: "Faltan datos papurri" }; 
        }

        if(this.products.some(item => item.code === code)){
        console.log("ERROR PAPURRI REPETIMO EL CODIGO QUE PASO?");
        return;
        }

        const newProduct = { 
            id: this.nextId,
            title: title,
            description: description,
            price: price,
            img: img,
            code: code,
            stock: stock
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

const manager = new ProductManager();

manager.addProduct("Producto Prueba", "Esto es una prueba", 200, "sin imagen", "abc123", 25);

console.log("Todos los productos:", manager.getProducts());

manager.addProduct("Producto Prueba", "Esto es una prueba", 200, "sin imagen", "abc123", 25);
manager.addProduct( "Baldur's Gate 3", "GOTY", 34.99, "ruta/bg3.jpg", "PROD001", 15);
manager.addProduct( "DLC - Digital Deluxe Edition", "Cosméticos xD", 5.49, "ruta/DDE.jpg", "PROD002",50);
manager.addProduct( "DLC - Toolkit Data","Pa'cer Mods", 0, "ruta/TD.jpg","PROD003", 20);

manager.getProductById(1)
    .then(product => console.log("Producto encontrado:", product))
    .catch(error => console.error("Error:", error));

manager.getProductById(99)
    .then(product => console.log("Producto encontrado:", product))
    .catch(error => console.error("Error:", error));
    
console.log("Todos los productos:", manager.getProducts());

/////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////
