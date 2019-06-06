const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const movieSchema = new mongoose.Schema({
    movieName: String,
    imageSrc: String,
    story: String
})

movieSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('movie', movieSchema);