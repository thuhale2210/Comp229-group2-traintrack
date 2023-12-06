const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a sub-document schema for available dates with time slots
const AvailableDateSchema = new Schema({
    date: { type: Date, required: true },
    timeSlots: [{ type: String }] // Assuming time slots are represented as strings
});

let Trainer = new Schema({
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
    availableDates: [AvailableDateSchema] // Array of available dates for the trainer
});

module.exports = mongoose.model('Trainer', Trainer);
