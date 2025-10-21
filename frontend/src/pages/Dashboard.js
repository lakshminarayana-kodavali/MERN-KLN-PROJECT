import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const { name } = location.state || { name: "User" };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2 style={{ color: "#D35400" }}>Welcome, {name}!</h2>
      <p style={{ color: "#7D3C98" }}>This is your dashboard.</p>
      <Link to="/login" style={{ color: "#117A65" }}>Logout</Link>
    </div>
  );
}

export default Dashboard;