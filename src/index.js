const mongoose = require('mongoose');
const connectDB = require('./config/database');
const Survey = require('./surveysModule');
const Question = require('./questionsModule');
const Answer = require('./answersModule');

// Connexion à MongoDB
connectDB();

/**
 * CRUD pour les Enquêtes (Surveys)
 */

// Créer une enquête
const createSurvey = async (surveyData) => {
    const newSurvey = new Survey({
        _id: surveyData._id,  // ID spécifié manuellement
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
        if (err.code === 11000) {  // Gérer l'erreur de duplication de clé
            console.error(`Error: Duplicate ID ${surveyData._id} already exists.`);
        } else {
            console.error('Error creating survey:', err);
        }
    }
};

// Lister toutes les enquêtes
const listSurveys = async () => {
    try {
        const surveys = await Survey.find();
        console.log('Surveys:', surveys);
        return surveys;
    } catch (err) {
        console.error('Error listing surveys:', err);
    }
};

// Obtenir une enquête par ID
const getSurveyById = async (id) => {
    try {
        const survey = await Survey.findById(id);
        console.log('Survey:', survey);
        return survey;
    } catch (err) {
        console.error('Error getting survey:', err);
    }
};

// Mettre à jour une enquête
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

/**
 * CRUD pour les Questions (Questions)
 */

// Créer une question
const createQuestion = async (questionData) => {
    const newQuestion = new Question({
        _id: questionData._id,  // ID spécifié manuellement
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

// Lister toutes les questions
const listQuestions = async () => {
    try {
        const questions = await Question.find();
        console.log('Questions:', questions);
        return questions;
    } catch (err) {
        console.error('Error listing questions:', err);
    }
};

// Obtenir une question par ID
const getQuestionById = async (id) => {
    try {
        const question = await Question.findById(id);
        console.log('Question:', question);
        return question;
    } catch (err) {
        console.error('Error getting question:', err);
    }
};

// Mettre à jour une question
const updateQuestion = async (id, updateData) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Question Updated:', updatedQuestion);
        return updatedQuestion;
    } catch (err) {
        console.error('Error updating question:', err);
    }
};

// Supprimer une question
const deleteQuestion = async (id) => {
    try {
        await Question.findByIdAndDelete(id);
        console.log('Question Deleted');
    } catch (err) {
        console.error('Error deleting question:', err);
    }
};

/**
 * CRUD pour les Réponses (Answers)
 */

// Créer une réponse
const createAnswer = async (answerData) => {
    const newAnswer = new Answer({
        _id: answerData._id,  // ID spécifié manuellement
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

// Lister toutes les réponses
const listAnswers = async () => {
    try {
        const answers = await Answer.find();
        console.log('Answers:', answers);
        return answers;
    } catch (err) {
        console.error('Error listing answers:', err);
    }
};

// Obtenir une réponse par ID
const getAnswerById = async (id) => {
    try {
        const answer = await Answer.findById(id);
        console.log('Answer:', answer);
        return answer;
    } catch (err) {
        console.error('Error getting answer:', err);
    }
};

// Mettre à jour une réponse
const updateAnswer = async (id, updateData) => {
    try {
        const updatedAnswer = await Answer.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Answer Updated:', updatedAnswer);
        return updatedAnswer;
    } catch (err) {
        console.error('Error updating answer:', err);
    }
};

// Supprimer une réponse
const deleteAnswer = async (id) => {
    try {
        await Answer.findByIdAndDelete(id);
        console.log('Answer Deleted');
    } catch (err) {
        console.error('Error deleting answer:', err);
    }
};

// Exemple de test pour vérifier les opérations CRUD
(async () => {
    // Créer une enquête avec un ID personnalisé
    const surveyId = await createSurvey({
        _id: 'survey_001',
        name: 'Customer Feedback Survey',
        description: 'Survey to collect customer feedback',
        createdBy: {
            employeeName: 'Jane Doe',
            employeeRole: 'Supervisor'
        }
    });

    // Créer une question liée à l'enquête
    const questionId = await createQuestion({
        _id: 'question_001',
        surveyId: surveyId,
        title: 'How do you rate our service?',
        type: 'multipleChoice',
        options: ['Excellent', 'Good', 'Average', 'Poor'],
        allowMultipleSelections: false
    });

    // Créer une réponse liée à la question
    const answerId = await createAnswer({
        _id: 'answer_001',
        questionId: questionId,
        title: 'Excellent'
    });

    // Lister toutes les enquêtes, questions, et réponses
    await listSurveys();
    await listQuestions();
    await listAnswers();

    // Mettre à jour l'enquête créée
    await updateSurvey(surveyId, { name: 'Updated Customer Feedback Survey' });

    // Mettre à jour la question créée
    await updateQuestion(questionId, { title: 'How would you rate our service overall?' });

    // Mettre à jour la réponse créée
    await updateAnswer(answerId, { title: 'Very Good' });

    // Supprimer la réponse créée
    await deleteAnswer(answerId);

    // Supprimer la question créée
    await deleteQuestion(questionId);

    // Supprimer l'enquête créée
    await deleteSurvey(surveyId);
})();
