const mongoose = require('mongoose');
const connectDB = require('./config/database');
const Survey = require('./surveysModule');
const Question = require('./questionsModule');
const Answer = require('./answersModule');


connectDB();


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

// // Mettre à jour une enquête
const updateSurvey = async (id, updateData) => {
    try {
        const updatedSurvey = await Survey.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Survey Updated:', updatedSurvey);
        return updatedSurvey;
    } catch (err) {
        console.error('Error updating survey:', err);
    }
};

// Supprimer une enquête
const deleteSurvey = async (id) => {
    try {
        await Survey.findByIdAndDelete(id);
        console.log('Survey Deleted');
    } catch (err) {
        console.error('Error deleting survey:', err);
    }
};


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

(async () => {
    
    const surveyId = await createSurvey({
        _id: 'survey_001',
        name: 'Customer Feedback Survey',
        description: 'Survey to collect customer feedback',
        createdBy: {
            employeeName: 'Jane Doe',
            employeeRole: 'Supervisor'
        }
    });

    const questionId = await createQuestion({
        _id: 'question_001',
        surveyId: surveyId,
        title: 'How do you rate our service?',
        type: 'multipleChoice',
        options: ['Excellent', 'Good', 'Average', 'Poor'],
        allowMultipleSelections: false
    });

    
    const answerId = await createAnswer({
        _id: 'answer_001',
        questionId: questionId,
        title: 'Excellent'
    });

   s
    await listSurveys();
    await listQuestions();
    await listAnswers();

    
    await updateSurvey(surveyId, { name: 'Updated Customer Feedback Survey' });

    
    await updateQuestion(questionId, { title: 'How would you rate our service overall?' });

   
    await updateAnswer(answerId, { title: 'Very Good' });


    await deleteAnswer(answerId);

    await deleteQuestion(questionId);

    await deleteSurvey(surveyId);
})();
