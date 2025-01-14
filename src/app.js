// Imports
import { engine } from "express-handlebars"; 
import __dirname from "./utils.js";
import express from "express"; 
import productsRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js";
import { Server } from "socket.io";
import viewsRoutes from "./routes/views.routes.js"
import ProductManager from "./managers/product-manager.js";

// Config server
const app = express(); 
const PORT = 8080; 

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`)) 

// Set Views
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//Routes
// app.use("/api/products", productsRouter);
// app.use("/api/cart",cartRouter);

// Routes
app.use("/", viewsRoutes);

// ESCUCHANDO EL PUERTO
//WEBSOCKET
const httpServer = app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});

const io = new Server(httpServer);

const pathFile = "./src/data/products.json"
const manager = new ProductManager(pathFile);

io.on("connection", async (socket) => {
    console.log("Un cliente se conecto");

    socket.emit("products", await manager.getProducts());

    //Add products
    socket.on("addProduct", async (product) => {
        await manager.addProduct(product);
        io.sockets.emit("products", await manager.getProducts());
    });

    // Delete product
    socket.on("deleteProduct", async (id) => {
        console.log(`El id es: ${id}`);
        await manager.deleteProduct(id);
        io.sockets.emit("products", await manager.getProducts());
    });

});