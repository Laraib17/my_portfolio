import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './src/pages/Home';
import Login from './src/pages/login';
import Contact from './src/pages/contact';
import Project from './src/pages/Projects';
import BasicExample from './src/components/Navbar';
const App = () =>{
  return (
    <div>
      <BasicExample/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
};
export default App;