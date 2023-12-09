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
            const customer = await Customer.findById(customerId)
        
            if (!customer) {
              return res.status(404).json({ message: 'User not found' });
            }
        
            const customerName = customer.firstName + ' ' + customer.lastName;
        
            return res.status(200).json({ name: customerName });
          } catch (error) {
            return res.status(500).json({ message: 'Error fetching user name', error: error.message });
          }
    }

    async getAge(req, res){
        const customerId = req.params.id;
        try {
            const customer = await Customer.findById(customerId)
        
            if (!customer) {
              return res.status(404).json({ message: 'User not found' });
            }
                
            return res.status(200).json({ age: customer.age });
          } catch (error) {
            return res.status(500).json({ message: 'Error fetching user age', error: error.message });
          }
    }

    async getAge(req, res){
        const customerId = req.params.id;
        try {
            const customer = await Customer.findById(customerId)
        
            if (!customer) {
              return res.status(404).json({ message: 'User not found' });
            }
                
            return res.status(200).json({ age: customer.age });
          } catch (error) {
            return res.status(500).json({ message: 'Error fetching user age', error: error.message });
          }
    }

    async getEmail(req, res){
        const customerId = req.params.id;
        try {
            const customer = await Customer.findById(customerId)
        
            if (!customer) {
              return res.status(404).json({ message: 'User not found' });
            }
            
            return res.status(200).json({ email: customer.email });
          } catch (error) {
            return res.status(500).json({ message: 'Error fetching user email', error: error.message });
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

    async findAllUpcomingAppointments(req, res){
        const customerId = req.params.id;

        try {
            const customer = await Customer.findById(customerId);

            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }

            const currentDateTime = new Date();
            const upcomingAppointments = customer.appointments.filter(appointment => {
                return appointment.dateAndTime.start > currentDateTime;
            });

            // Transforming appointments to the specified format
            const formattedAppointments = upcomingAppointments.map(appointment => {
                const start = new Date(appointment.dateAndTime.start);
                const end = new Date(appointment.dateAndTime.end);

                const duration = Math.round((end - start) / (1000 * 60)); // Calculate duration in minutes

                return {
                    date: start.toLocaleDateString('en-US'),
                    time: start.toLocaleTimeString('en-US', { timeStyle: 'short' }),
                    focusArea: appointment.focusArea,
                    trainer: appointment.trainer,
                    duration: duration,
                    specialRequest: appointment.specialRequest || 'N/A'
                };
            });

            res.status(200).json(formattedAppointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
            res.status(500).json({ error: 'Failed to fetch appointments' });
        }
    }

    async findWorkoutHistory(req, res){
        const customerId = req.params.id;

        try {
            const customer = await Customer.findById(customerId);

            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }

            const currentDateTime = new Date();
            const upcomingAppointments = customer.appointments.filter(appointment => {
                return appointment.dateAndTime.start <= currentDateTime;
            });

            // Transforming appointments to the specified format
            const formattedAppointments = upcomingAppointments.map(appointment => {
                const start = new Date(appointment.dateAndTime.start);
                const end = new Date(appointment.dateAndTime.end);

                const duration = Math.round((end - start) / (1000 * 60)); // Calculate duration in minutes

                return {
                    date: start.toLocaleDateString('en-US'),
                    time: start.toLocaleTimeString('en-US', { timeStyle: 'short' }),
                    focusArea: appointment.focusArea,
                    trainer: appointment.trainer,
                    duration: duration,
                    specialRequest: appointment.specialRequest || 'N/A'
                };
            });

            res.status(200).json(formattedAppointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
            res.status(500).json({ error: 'Failed to fetch appointments' });
        }
    }
}

module.exports = CustomerDao;