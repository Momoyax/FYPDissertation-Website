import React, { useState, useContext } from 'react';
import './auth.css';
import { login } from '../api/auth';
import { ShopContext } from '../context/shop-context';
import { useNavigate } from 'react-router';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const { login: loginContext } = useContext(ShopContext);
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await login(email, password);
    console.log(email, password);
    setMessage('Login successful');
    loginContext(response.token); // Update the context state
    navigate('/contact'); // Navigate to the desired page after successful login
  } catch (error) {
    setMessage('Login failed');
  }
};

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};