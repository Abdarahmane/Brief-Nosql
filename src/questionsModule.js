const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    _id: String,
    surveyId: String,
    title: String,
    type: String,
    options: mongoose.Schema.Types.Mixed,
    allowMultipleSelections: Boolean
});

module.exports = mongoose.model('Question', questionSchema, 'questions');
