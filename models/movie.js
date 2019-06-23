const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const movieSchema = new mongoose.Schema({
    movieName: String,
    imageSrc: String,
    story: 
    {
        type:String,
        default:"Will be added soon"
    }
})

//movieSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('movie', movieSchema);