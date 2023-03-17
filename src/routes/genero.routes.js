import { request, response, Router } from "express";
import { method as generoController } from "./../controllers/genero.controller";
const router= Router();

router.get("/",generoController.getAllGeneros)


export default router;