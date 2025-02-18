import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../context/SearchContext'

import '../assets/NavBar.css'
import { FaShoppingCart } from 'react-icons/fa'
import axios from 'axios'

const NavBar = () => {
  const [category, setCategory] = useState([])
  const { searchQuery, setSearchQuery } = useSearch()

  useEffect(() => {
    axios
      .get('http://localhost:5000/category/')
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err.message))
  }, [])

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)
  }

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light"
      style={{ backgroundColor: '#e3f2fd', marginBottom: '1.3%' }}
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
            <Link to="/productPage" className="nav-item nav-link active">
              All
            </Link>
            {category.map((item) => (
              <Link
                key={item._id}
                to={`/product/category/${item._id}`}
                className="nav-item nav-link active"
              >
                {item.Category_name}
              </Link>
            ))}
          </div>

          <form className="d-flex mx-auto search-form">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search products..."
              value={searchQuery} // The search query comes from context
              onChange={handleSearch} // Update search query in context
            />
            <button type="submit" className="search-icon-btn">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="d-grid gap-2">
            <div className="cartnav">
              <div className="cart-icon-container">
                <Link to="/cartPage">
                  <FaShoppingCart className="cart-icon" />
                </Link>
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
