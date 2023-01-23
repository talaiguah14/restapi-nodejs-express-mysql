import { request, response, Router } from "express";
import { method as TipoDocumentoController  } from "../controllers/tipo.documento.controller";

const router= Router();

router.get("/",TipoDocumentoController.getTipoDocumento)

export default router;