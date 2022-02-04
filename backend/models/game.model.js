const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        description: { type: String, required: false },
        gamename: { type: String, required: true },
        score: { type: String, required: true },
        result: { type: String, required: true },
        date: { type: Date, required: true },
    }, { timestamps: true } 
);

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;