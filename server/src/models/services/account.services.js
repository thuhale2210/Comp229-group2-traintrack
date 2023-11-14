const bcrypt = require('bcrypt');
const CustomerDao = require('../customer/customerDao');
const TrainerDao = require('../trainer/trainerDao');
const Customer = require('../customer/customer');
const Trainer = require('../trainer/trainer');

class AccountService{
    constructor() {
        this.customerDao = new CustomerDao();
        this.TrainerDao = new TrainerDao();
    }

    async createAccount(req, res){
        const {firstName, lastName, email, password, role} = req.body;
        try{
            // Check if user with the same email already exists

            const existingCustomer = await Customer.findOne({ email });
            const existingTrainer = await Trainer.findOne({ email });
            if(existingCustomer || existingTrainer){
                return res.status(400).json({ message: 'Email already exists' });
            }
            
            // If the email is available, create the user based on the role
            if(role === "customer"){
                this.customerDao.create(req, res);
            }
            else if(role === "trainer"){
                this.TrainerDao.create(req, res);
            }
            else{
                return res.status(400).json({ message: 'Role is invalid' });
            }

        }catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async login(req, res){
        try{
            const {email, password} = req.body;

            // Check if email exists
            const customer = await Customer.findOne({ email });
            const trainer = await Trainer.findOne({ email });

            if (!customer && !trainer){
                return res.status(400).json({ message: 'Invalid username or password' });
            }

            // Check password
            if(customer){
                const customerValidPassword = await bcrypt.compare(password, customer.password);

                //If password is valid, set session
                if(customerValidPassword){
                    return res.json({ userId: customer.id});
                }
                //Otherwise, send error message
                else{
                    return res.status(400).json({ message: 'Invalid username or password' });
                }   
            }
            
            if(trainer){
                const trainerValidPassword = await bcrypt.compare(password, trainer.password);

                //If password is valid, set session
                if(trainerValidPassword){
                    return res.json({ userId: trainer.id});
                }
                //Otherwise, send error message
                else{
                    return res.status(400).json({ message: 'Invalid username or password' });
                } 
            }
            
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}

module.exports = AccountService;