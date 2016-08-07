/**
 * Created by ashish on 22/6/16.
 */
var express = require('express');
var router = express.Router();
var model = require("../models/movie");

router.get('/movies', function(req, res, next) {
    model.findAll(function (err, data) {
        console.log('get all');
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(data);
        }
    });
});
router.post('/movies', function(req, res, next) {
    model.saveNewMovie(req.body, function (err, data) {
        console.log('post');
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(data);
        }
    });
});
router.get('/movies/:id', function(req, res, next) {
    model.getMovieById(req.params.id, function (err, data) {
        console.log('get particular :: ' + req.params.id);
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(data);
        }
    });
});
router.put('/movies/:id', function(req, res, next) {
    model.updateMovie(req.params.id, req.body, function (err, data) {
        console.log('put :: ' + req.params.id);
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(data);
        }
    });
});
router.delete('/movies/:id', function(req, res, next) {
    model.deleteMovie(req.params.id, function (err, data) {
        console.log('delete :: ' + req.params.id);
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(data);
        }
    });
});

module.exports = router;