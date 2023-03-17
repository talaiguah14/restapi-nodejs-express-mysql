import { request, response, Router } from "express";
import { method as consultaPromedio } from "../controllers/consultarPromedio.controller";
const router= Router();

router.get("/",consultaPromedio.getPromedio)


export default router;