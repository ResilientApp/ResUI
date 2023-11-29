import React from 'react';
import './App.css';
import Home from './pages';
import { SignUpPage, LogInPage } from './pages/signup';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signup" element={<SignUpPage />} exact />
        <Route path="/login" element={<LogInPage />} exact />
      </Routes>
      
    </Router>
  );
}

export default App;
