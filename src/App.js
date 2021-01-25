import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/index.js';
import React  from 'react';

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
