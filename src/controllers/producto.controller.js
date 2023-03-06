import {getConnection,sql} from './../database'


const getAllProductos = async (req,res) =>{
    const connection = await getConnection();
    const resultDtosUsuario = await connection.request().query("select * from info_pedidos");
    res.json(resultDtosUsuario)
}

const addProducto = async (req, res) =>{
    try {
        const {nombreProducto,cantidadProducto,valorProducto,idPedido} = req.body;
        if(nombreProducto === undefined || cantidadProducto === undefined || valorProducto === undefined || idPedido === undefined)
        {
            res.status(400).json({ message: "Bad request,Please fill al fields." });
        }

        const connection = await getConnection();
        const resultDtosUsuario = await connection.request()
        .input('vrcNombreProducto',nombreProducto)
        .input('intCantidadProducto',cantidadProducto)
        .input('mnyvalorProducto',valorProducto)
        .input('intIdPedido',idPedido)
        .execute('uspInsertProcuto').then(result => {
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
    addProducto,
    getAllProductos
  };