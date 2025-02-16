import React from 'react'
import '../assets/Filters.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Filters = () => {
  const [brand, setBrand] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:7000/brand/')
      .then((res) => {
        console.log(res.data)
        setBrand(res.data)
      })
      .catch((err) => console.log(err.message))
    console.log(brand)
  }, [])
  return (
    <div style={{ width: '350px' }}>
      <div className="col-lg-3 w-auto">
        <div className="filter-sidebar p-4 shadow-sm">
          <div className="filter-group">
            <h6 className="mb-3">Price Range</h6>
            <input type="range" className="form-range" step="1" />
            <div className="d-flex justify-content-between">
              <span className="text-muted">$0</span>
              <span className="text-muted">$1000</span>
            </div>
          </div>
          <div className="filter-group">
            <h6 className="mb-3">Brand</h6>
            <div className="form-check mb-2">
              <label className="form-check-label" htmlFor="electronics">
                {brand.map((item) => (
                  <div key={item._id} className="brand-item">
                    <input
                      type="checkbox"
                      id={item._id}
                      name={item.Brand_name}
                      className="form-check-input"
                    />
                    <span>{item.Brand_name}</span>
                    <p>{item.description}</p>
                  </div>
                ))}
              </label>
            </div>
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
