import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './component/navbar';
import Footer from './component/Footer'
import Company from './pages/Company';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Theme from './theme/theme';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
