import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  // You might need to fetch searchData here or manage it with state
  const searchData = []; // Replace with actual data or state management

  return (
    <Router>
      <div className="App">
        <Navbar searchData={searchData} />
        <Hero />
        {/* Add other components or routes here as needed */}
      </div>
    </Router>
  );
}
