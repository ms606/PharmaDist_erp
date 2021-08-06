const database = require('../services/database.js');
const oracledb = require('oracledb');


const baseQuery = `select uname, ucode from usraccount`;

async function find(context) {
 let query = baseQuery;
 const binds = {};
 
    if (context) {
        //  binds.email = context.email;  
        //  binds.password = context.password;  
         query += `\n where uname = '${context.email}' and PASWD = '${context.password}'`;
    }
  
    const result = await database.simpleExecute(query, binds);
 
    return result.rows;
}
  
  module.exports.find = find;