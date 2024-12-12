import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const hashPassword = (password) => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash;
};

const users = {
  'nhat': {
    passwordHash: hashPassword('123'),
    role: 'receptionist'
  }
};

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = ({ username, password }) => {
    const user = users[username];
    if (user && user.passwordHash === hashPassword(password)) {
      setUser({ username, role: user.role });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home user={user} onLogin={handleLogin} />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard userRole={user.role} /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={<Navigate to="/" />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
