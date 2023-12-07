const TrainerDao = require('../trainer/trainerDao');
const Trainer = require('../trainer/trainer');

class TrainerService{
    constructor(){
        this.trainerDao = new TrainerDao();
    }

    async getAllNames(req, res){
        try{
            this.trainerDao.findAllNames(req, res);
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getAvailableDates(req, res){
        try{
            this.trainerDao.findAvailableDates(req, res);
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteAll(req, res){
        try{
            this.trainerDao.deleteAll(req, res);
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async addTrainer(req, res){
        try{
            this.trainerDao.create(req, res);
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    
}

module.exports = TrainerService;