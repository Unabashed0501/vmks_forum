import React from "react";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
