import { getConnection } from "../database/database";
import Jwt  from "jsonwebtoken";

const getRegistro = async (req, res) => {
  try {
    const connection = await getConnection();
        const resultDtosUsuario = await connection.query("SELECT * FROM db_usuarios");
        res.json(resultDtosUsuario)
    } catch (error) {
        res.status(500).json({status:500,error});
  }
};

const addRegisto = async (req, res) => {
  try {

    const { nombres, apellidos, tipoDocumento, numero_documento, correo, telefono, usuario, password } = req.body;
    if (nombres === undefined || apellidos === undefined || tipoDocumento === undefined || numero_documento === undefined || correo === undefined || telefono === undefined
        || usuario === undefined || password === undefined) {
        res.status(400).json({ message: "Bad request,Please fill al fields." });
    }
    
    // `id_dato_usuario`, `nombres`, `apellidos`, `mail`, `telefono`, `cedula`, `id_tipo_documento
    const DatosUsuario = {
      nombres,
      apellidos,
      id_tipo_documento: tipoDocumento,
      numero_documento,
      mail: correo,
      telefono,
    };
    const connection = await getConnection();
    //insercion de los datos personales relacionados al usuario a la base de datos
    const validarUsuario = await connection.query("SELECT * FROM db_usuarios WHERE user=?",usuario);
    
    if (validarUsuario.length === 0) {
      const resultDtosUsuario = await connection.query("INSERT INTO db_datos_usuario  SET ?",DatosUsuario);
      // se obtiene el id Ingresado de los datos del usuario para establecer relacion con en usuario
      const idUsuarioRegistrado = resultDtosUsuario.insertId;
      //Se realiza insercion de las cedenciales del usuario en la base de datos
      const Credenciales = {
        user: usuario,
        password,
        status: "Activo",
        id_dato_usuario: idUsuarioRegistrado,
      };
      const accesToken = generateAccessToken(usuario);
       await connection.query("INSERT INTO db_usuarios SET ?",Credenciales);
      res.status(200).json({ status: 200, message:"Registro Exitoso",token:accesToken})
    } else if (validarUsuario.length > 0 ) {
      res.status(400).json({ status: 400 , message:"El usuario ya se encuentra registrado en la base de datos" });
    }
  } catch (error) {
    res.status(500);
  }
};

function generateAccessToken(user){
  return Jwt.sign(user,process.env.TOKEN_SECRET);
}

export const method = {
  addRegisto,
  getRegistro,
};
