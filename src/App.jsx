import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Empirical from './components/Emperical';
import MLAnalysis from './components/MLAnalysis';
import DQT from './components/DQT';
// import './index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Hydrological Analysis Tool</h1>
                </header>
                <Routes>
                    <Route path="/" element={<Empirical />} />
                    <Route path="/ml" element={<MLAnalysis />} />
                    <Route path="/dqt" element={<DQT />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
