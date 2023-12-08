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

    async saveAppointment(req, res){
        const {userId, dateAndTime, trainer, focusArea, specialRequest} = req.body;
        try {
            // Create a new appointment object
            const newAppointment = {
                dateAndTime: {
                    start: new Date(dateAndTime.start),
                    end: new Date(dateAndTime.end)
                },
                trainer: trainer,
                focusArea: focusArea,
                specialRequest: specialRequest
            };
    
            // Find the customer by userId
            const customer = await Customer.findById(userId);
    
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
    
            // Add the new appointment to the appointments array
            customer.appointments.push(newAppointment);
    
            // Save the updated customer document
            await customer.save();
    
            res.status(200).json({ message: 'Appointment added successfully' });
        } catch (error) {
            console.error('Error saving appointment:', error);
            res.status(500).json({ error: 'Failed to add appointment' });
        }
    }

    async findAll(req, res){
        try {
            // Fetch all customers from the database
            const allCustomers = await Customer.find();
    
            // Respond with the retrieved customers
            res.status(200).json(allCustomers);
        } catch (error) {
            console.error('Error fetching customers:', error);
            res.status(500).json({ error: 'Failed to fetch customers' });
        }
    }
}

module.exports = CustomerDao;