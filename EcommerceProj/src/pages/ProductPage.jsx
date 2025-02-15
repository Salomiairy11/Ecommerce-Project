import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <div className="container mt-5">
        <h2 className="mb-4"> Category Name</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <ProductCard />
        </div>
        <Link to='/'>Back To HomePage</Link>
      </div>
    </div>
  )
}

export default ProductPage
