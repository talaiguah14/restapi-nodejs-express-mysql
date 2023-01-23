import { getConnection } from "../database/database";

const getTipoDocumento = async (req,res) =>{
    try {
        const connection = await getConnection();
        const resultDtosTipoDocumento = await connection.query("SELECT * FROM db_tipos_documentos");
        res.json(resultDtosTipoDocumento)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const method = {
    getTipoDocumento,
};