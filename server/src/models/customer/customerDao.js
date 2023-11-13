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
        let customer = new Customer(req.body);
        customer.save(req.body)
        .then(products => res.status(200).json(products))
        .catch(err => res.status(400).json({"error":err}));
    }
}

module.exports = CustomerDao;