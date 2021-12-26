let db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
     list: (req, res) => {
        db.Movies.findAll()
        .then(movies => {
            res.render('moviesList', {
                movies
            })
        })
        .catch(function (error) {
            console.log(error)
        })
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [
                ["release_date","DESC"]
            ]
        })
        .then(movies => {
            res.render('newestMovies', {
                movies
            })
        })
    },
    recomended: (req, res) => {
        db.Movies.findAll({
            where: {
                rating: {[Op.gte] : 8}
            },
            order: [
                ["release_date","DESC"]
            ],
            limit: 5
        })
        .then(movies => {
            res.render('recommendedMovies', {
                movies
            })
        })
    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
        .then(movie => {
            res.render('moviesDetail', {
                movie,
                title: movie.title
            });
        })
    }
}