const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Customer = require('./customer');

class CustomerDao{

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
        const newCustomer = new Customer({
            firstName,
            lastName,
            gender,
            email,
            password: hashedPassword,
            role,
        });

        //Save the user
        newCustomer.save(req.body)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(400).json({"error":err}));
    }

    async getName(req, res){
        const customerId = req.params.id;
        try {
            // Replace this with your actual database query method
            const customer = await Customer.findById(customerId) // Example: using Mongoose for MongoDB
        
            if (!customer) {
              return res.status(404).json({ message: 'User not found' });
            }
        
            // Assuming 'name' is a field in your user schema
            const customerName = customer.firstName + ' ' + customer.lastName;
        
            return res.status(200).json({ name: customerName });
          } catch (error) {
            return res.status(500).json({ message: 'Error fetching user name', error: error.message });
          }

    }
}

module.exports = CustomerDao;