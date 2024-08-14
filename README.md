# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <https://github.com/CoachFofana/abc-survey-app.git>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```
# Fonctionnalités

1. Enquêtes (Surveys)

    Créer une enquête
    createSurvey(surveyData) : Crée une nouvelle enquête avec les données spécifiées.

    Lister toutes les enquêtes
    listSurveys() : Retourne une liste de toutes les enquêtes stockées dans la base de données.

    Obtenir une enquête par ID
    getSurveyById(id) : Retourne une enquête spécifique basée sur son ID.

    Mettre à jour une enquête
    updateSurvey(id, updateData) : Met à jour une enquête existante avec les nouvelles données.

    Supprimer une enquête
    deleteSurvey(id) : Supprime une enquête spécifique basée sur son ID.

2. Questions

    Créer une question
    createQuestion(questionData) : Crée une nouvelle question pour une enquête spécifique.

    Lister toutes les questions
    listQuestions() : Retourne une liste de toutes les questions dans la base de données.

    Obtenir une question par ID
    getQuestionById(id) : Retourne une question spécifique basée sur son ID.

    Mettre à jour une question
    updateQuestion(id, updateData) : Met à jour une question existante avec de nouvelles informations.

    Supprimer une question
    deleteQuestion(id) : Supprime une question spécifique basée sur son ID.

3. Réponses

    Créer une réponse
    createAnswer(answerData) : Crée une nouvelle réponse pour une question spécifique.

    Lister toutes les réponses
    listAnswers() : Retourne une liste de toutes les réponses dans la base de données.

    Obtenir une réponse par ID
    getAnswerById(id) : Retourne une réponse spécifique basée sur son ID.

    Mettre à jour une réponse
    updateAnswer(id, updateData) : Met à jour une réponse existante avec de nouvelles informations.

    Supprimer une réponse
    deleteAnswer(id) : Supprime une réponse spécifique basée sur son ID.


## Authors
Abdarahmane Ibrahima Demba