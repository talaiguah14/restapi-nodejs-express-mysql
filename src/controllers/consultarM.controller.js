import {getConnection,sql} from './../database'


const getTotalM = async (req,res) =>{
    try {
        const connection = await getConnection();
        await connection.request()
        .execute('uspConsultarMujeres').then(result => {
            res.json(result.recordsets[0])
        }).catch(err => {
            res.status(409).json({message:err.message});
        });
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const method = {
    getTotalM,
  };