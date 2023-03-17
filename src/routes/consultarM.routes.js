import { request, response, Router } from "express";
import { method as consultaM } from "./../controllers/consultarM.controller";
const router= Router();

router.get("/",consultaM.getTotalM)


export default router;