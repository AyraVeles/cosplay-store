import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <Link to="/" className="text-decoration-none text-white">
            <h1 className="m-0">Cosplay Store</h1>
          </Link>
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-light me-2">
              Корзина
            </Link>
            <Link to="/login" className="btn btn-primary">
              Войти
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;