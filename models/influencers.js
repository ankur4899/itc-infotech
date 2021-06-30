const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema for Influencers
 */
let influencersSchema = new Schema({
    platform: "instagram",
    username: String,
    profile_name: String,
    profile_picture_url: String,
    followers: Number,
    following: Number,
    is_private: Boolean,
    is_verified: Boolean,
    profile_country: String,
    biography: String,
    website: String,
    followers_following_ratio: Number,
    total_engagement: Number,
    engagement_rate: Number,
    engagement_rate_image: mongoose.Types.Decimal128,
    engagement_rate_video: mongoose.Types.Decimal128,
    engagement_rate_album: mongoose.Types.Decimal128,
    total_likes: Number,
    likes_per_post: mongoose.Types.Decimal128,
    likes_per_post_image: mongoose.Types.Decimal128,
    likes_per_post_video: mongoose.Types.Decimal128,
    likes_per_post_album: mongoose.Types.Decimal128,
    total_comments: Number,
    comments_per_post: mongoose.Types.Decimal128,
    comments_per_post_image: mongoose.Types.Decimal128,
    comments_per_post_video: mongoose.Types.Decimal128,
    comments_per_post_album: mongoose.Types.Decimal128,
    average_likes: mongoose.Types.Decimal128,
    average_comments: mongoose.Types.Decimal128,
    comments_likes_ratio: mongoose.Types.Decimal128,
    recent_post: Date,
    posting_frequency: mongoose.Types.Decimal128,
    authentic_audience: Number,
    suspecious_accounts: mongoose.Types.Decimal128,
    mass_followers: mongoose.Types.Decimal128,
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
    collection: 'influencers'
})

module.exports = mongoose.model('influencers', influencersSchema)