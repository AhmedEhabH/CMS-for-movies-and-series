const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const seriesSchema = new mongoose.Schema({
    seriesName: String,
    imageSrc: String,
    story: String
})

seriesSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('series', seriesSchema);