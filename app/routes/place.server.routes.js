var places = require('../../app/controllers/place.server.controller');

module.exports = function(app) {
    app.get('/places/data', places.render);
};