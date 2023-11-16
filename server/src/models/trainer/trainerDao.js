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
        const { firstName, lastName, gender, email, password, role } = req.body;

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
        });

        //Save the user
        newTrainer.save(req.body)
        .then(trainers => res.status(200).json(trainers))
        .catch(err => res.status(400).json({"error":err}));
    }

    async removeAll(req, res){
        Trainer.deleteMany()
        .then(trainers => res.status(200).json(trainers))
        .catch(err => res.status(400).json({"error":err}));
    }
}

module.exports = TrainerDao;