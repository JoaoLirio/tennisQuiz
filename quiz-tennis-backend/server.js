const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Leaderboard = require('./models/Leaderboard');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/leaderboard', {});

app.use(bodyParser.json());

//POST saves score to database
app.post('/leaderboard', async (req, res) => {
  try {
    const {playerName, score} = req.body;
    const leaderboardEntry = new Leaderboard({ playerName, score });
    await leaderboardEntry.save();
    res.status(201).send('Leaderboard entry saved successfully');
  } catch (err) {
    res.status(500).send('Error saving leaderboard entry');
  }
})

//GET returns top 10 scores
app.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).send('Error fetching leaderboard data');
  }
})


const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
