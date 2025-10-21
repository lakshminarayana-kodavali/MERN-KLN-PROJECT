import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', form);
      alert(res.data.msg);
      // Redirect to dashboard and pass user's name (replace "User" if backend sends real name)
      //navigate('/dashboard', { state: { name: res.data.name || "User" } });
      navigate('/dashboard', { state: { name: form.email } });
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
