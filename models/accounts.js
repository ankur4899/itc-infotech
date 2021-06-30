const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = {
    post_text: String,
    post_date_time: Date,
    post_comments: Number,
    post_likes: Number,
    post_media_url: String,
    post_media_type: String,
};

/**
 * Schema for Accounts
 */
const accountsSchema = new Schema({
    platform: instagram,
    username: String,
    profile_name: String,
    profile_picture_url: String,
    followers: Number,
    following: Number,
    total_posts: Number,
    is_private: Boolean,
    is_verified: Boolean,
    profile_country: String,
    biography: String,
    website: String,
    images_post: Number,
    videos_post: Number,
    carousel_post: Number,
    total_likes: Number,
    total_comments: Number,
    total_engagement: Number,
    total_hashtags: Number,

    popular_hashtags: [{
        hashtags1: mongoose.Types.Decimal128,
        hashtags2: mongoose.Types.Decimal128,
        hashtags3: mongoose.Types.Decimal128,
        hashtags4: mongoose.Types.Decimal128,
        hashtags5: mongoose.Types.Decimal128,
        others: mongoose.Types.Decimal128
    }],

    popular_keywords: [{
        keywords1: mongoose.Types.Decimal128,
        keywords2: mongoose.Types.Decimal128,
        keywords3: mongoose.Types.Decimal128,
        keywords4: mongoose.Types.Decimal128,
        keywords5: mongoose.Types.Decimal128,
        others: mongoose.Types.Decimal128
    }],

    images_post_likes: Number,
    videos_post_likes: Number,
    carousel_post_likes: Number,
    images_post_comments: Number,
    videos_post_comments: Number,
    carousel_post_comments: Number,
    best_performing_day: String,
    best_performing_time: String,

    most_liked_posts: [{
        post: [postSchema]
    }],
    most_commented_posts: [{
        post: [postSchema]
    }],
    popular_images_posts: [{
        post: [postSchema]
    }],
    popular_videos: [{
        post: [postSchema]
    }],
    most_recent_posts: [{
        post: [postSchema]
    }],
}, {
    collection: 'accounts'
})

module.exports = mongoose.model('accounts', accountsSchema)