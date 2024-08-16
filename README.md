Survey App

Description

Survey App est une application JavaScript qui permet de gérer des enquêtes de satisfaction client. Elle utilise MongoDB pour stocker les données et permet de réaliser des opérations CRUD (Create, Read, Update, Delete) sur les enquêtes, les questions, et les réponses associées.
Prérequis

Avant de commencer, on installe les éléments suivants :

    Node.js (version 12 ou supérieure)
    MongoDB (version 4.0 ou supérieure)

Installation

 pour configurer le projet sur  machine locale :

    Clonez le repository :

    bash

git clone https://github.com/CoachFofana/abc-survey-app.git

Accédez au dossier du projet :

bash

cd abc-survey-app

Installez les dépendances :

bash

    npm install

    Configurez la base de données :
        Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
        Mettez à jour les paramètres de connexion dans config/database.js.

Utilisation

Pour démarrer l'application, exécutez la commande suivante :

bash

npm start

Fonctionnalités
1. Gestion des Enquêtes (Surveys)

    Créer une enquête :

    

createSurvey(surveyData)

Crée une nouvelle enquête avec les données spécifiées.

    Paramètre : surveyData (Object) – Les informations de l'enquête à créer.
    Retour : ID de l'enquête créée (String).


const surveyId = await surveyModule.createSurvey({
    _id: 'survey_001',
    name: 'Customer Feedback Survey',
    description: 'Collecter les avis des clients',
    createdBy: {
        employeeName: 'Jane Doe',
        employeeRole: 'Supervisor'
    }
});

Lister toutes les enquêtes :



listSurveys()

Retourne une liste de toutes les enquêtes stockées dans la base de données.

    Retour : Liste des enquêtes (Array).



const surveys = await surveyModule.listSurveys();

Obtenir une enquête par ID :

getSurveyById(id)

Retourne une enquête spécifique basée sur son ID.

    Paramètre : id (String) – ID de l'enquête.
    Retour : Détails de l'enquête (Object).


const survey = await surveyModule.getSurveyById('survey_001');

Mettre à jour une enquête :


updateSurvey(id, updateData)

Met à jour une enquête existante avec les nouvelles données spécifiées.

    Paramètres :
        id (String) – ID de l'enquête à mettre à jour.
        updateData (Object) – Nouvelles informations à appliquer.
    Retour : Détails de l'enquête mise à jour (Object).


const updatedSurvey = await surveyModule.updateSurvey('survey_001', { name: 'Updated Survey Name' });

Supprimer une enquête :


deleteSurvey(id)

Supprime une enquête spécifique basée sur son ID.

    Paramètre : id (String) – ID de l'enquête à supprimer.




    await surveyModule.deleteSurvey('survey_001');

2. Gestion des Questions

    Créer une question :

    

createQuestion(questionData)

Crée une nouvelle question pour une enquête spécifique.

    Paramètre : questionData (Object) – Les informations de la question à créer.
    Retour : ID de la question créée (String).




const questionId = await questionModule.createQuestion({
    _id: 'question_001',
    surveyId: surveyId,
    title: 'Comment évaluez-vous notre service ?',
    type: 'multipleChoice',
    options: ['Excellent', 'Bon', 'Moyen', 'Mauvais'],
    allowMultipleSelections: false
});

Lister toutes les questions :



listQuestions()

Retourne une liste de toutes les questions dans la base de données.

    Retour : Liste des questions (Array).




const questions = await questionModule.listQuestions();

Obtenir une question par ID :



getQuestionById(id)

Retourne une question spécifique basée sur son ID.

    Paramètre : id (String) – ID de la question.
    Retour : Détails de la question (Object).




const question = await questionModule.getQuestionById('question_001');

Mettre à jour une question :



updateQuestion(id, updateData)

Met à jour une question existante avec de nouvelles informations.

    Paramètres :
        id (String) – ID de la question à mettre à jour.
        updateData (Object) – Nouvelles informations à appliquer.
    Retour : Détails de la question mise à jour (Object).




const updatedQuestion = await questionModule.updateQuestion('question_001', { title: 'Comment évaluez-vous notre service global ?' });

Supprimer une question :



deleteQuestion(id)

Supprime une question spécifique basée sur son ID.

    Paramètre : id (String) – ID de la question à supprimer.




    await questionModule.deleteQuestion('question_001');

3. Gestion des Réponses

    Créer une réponse :

    

createAnswer(answerData)

Crée une nouvelle réponse pour une question spécifique.

    Paramètre : answerData (Object) – Les informations de la réponse à créer.
    Retour : ID de la réponse créée (String).




const answerId = await answerModule.createAnswer({
    _id: 'answer_001',
    questionId: questionId,
    title: 'Excellent'
});

Lister toutes les réponses :



listAnswers()

Retourne une liste de toutes les réponses dans la base de données.

    Retour : Liste des réponses (Array).




const answers = await answerModule.listAnswers();

Obtenir une réponse par ID :



getAnswerById(id)

Retourne une réponse spécifique basée sur son ID.

    Paramètre : id (String) – ID de la réponse.
    Retour : Détails de la réponse (Object).




const answer = await answerModule.getAnswerById('answer_001');

Mettre à jour une réponse :



updateAnswer(id, updateData)

Met à jour une réponse existante avec de nouvelles informations.

    Paramètres :
        id (String) – ID de la réponse à mettre à jour.
        updateData (Object) – Nouvelles informations à appliquer.
    Retour : Détails de la réponse mise à jour (Object).




const updatedAnswer = await answerModule.updateAnswer('answer_001', { title: 'Très bon' });

Supprimer une réponse :



deleteAnswer(id)

Supprime une réponse spécifique basée sur son ID.

    Paramètre : id (String) – ID de la réponse à supprimer.




    await answerModule.deleteAnswer('answer_001');

Auteurs

   [ Abdarahmane Ibrahima Demba](https://github.com/Abdarahmane/Brief-Nosql.git)