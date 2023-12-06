const CustomerService = require('../models/services/customer.services');

class CustomerController{
    constructor(){
        this.customerService = new CustomerService();
    }

    getCustomerName(req, res){
        this.customerService.getName(req, res);
    }
}

module.exports = CustomerController;