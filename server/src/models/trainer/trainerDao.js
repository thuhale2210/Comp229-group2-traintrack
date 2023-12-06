const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Trainer = require('./trainer');

class TrainerDao{

    constructor(){
        mongoose.connect('mongodb+srv://alexrosario:7gXEavt2BAugFGJ8@cluster0.y3audej.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',
        {useNewUrlParser:true});
        
        this.connection = mongoose.connection;
        this.connection.once('open',()=>{
            console.log("DB connected......")
        })
    }

    async create(req, res){
        const { firstName, lastName, gender, email, password, role, availableDates } = req.body;

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newTrainer = new Trainer({
            firstName,
            lastName,
            gender,
            email,
            password: hashedPassword,
            role,
            availableDates
        });

        //Save the user
        newTrainer.save(req.body)
        .then(trainers => res.status(200).json(trainers))
        .catch(err => res.status(400).json({"error":err}));
    }

    async deleteAll(req, res){
        try {
            await Trainer.deleteMany({}); // Delete all records/documents in the Trainer collection
            res.json({ message: 'All trainers deleted successfully.' });
        }catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async findAllNames(req, res){
        try{
            const trainerNames = await Trainer.find({}, 'firstName')
            res.json(trainerNames);
        }catch(error){
            res.status(500).json({ message: err.message });
        } 
    }

    async findAvailableDates(req, res){
        const { trainerId } = req.params;
        console.log('Requested Trainer ID:', trainerId);
        try{
            const trainer = await Trainer.findById(trainerId);
            if(!trainer){
                return res.status(404).json({ message: 'Trainer not found' });
            }

            const allAvailableTimeSlots = trainer.availableDates.reduce((slots, availableDate) => {
                return [...slots, ...availableDate.timeSlots];
            }, []);

            res.json({ availableTimeSlots: allAvailableTimeSlots });

        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = TrainerDao;