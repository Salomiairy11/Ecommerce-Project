import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import AdBanner from '../components/AdBanner'
import FeaturedSection from '../components/FeaturedSection'
import CategoryProducts from '../components/CategoryProducts'
import Footer from '../components/Footer'
import '../assets/HomePage.css'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
import { useSearch } from '../context/SearchContext'
import axios from 'axios'

const HomePage = () => {
  const { searchQuery } = useSearch() // Access searchQuery from context
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    // Fetch all products when the page loads
    axios
      .get('http://localhost:5000/product/')
      .then((res) => {
        setProducts(res.data)
        setFilteredProducts(res.data) // Initially display all products
      })
      .catch((err) => console.log(err.message))
  }, [])

  useEffect(() => {
    // Filter products when search query changes
    if (searchQuery) {
      const filtered = products.filter(
        (product) =>
          product.Name.toLowerCase().includes(searchQuery) ||
          product?.Category?.Category_name.toLowerCase().includes(
            searchQuery
          ) ||
          product?.Brand?.Brand_name.toLowerCase().includes(searchQuery)
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts([]) // Set to empty array if searchQuery is empty (no products displayed)
    }
  }, [searchQuery, products]) // Run this effect when searchQuery or products change

  return (
    <div>
      <AdBanner />
      <NavBar />
      <div className="container mt-5">
        {filteredProducts.length > 0 ? (
          <div className="row g-4">
            {filteredProducts.map((item) => (
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
            ))}
          </div>
        ) : null}
      </div>
      <FeaturedSection />
        <CategoryProducts />
      <Footer />
    </div>
  )
}

export default HomePage
