//Create a service to create an account
//If the account's role is customer, it must create a new customer through the cutomerDao
//If the account's role is trainer, it must create a new trainer through the trainerDao

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

}

module.exports = AccountService;