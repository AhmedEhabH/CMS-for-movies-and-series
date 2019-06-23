const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose');
const config = require('./config');

mongoose.connect(config.mongoURI, {useNewUrlParser:true,useCreateIndex:true}, () => {
    console.log("=".repeat(35));
    console.log("Connected with database");
    console.log("=".repeat(35));
});

const routes = require('./controllers/routes')
const indexRoutes = require('./controllers/indexRoutes');
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
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next(); 
});
app.use('/public', express.static('public'));
app.use(routes);
app.use(indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, ()=>{
    console.log('='.repeat(50));
    console.log(`you are listen to port ${port}`);
    console.log('='.repeat(50));
})
