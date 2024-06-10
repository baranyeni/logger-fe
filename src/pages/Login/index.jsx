import React from 'react';
import LoginForm from '../../components/login/form';
import { useNavigate } from 'react-router-dom';

import './login.css'

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const { username, password } = values;
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h1 style={{textAlign: 'center', color: 'white', marginTop: '14%'}}>SecBoard</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
