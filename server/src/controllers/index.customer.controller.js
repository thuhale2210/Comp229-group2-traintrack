const CustomerDao = require('../models/customer/customerDao');

class CustomerController {
    constructor() {
        this.customerDao = new CustomerDao();
    }

    addCustomer(req, res){
        this.customerDao.create(req, res);
    }
}

module.exports = CustomerController;