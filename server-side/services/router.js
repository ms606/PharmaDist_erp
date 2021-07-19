const express = require('express');
const router = new express.Router();

const employees = require('../controllers/employees.js')
const stationaryItems = require('../controllers/stationeryItems.js')
const companyprofile = require('../controllers/companyprofile.js')

router.route('/employees/:id?')
    .get(employees.get)
    .post(employees.post)
    .put(employees.put)
    .delete(employees.delete);

router.route('/stationaryItems/')
    .get(stationaryItems.get)

router.route('/companyprofile')
    .get(companyprofile.get)

module.exports = router;