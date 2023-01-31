import { config } from "dotenv";

config();

export default{
    dbHost: process.env.DBSERVER || "localhost",
    dbName: process.env.DBNAME || "dbprueba",
    dbUser: process.env.DBUSER || "root",
    dbPassword: process.env.DBPASSWORD || "123",
    dbPort: process.env.DBBPORT || 3306,
    TOKEN_SECRET: process.env.TOKEN_SECRET || "",

}