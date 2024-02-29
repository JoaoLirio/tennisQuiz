const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    playerName: String,
    score: Number
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
