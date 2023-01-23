import express  from "express";
import morgan from "morgan";
import cors from "cors"
//Router
import languagesRoutes from "./routes/language.routes";
import registroRouter from "./routes/registro.routes";
import loginRouter from "./routes/login.routes";
import tipoDocumentoRouter from "./routes/tipo.documento.routes"

const app=express();

//Settings
app.set("port",4000);

//Middelware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//Routes 
app.use("/api/languages",languagesRoutes),
app.use("/api/registro",registroRouter),
app.use("/api/login",loginRouter),
app.use("/api/tipodocumento",tipoDocumentoRouter)
export default app;