import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import AdminPage from './pages/AdminPage';
import PreviewPage from './pages/PreviewPage';
import ProjectId from './pages/ProjectId';

function Hub() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route exact path="/projects/:projectId" element={<ProjectId/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/:projectId" element={<PreviewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Hub;
