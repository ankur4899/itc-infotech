var express = require('express');
var router = express.Router();

var seriesController = require('../controllers/tv-series-controller');

/* GET Top Episodes of Series. */
router.get('/:seriesId', seriesController.getTopEpisodes);


module.exports = router;
