process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');

const app = require('../../../app');

const conn = require('../../../database/db');
const tvSeriesModel = require('../../../models/tv-series-model');



describe('GET /topEpisodes/:seriesId', () => {
    before((done) => {
        conn.connectDb();
        done();
    })

    after((done) => {
        conn.disconnectDb();
        done();
    })

    it('OK, Get top 20 episodes', async (done) => {
        const seriesId = 1;
        request(app).get('/topEpisodes/1').then(async (res) => {

            const isDataExist = await this.getData();
            //console.log("isDataexist", isDataExist)
            done();
        });

    })
})
