import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Journey from "./routes/Journey";
import Project from "./routes/Project";
import Blog from "./routes/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
