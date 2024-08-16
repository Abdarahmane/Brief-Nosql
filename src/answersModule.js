
const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    _id: String,
    questionId: String,
    title: String
});

const Answer = mongoose.model('Answer', AnswerSchema);

const createAnswer = async (answerData) => {
    const newAnswer = new Answer({
        _id: answerData._id,
        questionId: answerData.questionId,
        title: answerData.title
    });

    try {
        const savedAnswer = await newAnswer.save();
        console.log('Answer Created:', savedAnswer);
        return savedAnswer._id;
    } catch (err) {
        if (err.code === 11000) {
            console.error(`Error: Duplicate ID ${answerData._id} already exists.`);
        } else {
            console.error('Error creating answer:', err);
        }
    }
};

const listAnswers = async () => {
    try {
        const answers = await Answer.find();
        console.log('Answers:', answers);
        return answers;
    } catch (err) {
        console.error('Error listing answers:', err);
    }
};

const getAnswerById = async (id) => {
    try {
        const answer = await Answer.findById(id);
        console.log('Answer:', answer);
        return answer;
    } catch (err) {
        console.error('Error getting answer:', err);
    }
};

const updateAnswer = async (id, updateData) => {
    try {
        const updatedAnswer = await Answer.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Answer Updated:', updatedAnswer);
        return updatedAnswer;
    } catch (err) {
        console.error('Error updating answer:', err);
    }
};

const deleteAnswer = async (id) => {
    try {
        await Answer.findByIdAndDelete(id);
        console.log('Answer Deleted');
    } catch (err) {
        console.error('Error deleting answer:', err);
    }
};

module.exports = {
    createAnswer,
    listAnswers,
    getAnswerById,
    updateAnswer,
    deleteAnswer
};
