const surveysModule = require('./surveysModule');
const questionsModule = require('./questionsModule');
const answersModule = require('./answersModule');

async function main() {
    console.log("MongoDB connected");

    try {
        await exampleQuestions();
    } catch (error) {
        console.error("Error managing questions:", error);
    }

    try {
        await exampleAnswers();
    } catch (error) {
        console.error("Error managing answers:", error);
    }

    await exampleSurveys();
}

async function exampleQuestions() {
    const question = {
        questionId: 1,
        text: 'How satisfied are you with our service?',
        type: 'multiple-choice',
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied']
    };

    await questionsModule.createQuestion(question);
    await questionsModule.readQuestionById(1);
    await questionsModule.updateQuestion(1, { text: 'How would you rate our service?' });
    await questionsModule.deleteQuestion(1);
}

async function exampleAnswers() {
    const answer = {
        answerId: 1,
        questionId: 1,
        response: 'Very satisfied',
        userId: 'user123'
    };

    await answersModule.createAnswer(answer);
    await answersModule.readAnswerById(1);
    await answersModule.updateAnswer(1, { response: 'Satisfied' });
    await answersModule.deleteAnswer(1);
}

async function exampleSurveys() {
    const survey = {
        surveyId: 1,
        name: 'Customer Satisfaction Survey',
        description: 'A survey to measure customer satisfaction.',
        createdBy: 'Admin'
    };

    await surveysModule.createSurvey(survey);
    await surveysModule.listSurveys();
    await surveysModule.updateSurvey( 1, { name: 'Updated Survey Name' });
    await surveysModule.deleteSurvey(1);
}

main().catch(console.error);
