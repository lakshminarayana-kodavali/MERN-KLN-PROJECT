import axios from 'axios';

const api = axios.create({
  //baseURL: "http://localhost:5000"
  baseURL: "/", // ✅ relative URL — works for both local & Render
});

export default api;
