var express = require('express');
var path = require('path');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./database/db');

//MongoDB connection
dbConnection.connectDb();

var indexRouter = require('./routes/index');
var tvSeriesRouter = require('./routes/tv-series-routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/topEpisodes', tvSeriesRouter);

module.exports = app;
