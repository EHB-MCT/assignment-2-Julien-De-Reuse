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
    submitTime: Date,
});

module.exports = mongoose.model('Survey', surveySchema);