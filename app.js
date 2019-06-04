const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/cms', {useNewUrlParser:true,useCreateIndex:true});

const routes = require('./controllers/routes')
const user = require('./models/user');  

const app = express();

app.set('view engine', 'ejs');
app.use(expressSession({
    secret:"Welcome Session",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, ()=>{
    console.log(`You are listen to port ${port}`);
})
