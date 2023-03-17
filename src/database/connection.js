import config  from "./../config";
import sql from 'mssql';

const dbSetting = {
    user: config.dbUserSql,
    password: config.dbPasswordSql,
    server: config.dbHostSql,
    database: config.dbNameSql,
    port: parseInt(config.dbPortSql,10),
    authentication: {
        type: 'default'
    },
    options:{
        encrypt: true
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

