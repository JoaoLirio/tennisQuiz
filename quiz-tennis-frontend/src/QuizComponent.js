import React, { useEffect, useState } from 'react';

function QuizComponent() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the server
    fetch('http://localhost:3001/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2>Quiz Questions</h2>
      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuizComponent;
