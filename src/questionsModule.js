
async function createQuestion(db, question) {
    const surveyExists = await db.collection('surveys').findOne({ surveyId: question.surveyId });
    if (!surveyExists) {
        console.log("Le surveyId fourni n'existe pas.");
    }

    const existingQuestion = await db.collection('questions').findOne({ questionId: question.questionId });
    if (existingQuestion) {
        console.log("L'ID de la question existe déjà.");
    }

    const result = await db.collection('questions').insertOne(question);
    console.log('Question Created:', result.insertedId);
    return result.insertedId;
}

async function readQuestionById(db, id) {
    const question = await db.collection('questions').findOne({ questionId: id });
    console.log('Question Found:', question);
    return question;
}

async function updateQuestion(db, id, newDetails) {
    const result = await db.collection('questions').findOneAndUpdate(
        { questionId: id },
        { $set: newDetails },
        { returnOriginal: false }
    );
    if (result.value) {
        console.log('Question Updated:', result.value);
        return result.value;
    }
    console.log('Question Not Found for Update');
    return null;
}

async function deleteQuestion(db, id) {
    const result = await db.collection('questions').deleteOne({ questionId: id });
    if (result.deletedCount > 0) {
        console.log('Question Deleted:', id);
    } else {
        console.log('Question Not Found for Deletion');
    }
}

module.exports = {
    createQuestion,
    readQuestionById,
    updateQuestion,
    deleteQuestion,
};
