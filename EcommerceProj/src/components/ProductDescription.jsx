import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import '../assets/ProductDescription.css'

const ProductDescription = () => {
  const [isVisible, setIsVisible] = useState(true) 

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <FaTimes />
        </button>
        <div className="product-details-container">
          <div className="product-image-gallery">
            <img src="#" alt="img" className="product-details-image" />
          </div>

          <div className="product-details-info">
            <h1 className="product-details-title">title</h1>
            <div className="product-details-rating">rating</div>
            <p className="product-details-price">$price</p>
            <p className="product-details-description">desc</p>
            <div className="product-details-actions">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
