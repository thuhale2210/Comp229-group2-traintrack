const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DateAndTime = new Schema({
    start: {type: Date},
    end: {type: Date}
})

let appointment = new Schema({
    dateAndTime: {type: DateAndTime},
    trainer: {type: String},
    focusArea: {type: String},
    specialRequest: {type: String}
})

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
    appointments: [appointment],
    
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