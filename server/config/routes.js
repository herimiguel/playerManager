var path = require('path');
var players = require('../controllers/players.js');

module.exports = function(app){
    app.post('/api/create', function(req, res){
        players.create(req, res);
    });

    app.get('/api/read', function(req, res){
        players.read(req, res);
    });

    app.post('/api/update/:id', function(req, res){
        players.update(req, res);
    });

    app.delete('/api/destroy/:id', function(req, res){
        players.destroy(req, res);
    });

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
};