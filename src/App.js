import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./index.css";
import Home from './routes/Home';
import Journey from './routes/Journey';
import Project from './routes/Project';

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Journey" element={<Journey />}/>
    <Route path="/Project" element={<Project />}/>

  </Routes>
  </>

  );
}

export default App;
