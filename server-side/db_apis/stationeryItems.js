const database = require('../services/database.js');
const oracledb = require('oracledb');


const baseQuery = 
 `select scode, sname, blqty from stationary_codes where blqty > 0 order by scode`;

  async function find(context) {
    let query = baseQuery;
    const binds = {};
  
    if (context.id) {
      binds.scode = context.id;
  
      query += `\nwhere scode = :scode`;
    }
  
    const result = await database.simpleExecute(query, binds);
  
    return result.rows;
  }
  
  module.exports.find = find;