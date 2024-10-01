const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const exphbs = require('express-handlebars');
const path = require('path');

const productsRouter = require('./routes/productsRouter');
const cartsRouter = require('./routes/cartsRouter');
const viewsRouter = require('./routes/viewsRouter');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productsRouter(io));
app.use('/api/carts', cartsRouter(io));
app.use('/', viewsRouter(io));


app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});


const PORT = 8080;
httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
