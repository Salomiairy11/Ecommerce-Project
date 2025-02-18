import React from 'react'
import { useState } from 'react'
import '../assets/ProductCard.css'
import ProductDescription from './ProductDescription'

const ProductCard = ({
  name,
  category,
  price,
  image,
  description,
  quantity,
  brand,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="Product Image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0" style={{ color: 'red' }}>
            ${price}
          </span>
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
