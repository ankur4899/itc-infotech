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

    },

    //Sort based on average votes
    compare: (a, b) => {
        const averageVoteA = a.averageVotes
        const averageVoteB = b.averageVotes

        let comparison = 0;
        if (averageVoteA > averageVoteB) {
            comparison = 1;
        } else if (averageVoteA < averageVoteB) {
            comparison = -1;
        }
        return comparison * -1;
    },

    //Get Days Difference between two dates
    getDaysDifference: (updatedDate) => {
        var date1 = new Date();
        var date2 = new Date(updatedDate);
        var Difference_In_Time = date1.getTime() - date2.getTime();

        // To calculate the no. of days between two dates 
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Difference_In_Days;
    }
}