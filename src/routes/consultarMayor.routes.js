import { request, response, Router } from "express";
import { method as consultaMayor } from "../controllers/consultarMayor.controller";
const router= Router();

router.get("/",consultaMayor.getMayor)


export default router;