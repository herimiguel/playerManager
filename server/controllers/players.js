var mongoose = require('mongoose'); 
var Player = mongoose.model('Player');

module.exports = {
    create: function(req, res) {
       var player = new Player({
            name : req.body.name,
            position : req.body.position,
            game_one: 'undecided',
            game_two: 'undecided',
            game_three: 'undecided',
       });
       player.save(function(err) {
           if(err) {
                res.json(err);
            } else {
                res.json(player);
            }
        });
    },

   read: function(req, res) {
        Player.find({}, function(err, players) {
            if (err) {
                console.log(err);
            } else {
                res.json(players);
            }
        });
    },

    update: function(req, res){
        console.log(req.body);
        Player.findOne({_id: req.body.id}, function(err, player){
            if(err) {
                console.log(err);
            } else {
                if (req.body.game_num == 1){
                    player.game_one = req.body.status;
                } else if (req.body.game_num == 2){
                    player.game_two = req.body.status;
                } else if (req.body.game_num == 3){
                    player.game_three = req.body.status;
                } 
                player.save(function(err){
                    if(err){
                        res.json(err);
                    } else {
                        res.json(player);
                    }
                });
            }
        });
    },

   destroy: function(req, res) {
        Player.findOne({ _id: req.params.id }).remove(function(err, removed) {
            if (err) {
                console.log(err);
            } else {
                res.json(removed);
            }
        });
    }
};