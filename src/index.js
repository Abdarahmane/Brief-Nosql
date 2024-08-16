

const connectDB = require('./config/database');
const surveyModule = require('./surveysModule');
const questionModule = require('./questionsModule');
const answerModule = require('./answersModule');

connectDB();


(async () => {
    try {
        const surveyId = await surveyModule.createSurvey({
            _id: 'survey_001',
            name: 'Enquête de Satisfaction Client',
            description: 'Enquête pour recueillir les retours des clients',
            createdBy: {
                employeeName: 'Jane Doe',
                employeeRole: 'Superviseur'
            }
        });

        const questionId = await questionModule.createQuestion({
            _id: 'question_001',
            surveyId: surveyId,
            title: 'Comment évaluez-vous notre service ?',
            type: 'multipleChoice',
            options: ['Excellent', 'Bon', 'Moyenne', 'Pauvre'],
            allowMultipleSelections: false
        });

        const answerId = await answerModule.createAnswer({
            _id: 'answer_001',
            questionId: questionId,
            title: 'Excellent'
        });

        await surveyModule.listSurveys();
        await questionModule.listQuestions();
        await answerModule.listAnswers();

        await surveyModule.updateSurvey(surveyId, { name: 'Enquête de Satisfaction Client Mise à Jour' });
        await questionModule.updateQuestion(questionId, { title: 'Comment évalueriez-vous notre service globalement ?' });
        await answerModule.updateAnswer(answerId, { title: 'Très Bien' });

        await answerModule.deleteAnswer(answerId);
        await questionModule.deleteQuestion(questionId);
        await surveyModule.deleteSurvey(surveyId);
    } catch (err) {
        console.error('Erreur:', err);
    }
})();
