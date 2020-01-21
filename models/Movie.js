const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "{PATH} alanı zorunludur."],
        unique: true,
        maxlength: [100, "{PATH} alanı, en çok {MAXLENGTH} karakterden oluşmalıdır."],
        minlength: [2, "{PATH} alanı, en az {MINLENGTH} karakterden oluşmalıdır."]
    },
    category: {
        type: String,
        maxlength: [30, "{PATH} alanı, en çok {MAXLENGTH} karakterden oluşmalıdır."],
        minlength: [2, "{PATH} alanı, en az {MINLENGTH} karakterden oluşmalıdır."]
    },
    country: {
        type: String,
        maxlength: [30, "{PATH} alanı, en çok {MAXLENGTH} karakterden oluşmalıdır."],
        minlength: [2, "{PATH} alanı, en az {MINLENGTH} karakterden oluşmalıdır."]
    },
    year: {
        type: Number,
        max: 2099,
        min: 1900
    },
    director_id: Schema.Types.ObjectId,
    imdb_score: {
        type: Number,
        max: 10,
        min: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('movie', movieSchema);