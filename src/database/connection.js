import sql from 'mssql';

const dbSetting = {
    user: 'sa',
    password:'123',
    server:'192.168.1.69',
    database:'comiclandia',
    port:56232,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
    options:{
        encrypt:true,
        trustServerCertificate:true,
    }
}
 async function getConnection(){

    try {
        const pool = await sql.connect( dbSetting);
        return pool;
    } catch (error) {
        console.error(error);
    }
    
    
}
module.exports={
    getConnection,
    sql
}

