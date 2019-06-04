const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String
    },
    password: String
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);