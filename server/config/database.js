//Mongo DB connection

'use strict'

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    mongoose.set("strictQuery", false);

    try {
        await mongoose.connect(db);
        console.log('Connected to Mongodb!!!.....');
        
        
    } catch (err) {
        console.error(err.message);

        //Exit process with failure
        process.exit(1);
        
    }
}

module.exports = connectDB;
