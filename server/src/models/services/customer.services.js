const CustomerDao = require('../customer/customerDao');
const Customer = require('../customer/customer');

class CustomerService{
    constructor(){
        this.customerDao = new CustomerDao();
    }

    async getName(req, res){
        this.customerDao.getName(req, res);
    }

    async setAppointment(req, res){
        this.customerDao.saveAppointment(req, res);
    }


}

module.exports = CustomerService;