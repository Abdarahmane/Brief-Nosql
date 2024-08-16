const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'abc_surveydb'; 

async function connectDB() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('MongoDB connected');
        return client;
    } catch (err) {
        console.error('MongoDB connection failed:', err);
        throw err;
    }
}

module.exports = connectDB;
