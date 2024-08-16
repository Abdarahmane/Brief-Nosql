let answers = [];

async function createAnswer(answer) {
    answers.push(answer);
    console.log('Answer Created:', answer);
    return answer;
}

async function readAnswerById(id) {
    const answer = answers.find(answer => answer.answerId === id);
    console.log('Answer Found:', answer);
    return answer;
}

async function updateAnswer(id, newDetails) {
    const index = answers.findIndex(answer => answer.answerId === id);
    if (index !== -1) {
        answers[index] = { ...answers[index], ...newDetails };
        console.log('Answer Updated:', answers[index]);
        return answers[index];
    }
    console.log('Answer Not Found for Update');
    return null;
}

async function deleteAnswer(id) {
    const initialLength = answers.length;
    answers = answers.filter(answer => answer.answerId !== id);
    if (answers.length < initialLength) {
        console.log('Answer Deleted:', id);
    } else {
        console.log('Answer Not Found for Deletion');
    }
}

module.exports = {
    createAnswer,
    readAnswerById,
    updateAnswer,
    deleteAnswer
};
