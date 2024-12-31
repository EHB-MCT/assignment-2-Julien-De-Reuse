const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    temperature: Number,
    airQuality: Number,
    noise: Number,
    seating: Number,
    peopleQuantity: Number,
    roomType: String,
    roomNumber: String,
    comments: String,
    email: String,
});

module.exports = mongoose.model('Survey', surveySchema);