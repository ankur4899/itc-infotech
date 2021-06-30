const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema for Campaigns
 */
let campaignsSchema = new Schema({
    platform: "instagram",
    campaign_hashtag: String,
    total_posts: Number,
    unique_contributors: Number,
    potential_impressions: Number,
    total_engagement: Number,
    images_post: Number,
    videos_post: Number,
    carousel_post: Number,
    associated_hashtags: Number,
    total_likes: mongoose.Types.Decimal128,
    total_comments: mongoose.Types.Decimal128,
    likes_post_ratio: mongoose.Types.Decimal128,
    comments_post_ratio: mongoose.Types.Decimal128,
    audience_gender: [{
        "male": mongoose.Types.Decimal128,
        "female": mongoose.Types.Decimal128
    }],
    audience_age: [{
        "13-17": mongoose.Types.Decimal128,
        "18-24": mongoose.Types.Decimal128,
        "25-34": mongoose.Types.Decimal128,
        "35-44": mongoose.Types.Decimal128,
        "45-54": mongoose.Types.Decimal128,
        "55-64": mongoose.Types.Decimal128,
        "65+": 0
    }],

    audience_language: [{
        "language1": mongoose.Types.Decimal128,
        "language2": mongoose.Types.Decimal128,
        "language3": mongoose.Types.Decimal128,
        "language4": mongoose.Types.Decimal128,
        "language5": mongoose.Types.Decimal128,
        "others": mongoose.Types.Decimal128
    }],

    audience_location: [{
        "country1": mongoose.Types.Decimal128,
        "country2": mongoose.Types.Decimal128,
        "country3": mongoose.Types.Decimal128,
        "country4": mongoose.Types.Decimal128,
        "country5": mongoose.Types.Decimal128,
        "others": mongoose.Types.Decimal128
    }]
}, {
    collection: 'campaigns'
})

module.exports = mongoose.model('campaigns', campaignsSchema)