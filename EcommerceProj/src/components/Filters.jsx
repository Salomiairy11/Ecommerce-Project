import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../assets/Filters.css'

const Filters = ({ onFilterChange }) => {
  const [brands, setBrands] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState(1000) // Default max price

  useEffect(() => {
    axios
      .get('http://localhost:5000/brand/')
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err.message))
  }, [])

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand]

    setSelectedBrands(updatedBrands)
    onFilterChange({ selectedBrands: updatedBrands, priceRange }) // Update filters
  }

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value)
    onFilterChange({ selectedBrands, priceRange: event.target.value }) // Update filters
  }

  return (
    <div style={{ width: '350px' }}>
      <div className="col-lg-3 w-auto">
        <div className="filter-sidebar p-4 shadow-sm">
          {/* Price Range Filter */}
          <div className="filter-group">
            <h6 className="mb-3">Price Range</h6>
            <input
              type="range"
              className="form-range"
              step="1"
              min="0"
              max="1000"
              value={priceRange}
              onChange={handlePriceChange}
            />
            <div className="d-flex justify-content-between">
              <span className="text-muted">$0</span>
              <span className="text-muted">${priceRange}</span>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <h6 className="mb-3">Brand</h6>
            {brands.map((item) => (
              <div key={item._id} className="brand-item">
                <input
                  type="checkbox"
                  id={item._id}
                  className="form-check-input"
                  checked={selectedBrands.includes(item.Brand_name)}
                  onChange={() => handleBrandChange(item.Brand_name)}
                />
                <label htmlFor={item._id}>{item.Brand_name}</label>
              </div>
            ))}
          </div>

          <button className="btn btn-outline-primary w-100">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filters
