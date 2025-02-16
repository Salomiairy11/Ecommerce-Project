import React from 'react'
import ProductCard from './ProductCard'
import '../assets/CategorySection.css'

const SearchedSection = () => {
  return (
    <div
      className="container mt-5 position-relative"
      style={{ paddingBottom: '2%' }}
    >
      <div className="headings">
        <h2 className="mb-4">Searched Products</h2>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default SearchedSection
