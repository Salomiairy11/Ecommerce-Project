import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar /> {/* Move NavBar inside Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App
