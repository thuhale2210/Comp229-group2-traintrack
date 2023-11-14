const AccountService = require('../models/services/account.services');

class AccountController {
    constructor() {
        this.accountService = new AccountService();
    }

    addAccount(req, res){
        this.accountService.createAccount(req, res);
    }

    login(req, res){
        this.accountService.login(req, res);
    }
}

module.exports = AccountController;