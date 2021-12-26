let db = require('../database/models/index.js');

module.exports = {
    list: (req, res) => {
        db.Genres.findAll()
        .then(genres => {
            res.render('genresList', {
                genres
            });
        });
    },
    detail: (req, res) => {
        db.Genres.findByPk(req.params.id)
        .then(genre => {
            res.render('genresDetail', {
                genre
            });
        });
    }
}