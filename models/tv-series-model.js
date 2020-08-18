const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let TvSeries = new Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    },
    number_of_seasons: {
        type: Number
    },
    number_of_episodes: {
        type: Number
    },
    seasons: {
        type: mongoose.SchemaTypes.Mixed
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    updatedDate: {
        type: Date,
        default: Date.now()
    },
    episodes: {
        type: mongoose.SchemaTypes.Mixed,
    },
}, {
    collection: 'tvSeries'
})

module.exports = mongoose.model('tvSeries', TvSeries)