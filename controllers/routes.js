const express = require('express');

const User = require("../models/user");
const Utilities = require('./utilities');
const Utility = new Utilities();

const routes = express.Router();

routes.get('/profile/:id', Utility.isLoggedIn, (req, res) => {
    User.findById(req.params.id, (err, foundUsers) => {
        if(foundUsers)  res.render('profile')
        else res.redirect("/");
    })
})

routes.get('/movies', (req, res) => {

    res.render('movies', {movies:foundMovies});
})

routes.get('/series', (req, res) => {
    res.render('series');
})


module.exports = routes;