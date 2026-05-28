const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

async function connectDB(DB_URL) {
    try {
        console.log("Connecting...");
        
        await mongoose.connect(DB_URL, {
            family: 4
        });

        console.log('Connection established!');
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;