const queries = {
    getAllProducts : 'select * from info_productos',
    addNewProduct:
    "INSERT INTO [comiclandia].[dbo].[info_productos] (nombre, cantidad, valor, idPedido) VALUES (@nombre,@cantidad,@valor,@pedido);",
}