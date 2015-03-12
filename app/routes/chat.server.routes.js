var chat = require('../controllers/chat.server.controller');

module.exports = function(app) {
    app.get('/chat', chat.render);
};