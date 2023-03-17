import {getConnection,sql} from './../database'


const getAllGeneros = async (req,res) =>{
    try {
        const connection = await getConnection();
        const resultDtosUsuario = await connection.request().query("select * from db_generos");
        res.json(resultDtosUsuario.recordsets[0])
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const method = {
    getAllGeneros,
  };