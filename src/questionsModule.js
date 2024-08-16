
const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    _id: String,
    surveyId: String,
    title: String,
    type: String,
    options: [String],
    allowMultipleSelections: Boolean
});


const Question = mongoose.model('Question', QuestionSchema);


const createQuestion = async (questionData) => {
    const newQuestion = new Question({
        _id: questionData._id,
        surveyId: questionData.surveyId,
        title: questionData.title,
        type: questionData.type,
        options: questionData.options,
        allowMultipleSelections: questionData.allowMultipleSelections
    });

    try {
        const savedQuestion = await newQuestion.save();
        console.log('Question Created:', savedQuestion);
        return savedQuestion._id;
    } catch (err) {
        if (err.code === 11000) {
            console.error(`Error: Duplicate ID ${questionData._id} already exists.`);
        } else {
            console.error('Error creating question:', err);
        }
    }
};

const listQuestions = async () => {
    try {
        const questions = await Question.find();
        console.log('Questions:', questions);
        return questions;
    } catch (err) {
        console.error('Error listing questions:', err);
    }
};

const getQuestionById = async (id) => {
    try {
        const question = await Question.findById(id);
        console.log('Question:', question);
        return question;
    } catch (err) {
        console.error('Error getting question:', err);
    }
};

const updateQuestion = async (id, updateData) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Question Updated:', updatedQuestion);
        return updatedQuestion;
    } catch (err) {
        console.error('Error updating question:', err);
    }
};

const deleteQuestion = async (id) => {
    try {
        await Question.findByIdAndDelete(id);
        console.log('Question Deleted');
    } catch (err) {
        console.error('Error deleting question:', err);
    }
};

module.exports = {
    createQuestion,
    listQuestions,
    getQuestionById,
    updateQuestion,
    deleteQuestion
};
