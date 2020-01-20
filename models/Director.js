const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: [60, "{PATH} alanı, en çok {MAXLENGTH} karakterden oluşmalıdır."],
        minlength: [2, "{PATH} alanı, en az {MINLENGTH} karakterden oluşmalıdır."]
    },
    surname: {
        type: String,
        required: true,
        maxlength: [60, "{PATH} alanı, en çok {MAXLENGTH} karakterden oluşmalıdır."],
        minlength: [2, "{PATH} alanı, en az {MINLENGTH} karakterden oluşmalıdır."]
    },
    bio: {
        type: String,
        maxlength: [1000, "{PATH} alanı, en çok {MAXLENGTH} karakterden oluşmalıdır."],
        minlength: [60, "{PATH} alanı, en az {MINLENGTH} karakterden oluşmalıdır."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('director', directorSchema);