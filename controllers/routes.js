const express = require('express');

const User = require("../models/user");
const Movie = require("../models/movie");
const Serie = require("../models/series")
const Utilities = require('./utilities');
const Utility = new Utilities();

const routes = express.Router();

routes.get('/profile/:id', Utility.isLoggedIn, (req, res) => {
    User.findById(req.params.id, (err, foundUsers) => {
        if(foundUsers)  
        {
            res.render('profile');
        }
        else 
        {
            res.redirect("/");
        }
    })
})

routes.get('/movies', (req,res)=>{
    Movie.find({}, (err, foundMovies) => {
        //console.log(foundMovies);
        res.json(foundMovies);
    })
})

routes.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        if(err) 
        {
            console.error(err);
            res.redirect('back');
        }
        else 
        {
            console.log(foundMovie);
            res.render('movie/showMovie', {movie:foundMovie});
        }
    })
})

routes.get('/addMovies', Utility.isAdmin, (req, res)=>{
    //console.log('/addMovies')
    res.render('movie/addMovie');
})

routes.post('/addMovies', Utility.isAdmin, (req, res)=>{
    console.log(req.body.movie);
    const newMovie = new Movie(req.body.movie);
    console.log(newMovie);
    newMovie.save()
            .then(savedMovie => {
                console.log(savedMovie);
                res.redirect('/movies/'+savedMovie._id);
            })
            .catch(err => {
                console.log(err);
                res.redirect('back');
            })
})

routes.get('/movies/:id/edit', Utility.isAdmin, (req, res)=>{
    Movie.findById(req.params.id, (err, foundMovie) => {
        if(err)
        {
            res.redirect('back');
        }
        else
        {
            res.render('movie/editMovie', {movie: foundMovie});
        }
    })
})

routes.get('/series/:id', (req, res) => {
    res.render('series');
})


module.exports = routes;