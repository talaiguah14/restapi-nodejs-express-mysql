import { request, response, Router } from "express";
import { method as registroController  } from "./../controllers/registro.controller";

const router= Router();

router.get("/",registroController.getRegistro)
router.post("/",registroController.addRegisto)

export default router;