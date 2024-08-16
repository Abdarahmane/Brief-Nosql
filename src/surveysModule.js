

const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    createdBy: {
        employeeName: String,
        employeeRole: String
    }
});


const Survey = mongoose.model('Survey', SurveySchema);


const createSurvey = async (surveyData) => {
    const newSurvey = new Survey({
        _id: surveyData._id,
        name: surveyData.name,
        description: surveyData.description,
        createdAt: new Date(),
        createdBy: surveyData.createdBy
    });

    try {
        const savedSurvey = await newSurvey.save();
        console.log('Survey Created:', savedSurvey);
        return savedSurvey._id;
    } catch (err) {
        if (err.code === 11000) {
            console.error(`Error: Duplicate ID ${surveyData._id} already exists.`);
        } else {
            console.error('Error creating survey:', err);
        }
    }
};

const listSurveys = async () => {
    try {
        const surveys = await Survey.find();
        console.log('Surveys:', surveys);
        return surveys;
    } catch (err) {
        console.error('Error listing surveys:', err);
    }
};

const getSurveyById = async (id) => {
    try {
        const survey = await Survey.findById(id);
        console.log('Survey:', survey);
        return survey;
    } catch (err) {
        console.error('Error getting survey:', err);
    }
};

const updateSurvey = async (id, updateData) => {
    try {
        const updatedSurvey = await Survey.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Survey Updated:', updatedSurvey);
        return updatedSurvey;
    } catch (err) {
        console.error('Error updating survey:', err);
    }
};

const deleteSurvey = async (id) => {
    try {
        await Survey.findByIdAndDelete(id);
        console.log('Survey Deleted');
    } catch (err) {
        console.error('Error deleting survey:', err);
    }
};

module.exports = {
    createSurvey,
    listSurveys,
    getSurveyById,
    updateSurvey,
    deleteSurvey
};
