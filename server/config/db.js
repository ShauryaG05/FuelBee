import { neon } from "@neondatabase/serverless"

if(!process.env.DATABASE_URL){
    throw new Error("DataBase_URL is missing or invalid")
}

const sql = neon(process.env.DATABASE_URL);

export default sql;
