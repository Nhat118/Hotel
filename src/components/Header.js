import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
  return (
    <header className="App-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>Quản Lý Khách Sạn</h1>
        </Link>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/rooms">Phòng</Link></li>
            <li><Link to="/services">Dịch Vụ</Link></li>
            <li><Link to="/contact">Liên Hệ</Link></li>
            {user ? (
              <>
                <li><span>Xin chào, {user.username}</span></li>
                <li><button onClick={onLogout} className="logout-button">Đăng Xuất</button></li>
              </>
            ) : (
              <li><Link to="/login">Đăng Nhập</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 