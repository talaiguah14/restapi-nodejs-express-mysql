import { request, response, Router } from "express";
import { method as consultaH } from "../controllers/consultarH.controller";
const router= Router();

router.get("/",consultaH.getTotalH)


export default router;