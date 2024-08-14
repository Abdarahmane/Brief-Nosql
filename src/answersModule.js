const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    _id: String,
    questionId: String,
    title: String
});

module.exports = mongoose.model('Answer', answerSchema, 'answers');
