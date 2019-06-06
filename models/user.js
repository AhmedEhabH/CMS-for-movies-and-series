const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String
    },
    email: String,
    password: String,
    type: Number //0 ==> Admin, 1 ==> Premium, 2 ==> Normal
    
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);