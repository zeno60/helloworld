var User = require('mongoose').model('User'),
    Places = require('mongoose').model('Place'),
    passport = require('passport');

exports.render = function(req, res) {
    /*var authHeader = req.headers['authorization'];
    console.log('authorization header: ' + authHeader);

    var authMethod = authHeader.split(' ');
    console.log('method: ' + authMethod[0]);

    var decodedAuthHeader = new Buffer(authMethod[1], 'base64').toString('ascii').split(':');
    console.log('0: ' + decodedAuthHeader[0] + ' 1: ' + decodedAuthHeader[1]);

    User.findOne({username: decodedAuthHeader[0]}).exec(function(err, user) {
        if(!err) {
            if(user.authenticate(decodedAuthHeader[1])) {
                res.header('Authorization', authHeader);
                res.render('chat', {
                    title: 'chat'
                });
            }
        }
    });*/
/*    var placeArray = [{name : "test"}, {name: "test1"}];

    Places.find({}, function(err, places) {
        places.forEach(function(place) {
            console.log('before pushing ' + placeArray);
            placeArray.push({
                name: place.name
            });
            console.log('immediatly after pushing ' + placeArray);
        });
    });*/

    if(req.user) {
        res.render('chat', {
            title: 'chat',
            username: req.user ? req.user.username : 'guest'
        });
    }
    else {
        res.redirect('/login');
    }
};