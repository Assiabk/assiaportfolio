import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
