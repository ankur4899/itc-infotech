const rp = require('request-promise');
const config = require('../config');

module.exports = {
    /**
     * Get Series Information by id
     */
    getSeriesById: (id) => {
        seriesData = '';
        var options = {
            uri: `${config.TV_URL}/${id}`,
            qs: {
                api_key: config.API_KEY,
                language: config.LANGUAGE
            },
            json: true
        };

        return rp(options)
    },

    /**
     * Get All Episodes of a Series
     */
    getAllSeasonEpisodes: (tvId, seasons) => {
        let promises = [];
        for (let i = 0; i < seasons.length; i++) {
            var options = {
                uri: `${config.TV_URL}/${tvId}/season/${seasons[i].season_number}`,
                qs: {
                    api_key: config.API_KEY,
                    language: config.LANGUAGE
                },
                json: true
            };
            rp(options)
            promises.push(rp(options));
        }

        return Promise.all(promises);

    }
}