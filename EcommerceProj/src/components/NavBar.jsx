import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/NavBar.css'
import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="https://www.almounkez.com/news/public/storage/news/2023/09/0_1694783000.png"
            height="50"
            alt="CoolBrand"
          />
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link to="/home" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/profile" className="nav-item nav-link">
              Profile
            </Link>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search..."
                  />
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            <div className="cartnav">
              <div className="cart-icon-container">
                <FaShoppingCart
                  className="cart-icon"
                />
                <span className="cart-badge">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
