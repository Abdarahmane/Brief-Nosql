async function createAnswer(db, answer) {
    // Vérifier si la question référencée existe
    const questionExists = await db.collection('questions').findOne({ questionId: answer.questionId });
    if (!questionExists) {
        throw new Error("Le questionId fourni n'existe pas.");
    }

    // Vérifier si l'ID de la réponse existe déjà
    const existingAnswer = await db.collection('answers').findOne({ answerId: answer.answerId });
    if (existingAnswer) {
        throw new Error("L'ID de la réponse existe déjà.");
    }

    const result = await db.collection('answers').insertOne(answer);
    console.log('Answer Created:', result.insertedId);
    return result.insertedId;
}


async function readAnswerById(db, id) {
    const answer = await db.collection('answers').findOne({ answerId: id });
    console.log('Answer Found:', answer);
    return answer;
}


async function updateAnswer(db, id, newDetails) {
    const result = await db.collection('answers').findOneAndUpdate(
        { answerId: id },
        { $set: newDetails },
        { returnOriginal: false }
    );
    if (result.value) {
        console.log('Answer Updated:', result.value);
        return result.value;
    }
    console.log('Answer Not Found for Update');
    return null;
}


async function deleteAnswer(db, id) {
    const result = await db.collection('answers').deleteOne({ answerId: id });
    if (result.deletedCount > 0) {
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






// async function createAnswer(db, answer) {
//     const result = await db.collection('answers').insertOne(answer);
//     console.log('Answer Created:', result.insertedId);
//     return result.insertedId;
// }

// async function readAnswerById(db, id) {
//     const answer = await db.collection('answers').findOne({ answerId: id });
//     console.log('Answer Found:', answer);
//     return answer;
// }

// async function updateAnswer(db, id, newDetails) {
//     const result = await db.collection('answers').findOneAndUpdate(
//         { answerId: id },
//         { $set: newDetails },
//         { returnOriginal: false }
//     );
//     if (result.value) {
//         console.log('Answer Updated:', result.value);
//         return result.value;
//     }
//     console.log('Answer Not Found for Update');
//     return null;
// }

// async function deleteAnswer(db, id) {
//     const result = await db.collection('answers').deleteOne({ answerId: id });
//     if (result.deletedCount > 0) {
//         console.log('Answer Deleted:', id);
//     } else {
//         console.log('Answer Not Found for Deletion');
//     }
// }


