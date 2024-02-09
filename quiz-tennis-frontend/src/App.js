import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Menu from './pages/Menu';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={Menu} />
          <Route path='/quiz' Component={Quiz} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
