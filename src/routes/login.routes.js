import { request, response, Router } from "express";
import { method as loginController  } from "./../controllers/login.contoller";

const router= Router();

router.post("/",loginController.addLogin)

export default router;