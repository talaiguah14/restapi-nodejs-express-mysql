import { request, response, Router } from "express";
import { method as productoController } from "./../controllers/producto.controller";
const router= Router();

router.post("/",productoController.addProducto)
router.get("/",productoController.getAllProductos)

export default router;