const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/index.account.controller');
const TrainerController = require('../controllers/index.trainer.controller');

const accountController = new AccountController();
const trainerController = new TrainerController();

router.route('/addAccount').post((req, res) => {
    accountController.addAccount(req, res);
});

router.route('/login').post((req, res) => {
    accountController.login(req, res);
});

router.route('/trainerNames').get((req, res) => {
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






module.exports = router;