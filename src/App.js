import React from 'react';
import Hero from './pages/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact"
import ToS from './pages/ToS/ToS';

/*window.addEventListener("contextmenu", e => e.preventDefault());*/

function App() {

  window.addEventListener("contextmenu", e => e.preventDefault());

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/tos" element={<ToS/>}/>
      </Routes>
    </Router>
  );
}

export default App;
