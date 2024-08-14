const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    createdAt: Date,
    createdBy: {
        employeeName: String,
        employeeRole: String
    }
});

module.exports = mongoose.model('Survey', surveySchema, 'surveys');
