const express = require('express');

const routes = express.Router();

routes.get('/movies', (req, res) => {
    res.render('movies');
})

routes.get('/series', (req, res) => {
    res.render('series');
})


module.exports = routes;