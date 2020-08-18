const mongoose = require('mongoose');
const config = require('../config');
module.exports = {
    connectDb: () => {
        // Connecting with mongo db
        mongoose.Promise = global.Promise;
        mongoose.connect(config.DB_URL, {
            useNewUrlParser: true,
            useFindAndModify: false
        }).then(() => {
            console.log('Database sucessfully connected');
        },
            error => {
                console.log('Database could not connected: ' + error)
            }
        )
    }
};