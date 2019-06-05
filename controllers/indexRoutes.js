const express = require('express');
const passport = require('passport');

const User = require('../models/user');

const routes = express.Router();

routes.get('/login', (req, res) => {
    res.render('login');
})

routes.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect:"/login"
}), (req, res) => {
})

routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

routes.get('/register', (req, res) => {
    res.render('register', {error:"I don't now"});
})

routes.post('/register', (req, res) => {
    console.log(`name:req.username = ${req.body.username}`);
    console.log(`name:req.password = ${req.body.password}`);
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err)
        {
            console.error(err);
            var error = "null";
            if(err.message == 'A user with the given username is already registered') error="user";
            return res.render('register', {error:error});
        }
        console.log("=".repeat(25));
        console.log(user)
        console.log("=".repeat(25));
        passport.authenticate('local')(req, res, ()=>{
            res.redirect('/');
        })
    })
})

routes.get('*', (req, res) => {
    res.render('index', {currentUser: req.user});
})

module.exports = routes;