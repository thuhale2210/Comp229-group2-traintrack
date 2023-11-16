const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/index.account.controller');

const accountController = new AccountController();


router.route('/addAccount').post((req, res) => {
    accountController.addAccount(req, res);
});

router.route('/login').post((req, res) => {
    accountController.login(req, res);
});


module.exports = router;