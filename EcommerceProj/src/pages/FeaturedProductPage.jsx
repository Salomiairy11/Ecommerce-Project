import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Filters from '../components/Filters'
import NavBar from '../components/NavBar'
import { useSearch } from '../context/SearchContext' // Import SearchContext

const FeaturedProductPage = () => {
  const { searchQuery } = useSearch() // Access searchQuery from context
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState({
    selectedBrands: [],
    priceRange: 1000,
  }) // Default filters

  useEffect(() => {
    axios
      .get('http://localhost:5000/product/')
      .then((res) => {
        const featuredProducts = res.data.filter(
          (product) => product.Feature === true
        )
        setProducts(featuredProducts)
        setFilteredProducts(featuredProducts) // Initially, show all featured products
      })
      .catch((err) => console.log(err.message))
  }, [])

  // Filter function
  useEffect(() => {
    const applyFilters = () => {
      let filtered = products

      // Filter by selected brands
      if (filters.selectedBrands.length > 0) {
        filtered = filtered.filter((product) =>
          filters.selectedBrands.includes(product?.Brand?.Brand_name)
        )
      }

      // Filter by price range
      filtered = filtered.filter(
        (product) => product.Price <= filters.priceRange
      )

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter(
          (product) =>
            product.Name.toLowerCase().includes(searchQuery) ||
            product?.Category?.Category_name.toLowerCase().includes(
              searchQuery
            ) ||
            product?.Brand?.Brand_name.toLowerCase().includes(searchQuery)
        )
      }

      setFilteredProducts(filtered)
    }

    applyFilters()
  }, [filters, products, searchQuery]) // Run effect when filters, products, or searchQuery change

  return (
    <>
      <NavBar products={products} setFilteredProducts={setFilteredProducts} />
      <div className="container mt-5">
        <div style={{ display: 'flex', gap: '1.6%', paddingLeft: '2.3%' }}>
          <div style={{ marginTop: '2%', marginRight: '2%' }}>
            <Filters onFilterChange={setFilters} /> {/* Pass filter function */}
          </div>

          <div className="col-md-9">
            <h2
              className="mb-4"
              style={{
                color: '#333',
                fontSize: '24px',
                fontWeight: '600',
                textTransform: 'uppercase',
                marginBottom: '1.6%',
              }}
            >
              Featured Products
            </h2>
            <span>
              <Link
                to="/"
                className="btn btn-secondary"
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
                  No featured products match your filter criteria.
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
            </div>
            <div className="mt-4" style={{ marginBottom: '3%' }}>
              <Link to="/" className="btn btn-secondary">
                Back To HomePage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProductPage
