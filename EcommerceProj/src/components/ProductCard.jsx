import React from 'react'
import { useState } from 'react'
import '../assets/ProductCard.css'
import ProductDescription from './ProductDescription'

const ProductCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="card">
      <img
        src="#"
        className="card-img-top"
        alt="Product Image"
      />
      <div className="card-body">
        <h5 className="card-title">Product Name</h5>
        <p className="card-text">Short product description goes here.</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">$99.99</span>
          <div>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-half text-warning"></i>
            <small className="text-muted">(4.5)</small>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light">
        <button className="btn btn-primary btn-sm">Add to Cart</button>
        <button
          className="btn btn-outline-secondary btn-sm"
        >
          View Product
        </button>
      </div>
      <ProductDescription
      />
    </div>
  )
}
export default ProductCard