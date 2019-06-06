const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String
    },
    email: String,
    password: String,
    userType: {
        type: Number, //0 ==> Admin, 1 ==> Premium, 2 ==> Normal
        default: 2
    }
    
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);