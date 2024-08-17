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
    git clone https://github.com/Abdarahmane/Brief-Nosql.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd abc-survey-app
    ```

3. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

4. **Utilisation :**

    Pour démarrer l'application, exécutez la commande suivante :

    ```bash
    node ./src/index.js
    ```

## Fonctionnalités

### 1. Gestion des Enquêtes (Surveys)

- **Fonction :** `createSurvey(db, survey)`

  **Description :** Crée une nouvelle enquête dans la base de données.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `survey` (Object) : Un objet contenant les détails de l'enquête.
    - `surveyId` (Number) : ID unique de l'enquête.
    - `name` (String) : Nom de l'enquête.
    - `description` (String) : Description de l'enquête.
    - `createdAt` (String) : Date et heure de création.
    - `createdBy` (Object) : Informations sur le créateur.
      - `employeeName` (String) : Nom de l'employé ayant créé l'enquête.
      - `employeeRole` (String) : Rôle de l'employé.
    - `questions` (Array) : Liste des questions associées à l'enquête.
  **Retour :** ID de l'enquête créée.

  **Exemple :**

  ```javascript
  const survey = {
    surveyId: 1,
    name: 'Enquête de Satisfaction 001',
    description: 'Enquête visant à évaluer la satisfaction des clients concernant nos services.',
    createdAt: new Date().toISOString(),
    createdBy: {
      employeeName: 'Jane Smith',
      employeeRole: 'Responsable du service client'
    },
    questions: []
  };

  await surveysModule.createSurvey(db, survey);

    Fonction : listSurveys(db)

    Description : Liste toutes les enquêtes existantes dans la base de données.
    Paramètres :
        db (Object) : Instance de la base de données MongoDB.
        Retour : Tableau des enquêtes.

    Exemple :

    
const surveys = await surveysModule.listSurveys(db);
console.log(surveys);

Fonction : updateSurvey(db, id, newDetails)

Description : Met à jour les détails d'une enquête existante.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de l'enquête à mettre à jour.
    newDetails (Object) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
        name (String) : (Optionnel) Nouveau nom de l'enquête.
        description (String) : (Optionnel) Nouvelle description de l'enquête.
        createdBy (Object) : (Optionnel) Nouvelles informations sur le créateur.
        Retour : Enquête mise à jour ou null si l'enquête n'existe pas.

Exemple :


const updatedSurvey = await surveysModule.updateSurvey(db, 1, { name: 'Enquête de Satisfaction 002' });
console.log(updatedSurvey);

Fonction : deleteSurvey(db, id)

Description : Supprime une enquête par son ID.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de l'enquête à supprimer.
    Retour : Aucun.

Exemple :


    await surveysModule.deleteSurvey(db, 1);
    console.log("Survey deleted");

2. Gestion des Questions (Questions)

    Fonction : createQuestion(db, question)

    Description : Crée une nouvelle question dans la base de données.
    Paramètres :
        db (Object) : Instance de la base de données MongoDB.
        question (Object) : Un objet contenant les détails de la question.
            questionId (Number) : ID unique de la question.
            text (String) : Texte de la question.
            type (String) : Type de question (ex : choix multiples, évaluation).
            options (Object) : Options pour les questions à choix multiples.
                minValue (Number) : Valeur minimale.
                maxValue (Number) : Valeur maximale.
                step (Number) : Pas entre les valeurs.
            answers (Array) : Liste des réponses possibles.
            Retour : ID de la question créée.

    Exemple :


const question = {
  questionId: 1,
  text: 'Comment évalueriez-vous notre service ?',
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

Fonction : readQuestionById(db, id)

Description : Lit une question par son ID.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de la question.
    Retour : La question correspondante ou null si la question n'existe pas.

Exemple :


const question = await questionsModule.readQuestionById(db, 1);
console.log(question);

Fonction : updateQuestion(db, id, newDetails)

Description : Met à jour les détails d'une question existante.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de la question à mettre à jour.
    newDetails (Object) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
        text (String) : (Optionnel) Nouveau texte de la question.
        type (String) : (Optionnel) Nouveau type de question.
        options (Object) : (Optionnel) Nouvelles options pour la question.
        Retour : Question mise à jour ou null si la question n'existe pas.

Exemple :


await questionsModule.updateQuestion(db, 1, { text: 'Comment évalueriez-vous notre support client ?' });

Fonction : deleteQuestion(db, id)

Description : Supprime une question par son ID.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de la question à supprimer.
    Retour : Aucun.

Exemple :


    await questionsModule.deleteQuestion(db, 1);
    console.log("Question deleted");

3. Gestion des Réponses (Answers)

    Fonction : createAnswer(db, answer)

    Description : Crée une nouvelle réponse à une question.
    Paramètres :
        db (Object) : Instance de la base de données MongoDB.
        answer (Object) : Un objet contenant les détails de la réponse.
            answerId (Number) : ID unique de la réponse.
            questionId (Number) : ID de la question associée.
            title (String) : Réponse donnée.
            Retour : ID de la réponse créée.

    Exemple :


const answer = {
  answerId: 1,
  questionId: 1,
  title: 'Très satisfait'
};

await answersModule.createAnswer(db, answer);

Fonction : readAnswerById(db, id)

Description : Lit une réponse par son ID.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de la réponse.
    Retour : La réponse correspondante ou null si la réponse n'existe pas.

Exemple :



const answer = await answersModule.readAnswerById(db, 1);
console.log(answer);

Fonction : updateAnswer(db, id, newDetails)

Description : Met à jour les détails d'une réponse existante.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de la réponse à mettre à jour.
    newDetails (Object) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
        title (String) : (Optionnel) Nouvelle réponse.
        questionId (Number) : (Optionnel) Nouveau ID de la question associée.
        Retour : Réponse mise à jour ou null si la réponse n'existe pas.

Exemple :


await answersModule.updateAnswer(db, 1, { title: 'Satisfait' });

Fonction : deleteAnswer(db, id)

Description : Supprime une réponse par son ID.
Paramètres :

    db (Object) : Instance de la base de données MongoDB.
    id (Number) : ID de la réponse à supprimer.
    Retour : Aucun.

Exemple :


    await answersModule.deleteAnswer(db, 1);
    console.log("Answer deleted");

Authors

 [Abdrahmane Ibrahima Demba](https://github.com/Abdarahmane)
