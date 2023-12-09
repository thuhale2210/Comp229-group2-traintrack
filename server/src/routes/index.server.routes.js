const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/index.account.controller');
const TrainerController = require('../controllers/index.trainer.controller');
const CustomerController = require('../controllers/index.customer.controller');
const CustomerDao = require('../models/customer/customerDao');


const accountController = new AccountController();
const trainerController = new TrainerController();
const customerController = new CustomerController();
const customerDao = new CustomerDao();

router.route('/addAccount').post((req, res) => {
    accountController.addAccount(req, res);
});

router.route('/login').post((req, res) => {
    accountController.login(req, res);
});

router.route('/trainers').get((req, res) => {
    trainerController.getAllTrainerNames(req, res);
});

router.route('/trainer/:id/available-dates').get((req, res) => {
    trainerController.getAvailableDates(req, res);
});

router.route('/deleteAllTrainers').delete((req, res) => {
    trainerController.deleteAllTrainers(req, res);
});

router.route('/addTrainer').post((req, res) => {
    trainerController.addTrainer(req, res);
});

router.route('/customer/:id/name').get((req, res) => {
    customerController.getCustomerName(req, res);
});

router.route('/customer/appointment').post((req, res) => {
    customerController.setAppointment(req, res);
});

router.route('/customers').get((req, res) => {
    customerDao.findAll(req, res);
});

router.route('/customer/:id/email').get((req, res) => {
    customerController.getCustomerEmail(req, res);
});

router.route('/customer/:id/upcomingSchedule').get((req, res) =>{
    customerController.getUpcomingSchedule(req, res);
});

router.route('/customer/:id/workoutHistory').get((req, res) => {
    customerController.getWorkoutHistory(req, res);
});

module.exports = router;