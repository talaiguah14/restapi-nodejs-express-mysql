import { json } from 'express';
import {getConnection,sql} from './../database'

const getAllPedidos = async (req,res) =>{
    const connection = await getConnection();
    const resultDtosUsuario = await connection.request().query("select * from info_pedidos");
    res.json(resultDtosUsuario)
}

const getPedido = async (req,res) =>{
    const {id}=req.params;
    const connection = await getConnection();
    const resultDtosUsuario = await connection.request().query("select * from info_pedidos where id_pedido =?",id);
    res.json(resultDtosUsuario)
}

const addAllPedidos = async (req, res) =>{
    try {
        const {nombrePedido,cedulaPedido,dereccionPedido} = req.body;
        if(nombrePedido === undefined || cedulaPedido === undefined || dereccionPedido === undefined)
        {
            res.status(400).json({ message: "Bad request,Please fill al fields." });
        }

        const connection = await getConnection();
        await connection.request()
        .input('vrcNombrePedido',nombrePedido)
        .input('vrcNumeroDocumento',cedulaPedido)
        .input('vrcDireccion',dereccionPedido)
        .execute('uspInsertPedido').then(result => {
            const idPedido = result.recordset[0].id_pedido
            res.status(200).json({status:200,idPedido})
        }).catch(err => {
            res.status(409).json({message:err.message});
        });
       
    } catch (error) {
        res.status(500);
    }
}

export const method = {
    addAllPedidos,
    getPedido,
    getAllPedidos
  };