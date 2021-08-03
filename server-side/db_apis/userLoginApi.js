const database = require('../services/database.js');
const oracledb = require('oracledb');


const baseQuery = `select uname, paswd from usraccount`;

async function find(context) {
 let query = baseQuery;
 const binds = {};
  
    // if (context.id) {
    //   binds.ucode = context.id;  
    //   //query += `\nwhere ucode = :ucode`;
    // }
  
    const result = await database.simpleExecute(query, binds);
  
    return result.rows;
}
  
  module.exports.find = find;