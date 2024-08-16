let surveys = [];

async function createSurvey(survey) {
    surveys.push(survey);
    console.log('Survey Created:', survey);
    return survey;
}

async function listSurveys() {
    console.log('Listing Surveys:', surveys);
    return surveys;
}

async function updateSurvey(id, newDetails) {
    const index = surveys.findIndex(survey => survey.surveyId === id);
    if (index !== -1) {
        surveys[index] = { ...surveys[index], ...newDetails };
        console.log('Survey Updated:', surveys[index]);
        return surveys[index];
    }
    console.log('Survey Not Found for Update');
    return null;
}

async function deleteSurvey(id) {
    const initialLength = surveys.length;
    surveys = surveys.filter(survey => survey.surveyId!== id);
    if (surveys.length < initialLength) {
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
