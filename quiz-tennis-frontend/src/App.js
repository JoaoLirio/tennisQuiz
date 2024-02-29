import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Menu from './pages/Menu';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={Menu} />
          <Route path='/quiz' Component={Quiz} />
          <Route path='/quiz/result' Component={Result} />
          <Route path='/leaderboard' Component={Leaderboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
