import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBanner from './Banner';
import MovieList from './movie/MovieList';
import Podcast from './Podcast';
import Home from './Home';

function App() {
  return (
    <Router>
      <TopBanner />
      <Routes>
        <Route
          path="/"
          element={<Home title="Joel Hilton Movie Collection" />}
        />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;
