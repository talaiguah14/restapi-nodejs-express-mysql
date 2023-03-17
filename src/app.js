import express  from "express";
import morgan from "morgan";
import cors from "cors"
//Router
import languagesRoutes from "./routes/language.routes";
import registroRouter from "./routes/registro.routes";
import loginRouter from "./routes/login.routes";
import tipoDocumentoRouter from "./routes/tipo.documento.routes";
import productoRouter from "./routes/producto.routes";
import pedidoRouter from "./routes/pedido.routes";
import personasRouter from "./routes/personas.routes"
import generoRouter from "./routes/genero.routes"
import consultaM from "./routes/consultarM.routes"
import consultaH from "./routes/consultarH.routes"
import consultaMayor from "./routes/consultarMayor.routes"
import consultaPromedio from "./routes/consultarPromedio.routes"

const app=express();

//Settings
app.set( "PORT",process.env.PORT || 4000)

//Middelware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//Routes 
app.use("/api/languages",languagesRoutes),
app.use("/api/registro",registroRouter),
app.use("/api/login",loginRouter),
app.use("/api/tipodocumento",tipoDocumentoRouter),
app.use ("/api/producto",productoRouter),
app.use ("/api/pedidos",pedidoRouter),
app.use ("/api/personas",personasRouter),
app.use ("/api/consultarGeneros",generoRouter),
app.use ("/api/consultarPersonas",personasRouter),
app.use ("/api/consultarM",consultaM)
app.use ("/api/consultarH",consultaH)
app.use ("/api/consultarMayor",consultaMayor)
app.use ("/api/consultarPromedio",consultaPromedio)

export default app;