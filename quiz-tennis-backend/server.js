const express = require('express');
const app = express();
const port = 3001; // or any other port you prefer

const cors = require('cors');
app.use(cors());

/*export const quiz = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,
  
}*/
app.get('/api/questions', (req, res) => {
  const questions = [
    { 
      id: 1,
      question: 'Who won the last Wimbledon Men\'s Singles?',
      choices: ['Nadal', 'Sinner', 'Djokovic', 'Alcaraz'],
      correctAnswer: 'Alcaraz',
    },
    { 
      id: 2,
      question: 'In which year was the US Open first held?',
      choices: ['1881', '1893', '1900', '1912'],
      correctAnswer: '1881'
       },
  ];

  res.json(questions);
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
