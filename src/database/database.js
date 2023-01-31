import mysql from "promise-mysql";
import config  from "./../config";

const pool = mysql.createPool({
    host: config.dbHost,
    database: config.dbName,
    user: config.dbUser,
    port: config.dbPort,
    password: config.dbPassword
})

const getConnection=()=>{
    return pool;
}

module.exports={
    getConnection
}