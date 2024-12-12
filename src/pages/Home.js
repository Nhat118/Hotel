import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Home({ user, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <img 
          src="/hotel-background.jpg" 
          alt="Khách sạn" 
          className="hotel-image" 
        />
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Đăng Nhập</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Đăng Nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home; 