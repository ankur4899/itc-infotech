const mongoose = require('mongoose');
const config = require('../config');
module.exports = {
    connectDb: () => {
        // Connecting with mongo db
        mongoose.Promise = global.Promise;

        if (process.env.NODE_ENV === 'test') {
            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);
            mockgoose.prepareStorage().then(() => {
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
            }).catch((err) => {
                console.log('Error from mockgoose: ' + error)
            })
        } else {
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

    },
    disconnectDb: () => {
        mongoose.disconnect();
    }
};