import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import '../assets/CategorySection.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CategoryProducts = () => {
  const [categories, setCategories] = useState([])
  const [categoryProducts, setCategoryProducts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/category')
      .then((res) => {
        setCategories(res.data)
        fetchProductsForCategories(res.data)
      })
      .catch((err) => console.log(err.message))
  }, [])

  const fetchProductsForCategories = (categories) => {
    categories.forEach((category) => {
      axios
        .get(`http://localhost:5000/product/category/${category._id}`)
        .then((res) => {
          setCategoryProducts((prev) => [
            ...prev,
            { category, products: res.data },
          ])
        })
        .catch((err) => console.log(err.message))
    })
  }

  // Slice the categoryProducts array into two sections
  const topCategories = categoryProducts.slice(0, 2)  // First 2 categories
  const remainingCategories = categoryProducts.slice(2,4) // Remaining categories

  return (
    <div
      className="container mt-5 position-relative"
      style={{ paddingBottom: '2%' }}
    >
      {topCategories.map((categoryData) => (
        <div key={categoryData.category._id}>
          <div className="headings">
            <h2
              className="mb-4"
              style={{
                color: '#333',
                fontSize: '24px',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            >
              {categoryData.category.Category_name}
            </h2>
            <Link
              to={`/product/category/${categoryData.category._id}`}
              className="btn btn-primary"
            >
              View All
            </Link>
          </div>
          <div className="row g-4">
            {categoryData.products.slice(0, 3).map((item) => (
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
          <div style={{ marginBottom: '30px' }}></div>
        </div>
      ))}

      {/* Add Advertisement */}
      <div className="ad-placeholder" style={{ marginBottom: '3%' }}>
        <img
          src="https://blog.daraz.com.np/wp-content/uploads/2024/01/1200x450-3.png"
          alt="Advertisement"
        />
      </div>

      {/* Render the remaining categories in another block */}
      {remainingCategories.length > 0 && (
        remainingCategories.map((categoryData) => (
          <div key={categoryData.category._id}>
            <div className="headings">
              <h2 className="mb-4">{categoryData.category.Category_name}</h2>
              <Link
                to={`/product/category/${categoryData.category._id}`}
                className="btn btn-primary"
              >
                View All
              </Link>
            </div>
            <div className="row g-4">
              {categoryData.products.slice(0, 3).map((item) => (
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
            <div style={{ marginBottom: '3%' }}></div>
          </div>
        ))
      )}
    </div>
  )
}

export default CategoryProducts
