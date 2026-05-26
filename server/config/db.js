const mongoose = require('mongoose');

async function connectDB(DB_URL) {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connection established!');
    }
    catch (err) {
        console.err(err);
    }
}
module.exports = connectDB;