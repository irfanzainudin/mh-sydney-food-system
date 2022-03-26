import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navibar from './components/Navibar';

// pages
import Home from './pages/Home';
import HallOfFame from './pages/HallOfFame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/hall-of-fame" element={<HallOfFame />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
