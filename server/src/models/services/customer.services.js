const CustomerDao = require('../customer/customerDao');
const Customer = require('../customer/customer');

class CustomerService{
    constructor(){
        this.customerDao = new CustomerDao();
    }

    async getName(req, res){
        this.customerDao.getName(req, res);
    }


}

module.exports = CustomerService;