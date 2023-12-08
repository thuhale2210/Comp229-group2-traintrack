const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({ 
    firstName: {
        type:String
    },
    lastName:{
        type:String
    },
    gender:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
    age:{
        type:Number
    },
    phone:{
        type:Number
    },
    numberOfTrainingSessionsToComplete: {
        type:Number
    },
    targetedWeight: {
        type:Number
    },
    currentWeight: {
        type:Number
    },
    currentHeight: {
        type:Number
    }
});


module.exports = mongoose.model('Customer',Customer);