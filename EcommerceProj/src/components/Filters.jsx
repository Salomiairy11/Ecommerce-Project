import React from 'react'
import '../assets/Filters.css'
import { useState } from 'react';

const Filters = () => {

  return (
    <div style={{ width: '350px' }}>
      <div className="col-lg-3 w-auto">
        <div className="filter-sidebar p-4 shadow-sm">
          <div className="filter-group">
            <h6 className="mb-3">Categories</h6>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                id="electronics"
              />
              <label className="form-check-label" htmlFor="electronics">
                Electronics
              </label>
            </div>
          </div>
          <div className="filter-group">
            <h6 className="mb-3">Price Range</h6>
            <input
              type="range"
              className="form-range"
              step="1"
            />
            <div className="d-flex justify-content-between">
              <span className="text-muted">$0</span>
              <span className="text-muted">$1000</span>
            </div>
          </div>
          <div className="filter-group">
            <h6 className="mb-3">Brand</h6>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="rating"
                id="rating4"
              />
              <label className="form-check-label" htmlFor="electronics">
                Electronics
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
