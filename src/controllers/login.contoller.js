import { getConnection } from "../database/database";
import Jwt  from "jsonwebtoken";

const addLogin = async(req,res) => {
    try {
        
        const {user,password}=req.body;
        if(user === undefined || password === undefined){
            res.status(200).json({ status:400, message: "Bad request,Please fill all fields." });
        }
        const status = "Activo"
        const connection = await getConnection();
        const resultDtosCredenciales = await connection.query("SELECT id_usuario FROM db_usuarios WHERE user = ? AND password = ? AND status = ?",[user,password,status]);
        if (resultDtosCredenciales.length >0){
            const accesToken = generateAccessToken(user)
            res.status(200).json({status:200,message:'Usuario autenticado',token:accesToken})
        }
        else{
            res.status(400).json({status:400,message : "Inicio de sesion fallido,por favor intente nuevamente"})
        }

    } catch (error) {
        res.status(500);

    }
};

function generateAccessToken(user){
    return Jwt.sign(user,process.env.TOKEN_SECRET);
}

function validateToken(res,req){
    const accesToken =""
}

export const method = {
    addLogin
};
