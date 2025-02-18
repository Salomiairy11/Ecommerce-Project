import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Filters from '../components/Filters'
import NavBar from '../components/NavBar'
import { useSearch } from '../context/SearchContext' // Import SearchContext

const ProductByCategory = () => {
  const { id } = useParams()
  const { searchQuery } = useSearch() // Access searchQuery from context
  const [products, setProducts] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleFilterChange = (filters) => {
    const { selectedBrands, priceRange } = filters
    let filtered = products.filter((product) => {
      const isBrandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.Brand?.Brand_name)
      const isPriceMatch = product.Price <= priceRange

      return isBrandMatch && isPriceMatch
    })

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

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/category/${id}`)
      .then((res) => {
        console.log('Fetched Products:', res.data)
        setProducts(res.data)
        setFilteredProducts(res.data)
        if (res.data.length > 0) {
          setCategoryName(res.data[0].Category?.Category_name)
        }
      })
      .catch((err) => console.log(err.message))
  }, [id])

  // Apply filter whenever products or filters change
  useEffect(() => {
    handleFilterChange({ selectedBrands: [], priceRange: 1000 }) // You can adjust default filters as needed
  }, [products, searchQuery])

  return (
    <>
      <NavBar products={products} setFilteredProducts={setFilteredProducts} />
      <div style={{ display: 'flex', gap: '1.6%', paddingLeft: '2%' }}>
        <div style={{ marginTop: '2%', marginRight: '2%' }}>
          <Filters onFilterChange={handleFilterChange} />
        </div>
        <div className="container mt-5">
          <h2 className="mb-4">{categoryName}</h2>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductByCategory
