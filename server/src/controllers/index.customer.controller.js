const CustomerService = require('../models/services/customer.services');

class CustomerController{
    constructor(){
        this.customerService = new CustomerService();
    }

    getCustomerName(req, res){
        this.customerService.getName(req, res);
    }

    setAppointment(req, res){
        this.customerService.setAppointment(req, res);
    }

    getUpcomingSchedule(req, res){
        this.customerService.getUpcomingSchedule(req, res);
    }

    getWorkoutHistory(req, res){
        this.customerService.getWorkoutHistory(req, res);
    }

    getProfileInformation(req, res){
        this.customerService.getProfile(req, res);
    }
}

module.exports = CustomerController;