/**
 * Created by ashish on 22/6/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var modelName = "movies";
model = mongoose.models[modelName];
var validateTitle = function (data) {
    return (data && data.length > 0 ? true: false);
};
var validateRating = function (data) {
    return (!isNaN(data) ? true: false);
};
if (!model) {
    var movieSchema = new Schema({
        title     : {type: String, validate: validateTitle},
        rating    : {type: Number, validate: validateRating}
    });
    model = mongoose.model(modelName, movieSchema);
}


var movies = {};

movies.findAll = function (cb) {
    model.find([], function (err, data) {
        if(cb) {
            cb(err, data)
        }
    });
};


movies.getMovieById = function (id, cb) {
    model.find({_id: id}, function (err, data) {
        if(cb) {
            cb(err, data)
        }
    });
};

movies.saveNewMovie = function (data, cb) {
    var newMovie = new model(data);
    newMovie.save(function (err, _doc) {
        if(cb) {
            cb(err, _doc)
        }
    });
};

movies.updateMovie = function (id, data, cb) {
    model.update({_id: id}, data, function (err, _doc) {
        if(cb) {
            cb(err, _doc)
        }
    });
};
movies.deleteMovie = function (id, cb) {
    model.remove({_id: id}, function (err, _doc) {
        if(cb) {
            cb(err, _doc)
        }
    });
};

module.exports = movies;
