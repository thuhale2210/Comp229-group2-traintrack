const TrainerService = require('../models/services/trainer.services');

class TrainerController {
    constructor() {
        this.trainerService = new TrainerService();
    }

    getAvailableDates(req, res){
        this.trainerService.getAvailableDates(req, res);
    }

}

module.exports = TrainerController;