import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import '../assets/ProductDescription.css'

const ProductDescription = ({
  setIsModalOpen,
  name,
  category,
  price,
  image,
  description,
  quantity,
  brand,
}) => {
  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <FaTimes />
        </button>
        <div className="product-details-container">
          <div className="product-image-gallery">
            <img src={image} alt="img" className="product-details-image" />
          </div>
          <div className="product-details-info">
            <h1 className="product-details-title">{name}</h1>
            <p className="product-details-description">{description}</p>
            <p className="product-details-description">
              <b>Category:</b> {category}
            </p>
            <p className="product-details-description">
              <b>Brand:</b> {brand}
            </p>
            <p className="product-details-description" style={{color:'blue'}}>
              <b>Stock Available: </b>  {quantity}
            </p>
            <p className="product-details-price" style={{color:'red'}}>${price}</p>
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
