var Places = require('mongoose').model('Place');

exports.render = function(req, res) {
    Places.find({}, function(err, places) {
        res.json(places);
    });
};