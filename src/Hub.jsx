import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function Hub() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Blog" element={<Blog/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Hub