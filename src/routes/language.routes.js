 import { request, response, Router } from "express";
 import { method as languageController } from "./../controllers/language.controller";
 import { method as registroController  } from "./../controllers/registro.controller";
 const router= Router();

 router.get("/",languageController.getLanguages)
 router.get("/:id",languageController.getLanguage)
 router.post("/",registroController.addRegisto)
 router.put("/:id",languageController.updateLanguage)
 router.delete("/:id",languageController.deleteLanguage)

 export default router;