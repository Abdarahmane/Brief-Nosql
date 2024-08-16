let questions = [];

async function createQuestion(question) {
    questions.push(question);
    console.log('Question Created:', question);
    return question;
}

async function readQuestionById(id) {
    const question = questions.find(question => question.questionId === id);
    console.log('Question Found:', question);
    return question;
}

async function updateQuestion(id, newDetails) {
    const index = questions.findIndex(question => question.questionId === id);
    if (index !== -1) {
        questions[index] = { ...questions[index], ...newDetails };
        console.log('Question Updated:', questions[index]);
        return questions[index];
    }
    console.log('Question Not Found for Update');
    return null;
}

async function deleteQuestion(id) {
    const initialLength = questions.length;
    questions = questions.filter(question => question.questionId !== id);
    if (questions.length < initialLength) {
        console.log('Question Deleted:', id);
    } else {
        console.log('Question Not Found for Deletion');
    }
}


module.exports = {
    createQuestion,
    readQuestionById,
    updateQuestion,
    deleteQuestion
};
