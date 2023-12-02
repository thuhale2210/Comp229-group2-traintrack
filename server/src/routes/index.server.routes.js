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

router.route('/availableDates').get((req, res) => {
    trainerController.getAvailableDates(req, res);
})


module.exports = router;