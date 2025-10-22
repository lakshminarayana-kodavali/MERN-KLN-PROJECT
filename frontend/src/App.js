import React from 'react';
import './App.css'; // added import so global styles (background) apply
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      {/* wrap everything in .app so App.css container styles apply */}
      <div className="app">
        <div style={{ textAlign: "center", margin: "20px" }}>
          <h3 style={{ color: "#2E86C1", fontWeight: "bold" }}>
            This is Dr.K.Lakshminarayana's simple website
          </h3>
        </div>

        <nav style={{ margin: "20px" }}>
          <Link to="/signup" style={{ marginRight: "10px", color: "#117A65" }}>Signup</Link>
          <Link to="/login" style={{ color: "#117A65" }}>Login</Link>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
