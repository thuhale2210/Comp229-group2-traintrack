const TrainerDao = require('../trainer/trainerDao');
const Trainer = require('../trainer/trainer');

class TrainerService{
    constructor(){
        this.trainerDao = new TrainerDao();
    }

    async getAvailableDates(req, res){
        const{userID} = req.body;
        try{

        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = TrainerService;