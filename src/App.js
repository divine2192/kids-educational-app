import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import English from './components/English';
import Maths from './components/Maths';
import Science from './components/Science';
import Parent from './components/Parent';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/english" element={<English />} />
                <Route path="/maths" element={<Maths />} />
                <Route path="/science" element={<Science />} />
                <Route path="/parent" element={<Parent />} />
            </Routes>
        </Router>
    );
};

export default App;
