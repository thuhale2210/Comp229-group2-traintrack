const TrainerService = require('../models/services/trainer.services');

class TrainerController {
    constructor() {
        this.trainerService = new TrainerService();
    }

    getAllTrainerNames(req, res){
        this.trainerService.getAllNames(req, res);      
    }

    getAvailableDates(req, res){
        this.trainerService.getAvailableDates(req, res);
    }
    
    deleteAllTrainers(req, res){
        this.trainerService.deleteAll(req, res);
    }

    addTrainer(req, res){
        this.trainerService.addTrainer(req, res);
    }

}

module.exports = TrainerController;