import { Router } from "express";
const router = Router();

import ProductManager from "../managers/product-manager.js";
const pathFile = "./src/data/products.json"
const manager = new ProductManager(pathFile);

router.get("/products", async (req, res) => {
    try {
        const products = await manager.getProducts();
        res.render("home", { products });
    } catch (error) {
        console.log("Error al obtener los productos: ", error.message);
        res.status(500).json({
            error: "El servidor encontró un problema al procesar la solicitud"
        });
    }
});

router.get("/realtimeproducts", (req, res) => {
    try {
        res.render("realtimeproducts"); 
    } catch (error) {
        console.log("Error al igresar a la gagina: ", error.message);
        res.status(500).json({
            error: "El servidor encontró un problema al procesar la solicitud"
        });
    }
});

export default router;