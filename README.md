# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Get, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <https://github.com/Abdarahmane/Brief-Nosql.git>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd abc-survey-app
    ```


3. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

4. **Utilisation:**

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start

```
# Fonctionnalités

1.**Gestion des Enquêtes (Surveys)**

Ce module permet de gérer les enquêtes de satisfaction des clients.
      Fonction : createSurvey(survey)

Description : Crée une nouvelle enquête.

    
  Paramètres :

- survey (Objet) : Un objet contenant les détails de l'enquête.

            surveyId (Number) : ID unique de l'enquête.
            name (String) : Nom de l'enquête.
            description (String) : Description de l'enquête.
            createdBy (String) : Nom du créateur de l'enquête.

    Retour : L'enquête créée.

      Exemple :

       const survey = {
          surveyId: 1,
              name: 'Customer Satisfaction Survey',
       description: 'A survey to measure customer satisfaction.',
         createdBy: 'Admin'
      };

      await surveysModule.createSurvey(survey);

Fonction : listSurveys()

    Description : Liste toutes les enquêtes existantes.

    Paramètres : Aucun.

 Retour : Tableau d'enquêtes.

Exemple :


    const surveys = await surveysModule.listSurveys();
    console.log(surveys);

Fonction : updateSurvey(id, newDetails)

    Description : Met à jour les détails d'une enquête.

    Paramètres :
               id (Number) : ID de l'enquête à mettre à jour.
        newDetails (Objet) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
             name (String) : (Optionnel) Nouveau nom de l'enquête.
      description (String) : (Optionnel) Nouvelle description de l'enquête.
        createdBy (String) : (Optionnel) Nouveau nom du créateur.

 Retour : L'enquête mise à jour ou null si l'enquête n'existe pas.

Exemple :

    const updatedSurvey = await surveysModule.updateSurvey(1, { name: 'Updated Survey Name' });
    console.log(updatedSurvey);

Fonction : deleteSurvey(id)

 Description : Supprime une enquête par son ID.

    Paramètres :
        id (Number) : ID de l'enquête à supprimer.

    Retour : Aucun.

Exemple :

    await surveysModule.deleteSurvey(1);
    console.log("Survey deleted");
    
2.**Gestion des Questions (Questions)**

Ce module permet de gérer les questions des enquêtes.
Fonction : createQuestion(question)

Description : Crée une nouvelle question.

    Paramètres :
        question (Objet) : Un objet contenant les détails de la question.
            questionId (Number) : ID unique de la question.
            text (String) : Texte de la question.
            type (String) : Type de question (ex : choix multiples).
            options (Array) : Options de réponse disponibles (pour les questions à choix multiples).

    Retour : Aucun.

Exemple :


    const question = {
        questionId: 1,
        text: 'How satisfied are you with our service?',
        type: 'multiple-choice',
        options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very dissatisfied']
    };

    await questionsModule.createQuestion(question);

Fonction : readQuestionById(id)

    Description : Lit une question par son ID.

    Paramètres :
        id (Number) : ID de la question.

    Retour : La question correspondante ou undefined si la question n'existe pas.

Exemple :

    const question = await questionsModule.readQuestionById(1);
    console.log(question);

Fonction : updateQuestion(id, newDetails)

    Description : Met à jour les détails d'une question.

    Paramètres :
        id (Number) : ID de la question à mettre à jour.
        newDetails (Objet) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
            text (String) : (Optionnel) Nouveau texte de la question.
            type (String) : (Optionnel) Nouveau type de question.
            options (Array) : (Optionnel) Nouvelles options pour la question.

    Retour : Aucun.

Exemple :

    await questionsModule.updateQuestion(1, { text: 'How would you rate our service?' });

Fonction : deleteQuestion(id)

    Description : Supprime une question par son ID.

    Paramètres :
        id (Number) : ID de la question à supprimer.

    Retour : Aucun.

Exemple :

    await questionsModule.deleteQuestion(1);
    console.log("Question deleted");

3.**Gestion des Réponses (Answers)**

Ce module permet de gérer les réponses aux questions des enquêtes.

Fonction : createAnswer(answer)

    Description : Crée une nouvelle réponse à une question.

    Paramètres :
        answer (Objet) : Un objet contenant les détails de la réponse.
            answerId (Number) : ID unique de la réponse.
            questionId (Number) : ID de la question associée.
            response (String) : Réponse donnée.
            userId (String) : ID de l'utilisateur ayant répondu.

    Retour : Aucun.

    Exemple :

    const answer = {
        answerId: 1,
        questionId: 1,
        response: 'Very satisfied',
        userId: 'user123'
    };

    await answersModule.createAnswer(answer);

Fonction : readAnswerById(id)

    Description : Lit une réponse par son ID.

    Paramètres :
        id (Number) : ID de la réponse.

    Retour : La réponse correspondante ou undefined si la réponse n'existe pas.

    Exemple :

    const answer = await answersModule.readAnswerById(1);
    console.log(answer);

Fonction : updateAnswer(id, newDetails)

    Description : Met à jour les détails d'une réponse.

    Paramètres :
        id (Number) : ID de la réponse à mettre à jour.
        newDetails (Objet) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
            response (String) : (Optionnel) Nouvelle réponse.
            questionId (Number) : (Optionnel) Nouveau ID de la question associée.
            userId (String) : (Optionnel) Nouveau ID de l'utilisateur ayant répondu.

    Retour : Aucun.

Exemple :

    await answersModule.updateAnswer(1, { response: 'Satisfied' });

Fonction : deleteAnswer(id)

    Description : Supprime une réponse par son ID.

    Paramètres :
        id (Number) : ID de la réponse à supprimer.

    Retour : Aucun.

Exemple :

      await answersModule.deleteAnswer(1);
console.log("Answer deleted");

# Authors

[Abdrahmane Ibrahima Demba ](https://github.com/Abdarahmane/Brief-Nosql.git)