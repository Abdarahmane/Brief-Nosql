const connectDB = require('./config/database');
const surveysModule = require('./surveysModule');
const questionsModule = require('./questionsModule');
const answersModule = require('./answersModule');


async function main() {
    const client = await connectDB();
    const db = client.db('abc_surveydb');

    try {
        await runExamples(db);
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        await client.close();
        console.log("MongoDB connection closed.");
    }
}

async function runExamples(db) {
    await exampleSurveys(db);
    await exampleQuestions(db);
    await exampleAnswers(db);
}

async function exampleQuestions(db) {
    console.log("Managing Questions...");

    const question = {
        questionId: 1,
        surveyId: 1, 
        title: 'Comment évalueriez-vous notre service ?',
        type: 'rating',
        options: {
            minValue: 1,
            maxValue: 5,
            step: 1
        },
        answers: [
            { title: 'Très satisfait' },
            { title: 'Satisfait' },
            { title: 'Neutre' },
            { title: 'Insatisfait' },
            { title: 'Très insatisfait' }
        ]
    };

    await questionsModule.createQuestion(db, question);
    await questionsModule.readQuestionById(db, 1);
    await questionsModule.updateQuestion(db, 1, { title: 'Comment évalueriez-vous notre support client ?' });
    await questionsModule.deleteQuestion(db, 1);
}

async function exampleAnswers(db) {
    console.log("Managing Answers...");

    const answer = {
        answerId: 1,
        questionId: 1,
        title: 'Très satisfait'
    };

    
    await answersModule.createAnswer(db, answer);
    await answersModule.readAnswerById(db, 1);
    await answersModule.updateAnswer(db, 1, { title: 'Satisfait' });
    await answersModule.deleteAnswer(db, 1);
}

async function exampleSurveys(db) {
    console.log("Managing Surveys...");

    const survey = {
        surveyId: 1,
        name: 'Enquête de Satisfaction 001',
        description: 'Enquête visant à évaluer la satisfaction des clients concernant nos services.',
        createdAt: new Date().toISOString(),
        createdBy: {
            employeeName: 'Jane Smith',
            employeeRole: 'Responsable du service client'
        }
    };

 
    await surveysModule.createSurvey(db, survey);

    
    await surveysModule.listSurveys(db);
    await surveysModule.updateSurvey(db, 1, { name: 'Enquête de Satisfaction 002' });

    await surveysModule.deleteSurvey(db, 1);
}

main().catch(console.error);
