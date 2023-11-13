const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/index.customer.controller');

const customerController = new CustomerController();

router.route('/add').post((req, res) => {
    customerController.addCustomer(req, res);
});

module.exports = router;