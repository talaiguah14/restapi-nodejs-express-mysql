import {getConnection,sql} from './../database'

const getAllPersonas= async (req,res) =>{
    try {
        const connection = await getConnection();
        await connection.request()
        .execute('[uspConsultarPersonas]').then(result => {
            res.json(result.recordsets[0])
        }).catch(err => {
            res.status(409).json({message:err.message});
        });
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const addPersonas = async (req, res) =>{
    try {
        const {idTipoDocumento,numerodocumento,primerNombre,segundoNombre,primerApellido,
            segundoApellido,telefono,mail,direccion,edad,genero} = req.body;
        if(idTipoDocumento === undefined || numerodocumento === undefined || primerNombre === undefined 
            || primerApellido === undefined || direccion === undefined || edad === undefined 
            || genero === undefined || segundoApellido === undefined || telefono === undefined || mail === undefined || segundoNombre === undefined)
        {
            res.status(400).json({ message: "Bad request,Please fill al fields." });
        }

        const connection = await getConnection();
        await connection.request()
        .input('vrcPrimerNombre',primerNombre)
        .input('vrcSegundoNombre',segundoNombre)
        .input('vrcPrimerApellido',primerApellido)
        .input('vrcSegundoApellido',segundoApellido)
        .input('vrcMail',mail)
        .input('vrcTelefono',telefono)
        .input('vrcNumeroDocumento',numerodocumento)
        .input('intIdTipoIdentificacion',idTipoDocumento)
        .input('vrcDireccion',direccion)
        .input('intEdad',edad)
        .input('intGenero',genero)
        .execute('uspInsertDatos').then(result => {
            console.dir(result)
            res.status(200).json({status: 200,message:"Ingreso Exitoso"})
        }).catch(err => {
            res.status(409).json({message:err.message});
        });
       
    } catch (error) {
        res.status(500);
    }
}


export const method = {
    addPersonas,
    getAllPersonas
  };