import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game from './routers/Game'; 
import Home from './routers/Home'; 
import API from './routers/API'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/api">API</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
