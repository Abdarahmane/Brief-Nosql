// surveysModule.js

async function createSurvey(db, survey) {
    const existingSurvey = await db.collection('surveys').findOne({ surveyId: survey.surveyId });
    if (existingSurvey) {
        throw new Error("L'ID de l'enquête existe déjà.");
    }

    const result = await db.collection('surveys').insertOne(survey);
    console.log('Survey Created:', result.insertedId);
    return result.insertedId;
}

async function listSurveys(db) {
    const surveys = await db.collection('surveys').find().toArray();
    console.log('Listing Surveys:', surveys);
    return surveys;
}

async function updateSurvey(db, id, newDetails) {
    const result = await db.collection('surveys').findOneAndUpdate(
        { surveyId: id },
        { $set: newDetails },
        { returnOriginal: false }
    );
    if (result.value) {
        console.log('Survey Updated:', result.value);
        return result.value;
    }
    console.log('Survey Not Found for Update');
    return null;
}

async function deleteSurvey(db, id) {
    const result = await db.collection('surveys').deleteOne({ surveyId: id });
    if (result.deletedCount > 0) {
        console.log('Survey Deleted:', id);
    } else {
        console.log('Survey Not Found for Deletion');
    }
}

module.exports = {
    createSurvey,
    listSurveys,
    updateSurvey,
    deleteSurvey
};
