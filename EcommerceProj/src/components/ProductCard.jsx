import React, { useState } from 'react'
import '../assets/ProductCard.css'
import ProductDescription from './ProductDescription'
import { useCart } from '../context/CartContext'

const ProductCard = ({
  _id, // Ensure consistency with CartContext
  name,
  category,
  price,
  image,
  description,
  quantity = 1, // Default to 1 if not provided
  brand,
  rating = 4.5, // Default rating if missing
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()

  // Create the product object for the cart
  const product = {
    id: _id, // Match format with CartContext
    name,
    category,
    price,
    image,
    description,
    brand,
    quantity,
  }

  const handleAddToCart = () => {
    addToCart(product) // Pass the complete product object
  }

  // Function to render star ratings dynamically
  const renderStars = () => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>
        ))}
        {hasHalfStar && <i className="bi bi-star-half text-warning"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="bi bi-star text-muted"></i>
        ))}
        <small className="text-muted"> ({rating.toFixed(1)})</small>
      </>
    )
  }

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0 text-danger">${price.toFixed(2)}</span>
          <div>{renderStars()}</div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light">
        <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setIsModalOpen(true)}
        >
          View Product
        </button>
      </div>
      {isModalOpen && (
        <ProductDescription
          setIsModalOpen={setIsModalOpen}
          name={name}
          description={description}
          image={image}
          category={category}
          price={price}
          quantity={quantity}
          brand={brand}
        />
      )}
    </div>
  )
}

export default ProductCard
