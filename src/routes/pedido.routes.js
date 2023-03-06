import { request, response, Router } from "express";
import { method as PedidoController } from "./../controllers/pedidos.controller";
const router= Router();

router.post("/",PedidoController.addAllPedidos)
router.get("/",PedidoController.getAllPedidos)

export default router;