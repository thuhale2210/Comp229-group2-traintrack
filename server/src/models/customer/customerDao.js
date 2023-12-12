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
            console.log('It is working');
    
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
                    id: appointment._id,
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

    async findProfile(req, res){
        const customerId = req.params.id;
        try {
            const customer = await Customer.findById(customerId);
        
            if (!customer) {
                return res.status(404).json({ message: 'User not found' });
            }
        
            const { firstName, lastName, gender, age, email, phone, weight, height } = customer;
    
            const fullName = `${firstName} ${lastName}`;
    
            const profileData = {
                fullName,
                gender,
                age,
                email,
                phone,
                weight,
                height
            };
        
            return res.status(200).json(profileData);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching user profile', error: error.message });
        }
    }

    async updateProfile(req, res){
        const customerId = req.params.id;
        const updates = req.body; // Assuming the request body contains the fields to update
    
        try {
            const customer = await Customer.findById(customerId);
        
            if (!customer) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            // Update the fields if they exist in the request body
            if ('firstName' in updates) {
                customer.firstName = updates.firstName;
            }
            if ('lastName' in updates) {
                customer.lastName = updates.lastName;
            }
            if ('age' in updates) {
                customer.age = updates.age;
            }
            if ('email' in updates) {
                customer.email = updates.email;
            }
            if ('phone' in updates) {
                customer.phone = updates.phone;
            }
            if ('weight' in updates) {
                customer.weight = updates.weight;
            }
            if ('height' in updates) {
                customer.height = updates.height;
            }
    
            await customer.save(); // Save the updated customer information
    
            return res.status(200).json({ message: 'User profile updated successfully' });
        } catch(error){
            return res.status(500).json({ message: 'Error updating user profile', error: error.message });
        }
    }
    
    async deleteAppointment(req, res){
        console.log('It is working');
        const customerId = req.params.id;
        const appointmentId = req.params.appId;
        console.log(customerId);
        console.log(appointmentId);

        try {
            // Find the customer by ID
            const customer = await Customer.findById(customerId);

            if (!customer) {
                return res.status(404).json({ message: "Customer not found" });
            }

            // Find the index of the appointment to delete
            const appointmentIndex = customer.appointments.findIndex(
                (apt) => apt._id.toString() === appointmentId
            );

            if (appointmentIndex === -1) {
                return res.status(404).json({ message: "Appointment not found" });
            }

            // Remove the appointment from the appointments array
            customer.appointments.splice(appointmentIndex, 1);

            // Save the updated customer data
            await customer.save();

            return res.status(200).json({ message: "Appointment deleted successfully" });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

module.exports = CustomerDao;