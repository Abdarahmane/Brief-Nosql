# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Get, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :


# Project Title

A brief description of what this project does and who it's for

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/Abdarahmane/Brief-Nosql.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
     cd abc-survey-app
    ```
3. **Installation de Dépendance :**  

       npm install

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez à jour les paramètres de connexion dans `config/database.js`.

5. **Utilisation :**

    Pour démarrer l'application, exécutez la commande suivante :

    ```bash
       npm start
    ```

## Fonctionnalités

### 1. Gestion des Enquêtes (Surveys)

- **Fonction :** `createSurvey(db, survey)`

  Crée une nouvelle enquête dans la base de données.  
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

- **Fonction :** `listSurveys(db)`

  Liste toutes les enquêtes existantes dans la base de données.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.  
  **Retour :** Tableau des enquêtes.

- **Fonction :** `updateSurvey(db, id, newDetails)`

  Met à jour les détails d'une enquête existante.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de l'enquête à mettre à jour.
  - `newDetails` (Object) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
    - `name` (String) : (Optionnel) Nouveau nom de l'enquête.
    - `description` (String) : (Optionnel) Nouvelle description de l'enquête.
    - `createdBy` (Object) : (Optionnel) Nouvelles informations sur le créateur.  
  **Retour :** Enquête mise à jour ou null si l'enquête n'existe pas.

- **Fonction :** `deleteSurvey(db, id)`

  Supprime une enquête par son ID.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de l'enquête à supprimer.  
  **Retour :** Aucun.

### 2. Gestion des Questions (Questions)

- **Fonction :** `createQuestion(db, question)`

  Crée une nouvelle question dans la base de données.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `question` (Object) : Un objet contenant les détails de la question.
    - `questionId` (Number) : ID unique de la question.
    - `text` (String) : Texte de la question.
    - `type` (String) : Type de question (ex : choix multiples, évaluation).
    - `options` (Object) : Options pour les questions à choix multiples.
      - `minValue` (Number) : Valeur minimale.
      - `maxValue` (Number) : Valeur maximale.
      - `step` (Number) : Pas entre les valeurs.
    - `answers` (Array) : Liste des réponses possibles.  
  **Retour :** ID de la question créée.

- **Fonction :** `readQuestionById(db, id)`

  Lit une question par son ID.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de la question.  
  **Retour :** La question correspondante ou null si la question n'existe pas.

- **Fonction :** `updateQuestion(db, id, newDetails)`

  Met à jour les détails d'une question existante.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de la question à mettre à jour.
  - `newDetails` (Object) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
    - `text` (String) : (Optionnel) Nouveau texte de la question.
    - `type` (String) : (Optionnel) Nouveau type de question.
    - `options` (Object) : (Optionnel) Nouvelles options pour la question.  
  **Retour :** Question mise à jour ou null si la question n'existe pas.

- **Fonction :** `deleteQuestion(db, id)`

  Supprime une question par son ID.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de la question à supprimer.  
  **Retour :** Aucun.

### 3. Gestion des Réponses (Answers)

- **Fonction :** `createAnswer(db, answer)`

  Crée une nouvelle réponse à une question.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `answer` (Object) : Un objet contenant les détails de la réponse.
    - `answerId` (Number) : ID unique de la réponse.
    - `questionId` (Number) : ID de la question associée.
    - `title` (String) : Réponse donnée.  
  **Retour :** ID de la réponse créée.

- **Fonction :** `readAnswerById(db, id)`

  Lit une réponse par son ID.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de la réponse.  
  **Retour :** La réponse correspondante ou null si la réponse n'existe pas.

- **Fonction :** `updateAnswer(db, id, newDetails)`

  Met à jour les détails d'une réponse existante.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de la réponse à mettre à jour.
  - `newDetails` (Object) : Un objet contenant les nouvelles valeurs des propriétés à mettre à jour.
    - `title` (String) : (Optionnel) Nouvelle réponse.
    - `questionId` (Number) : (Optionnel) Nouveau ID de la question associée.  
  **Retour :** Réponse mise à jour ou null si la réponse n'existe pas.

- **Fonction :** `deleteAnswer(db, id)`

  Supprime une réponse par son ID.  
  **Paramètres :**
  - `db` (Object) : Instance de la base de données MongoDB.
  - `id` (Number) : ID de la réponse à supprimer.  
  **Retour :** Aucun.

## Auteur

[Abdarahmane Ibrahima Demba](https://github.com/Abdarahmane)







