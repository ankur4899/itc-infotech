const tvSeriesModel = require('../models/tv-series-model');
const tvSeriesHelper = require('../helpers/tv-series-helper');
const tvSeriesExternalServiceHelper = require('../service/tv-series-external.service');

module.exports = {

    /**
     * Get Top 20 Episodes
     */
    getTopEpisodes: async (req, res, next) => {
        const seriesId = req.params.seriesId;

        //Check if Series already exists in database
        const isDataExist = await tvSeriesModel.findOne({ id: seriesId }, { _id: 0, episodes: 1, updatedDate: 1 }).catch((err) => { return next(err) });

        //Check for Fetch Data only weekly from TV Series API's
        if (isDataExist && Math.round(tvSeriesHelper.getDaysDifference(isDataExist.updatedDate) <= 7)) {
            delete isDataExist.updatedDate;
            return res.send({ "episodes": isDataExist.episodes })
        }

        //Get All Tv Season
        const tvDetails = await tvSeriesExternalServiceHelper.getSeriesById(seriesId).catch((err) => {
            return res.status(404).send({ error: { name: err.name, message: err.message } })
        });

        if (tvDetails && tvDetails.id) {
            const tvObj = {
                id: tvDetails.id,
                name: tvDetails.name,
                number_of_episodes: tvDetails.number_of_episodes,
                number_of_seasons: tvDetails.number_of_seasons,
                seasons: tvDetails.seasons,
                updatedDate: new Date(),
                episodes: []
            }

            //Get All Episodes of Season
            let isErrorOnFetchEpisodes = false;
            const getEpisodesOfAllSeason = await tvSeriesExternalServiceHelper.getAllSeasonEpisodes(seriesId, tvObj.seasons).catch((err) => {
                isErrorOnFetchEpisodes = true;
                return res.status(404).send({ error: { name: err.name, message: err.message } })
            });;

            if (!isErrorOnFetchEpisodes) {
                let episodes = []
                if (getEpisodesOfAllSeason) {
                    for (let i = 0; i < getEpisodesOfAllSeason.length; i++) {
                        for (let j = 0; j < getEpisodesOfAllSeason[i].episodes.length; j++) {
                            episodes.push(
                                {
                                    episodeName: getEpisodesOfAllSeason[i].episodes[j].name,
                                    averageVotes: getEpisodesOfAllSeason[i].episodes[j].vote_average * getEpisodesOfAllSeason[i].episodes[j].vote_count
                                });

                        }
                    }
                }
                //Sorting and taking only top 20 episodes
                tvObj.episodes = episodes.sort(tvSeriesHelper.compare).slice(0, 20);

                if (isDataExist) {
                    //Update exisiting data
                    const data = await tvSeriesModel.findOneAndUpdate({ id: tvDetails.id }, tvObj).catch((err) => { return next(err) });
                    if (data) {
                        res.json({ "episodes": data.episodes });
                    }
                }
                else {
                    //Create New Record
                    const data = await tvSeriesModel.create(tvObj).catch((err) => { return next(err) });
                    if (data) {
                        res.json({ "episodes": data.episodes });
                    }
                }
            }
        }
    }
}