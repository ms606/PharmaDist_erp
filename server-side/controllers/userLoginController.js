const e = require('express');
const userLogin = require('../db_apis/userLoginApi.js');
 
async function post(req, res, next) {
  try {
    const context = {};
 
    context.email = req.body.email;
    context.password = req.body.password.toString();
   
    const rows = await userLogin.find(context);

    res.status(200).json(rows[0]);

  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;