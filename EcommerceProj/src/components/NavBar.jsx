import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../context/SearchContext'
import { useCart } from '../context/CartContext'
import '../assets/NavBar.css'
import { FaShoppingCart } from 'react-icons/fa'
import axios from 'axios'

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const { searchQuery, setSearchQuery } = useSearch()
  const { cartItems } = useCart() // Fetch cart items from context

  // Calculate total number of items in the cart
  const cartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  )

  useEffect(() => {
    axios
      .get('http://localhost:5000/category/')
      .then((res) => setCategories(res.data || [])) // Ensure categories is always an array
      .catch((err) => console.error('Error fetching categories:', err.message))
  }, [])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.trim().toLowerCase()) // Trim spaces for better search results
  }

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light"
      style={{ backgroundColor: '#e3f2fd', marginBottom: '1.3%' }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://www.almounkez.com/news/public/storage/news/2023/09/0_1694783000.png"
            height="50"
            alt="Brand Logo"
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link to="/productPage" className="nav-item nav-link active">
              All
            </Link>
            {categories.length > 0 ? (
              categories.map((item) => (
                <Link
                  key={item._id}
                  to={`/product/category/${item._id}`}
                  className="nav-item nav-link active"
                >
                  {item?.Category_name || 'Unnamed Category'}
                </Link>
              ))
            ) : (
              <span className="nav-item nav-link text-muted">Loading...</span>
            )}
          </div>

          {/* Search Bar */}
          <form className="d-flex mx-auto search-form">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              aria-label="Search products"
            />
            <button type="submit" className="search-icon-btn">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Cart Icon */}
          <div className="d-grid gap-2">
            <div className="cartnav">
              <div className="cart-icon-container">
                <Link to="/cartPage" aria-label="Go to cart">
                  <FaShoppingCart className="cart-icon" />
                </Link>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
