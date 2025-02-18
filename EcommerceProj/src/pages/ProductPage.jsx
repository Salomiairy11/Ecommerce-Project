import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Filters from '../components/Filters'
import NavBar from '../components/NavBar'

const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleFilterChange = (filters) => {
    const { selectedBrands, priceRange } = filters

    const filtered = products.filter((product) => {
      const isBrandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.Brand?.Brand_name)
      const isPriceMatch = product.Price <= priceRange
      return isBrandMatch && isPriceMatch
    })

    setFilteredProducts(filtered)
  }

  useEffect(() => {
    axios
      .get('http://localhost:5000/product/')
      .then((res) => {
        setProducts(res.data)
        setFilteredProducts(res.data) // Initially, show all products
      })
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <>
      <NavBar products={products} setFilteredProducts={setFilteredProducts} />

      <div className="container mt-5">
        <div style={{ display: 'flex', gap: '1.6%', paddingLeft: '2.3%' }}>
          <div style={{ marginTop: '2%', marginRight: '2%' }}>
            <Filters onFilterChange={handleFilterChange} />
          </div>

          <div className="col-md-9">
            <h2 className="mb-4" style={{ textAlign: 'center' }}>
              All Products
            </h2>
            <span>
              <Link
                to="/"
                className="btn btn-primary"
                style={{ marginBottom: '2%' }}
              >
                Back To HomePage
              </Link>
            </span>
            <div className="row g-4">
              {filteredProducts.length === 0 ? (
                <div
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    border: '1px solid #f5c6cb',
                    padding: '15px',
                    borderRadius: '5px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                  }}
                >
                  No products match your filter criteria.
                </div>
              ) : (
                filteredProducts.map((item) => (
                  <div className="col-md-4" key={item._id}>
                    <ProductCard
                      name={item.Name}
                      category={item?.Category?.Category_name}
                      price={item.Price}
                      description={item.ProductDes}
                      quantity={item.Stock}
                      image={item.Image}
                      brand={item?.Brand?.Brand_name}
                    />
                  </div>
                ))
              )}

              <Link to="/">Back To HomePage</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
