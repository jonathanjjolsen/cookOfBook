import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/MyRecipes" element={<MyRecipes />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Random" element={<Random />} />
        <Route path="/API" element={<API />} /> */}
      </Routes>

    </Router>
  )
}

export default App
