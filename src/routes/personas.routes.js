import { request, response, Router } from "express";
import { method as personaController } from "./../controllers/personas.controller";
const router= Router();

router.post("/",personaController.addPersonas),
router.get("/",personaController.getAllPersonas)


export default router;