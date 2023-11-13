const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// YOU CAN ADD YOUR OWN SCHEMA HERE

let Customer = new Schema({ 
    firstName: {
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:Number
    },
    password:{
        type:String
    },
    role:{
        type:Number
    },
});


module.exports = mongoose.model('Customer',Customer);