const express = require('express');

const Utilities = require('./utilities');
const Utility = new Utilities();
console.log(Utility);

const routes = express.Router();

routes.get('/admin', Utility.isLoggedIn, (req, res) => {
    res.send('Admin Page');
})

routes.get('/movies', (req, res) => {
    res.render('movies');
})

routes.get('/series', (req, res) => {
    res.render('series');
})


module.exports = routes;