import React, { useEffect, useState } from 'react'
import '../assets/FeaturedSection.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const FeaturedSection = () => {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {
    axios
      .get('http://localhost:5000/product/')
      .then((res) => {
        const featuredProducts = res.data.filter(
          (product) => product.Feature === true
        )
        setProducts(featuredProducts.slice(0, 6))
      })
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <div className="container my-5">
      <div className="text-center headings">
        <h2
          className="mb-4"
          style={{
            color: '#333',
            fontSize: '24px',
            fontWeight: '600',
            textTransform: 'uppercase',
          }}
        >
          Featured Products
        </h2>
        <Link to={'/featuredproduct'} className="btn btn-primary">
          View All
        </Link>
      </div>

      <div className="row g-4">
        {products.length > 0 && (
          <>
            <div className="col-md-8">
              <div className="bento-item bento-tall">
                <img src={products[0].Image} alt={products[0].Name} />
                <div className="bento-content">
                  <h3>{products[0].Name}</h3>
                  <p style={{ color: 'red' }}>${products[0].Price}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row g-4">
                {products.slice(1, 3).map((product) => (
                  <div className="col-12" key={product._id}>
                    <div className="bento-item">
                      <img src={product.Image} alt={product.Name} />
                      <div className="bento-content">
                        <h4>{product.Name}</h4>
                        <p style={{ color: 'red' }}>${product.Price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              {products.slice(3, 4).map((product) => (
                <div className="bento-item" key={product._id}>
                  <img src={product.Image} alt={product.Name} />
                  <div className="bento-content">
                    <h4>{product.Name}</h4>
                    <p style={{ color: 'red' }}>${product.Price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-4">
              {products.slice(4, 5).map((product) => (
                <div className="bento-item" key={product._id}>
                  <img src={product.Image} alt={product.Name} />
                  <div className="bento-content">
                    <h4>{product.Name}</h4>
                    <p style={{ color: 'red' }}>${product.Price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-4">
              {products.slice(5, 6).map((product) => (
                <div className="bento-item" key={product._id}>
                  <img src={product.Image} alt={product.Name} />
                  <div className="bento-content">
                    <h4>{product.Name}</h4>
                    <p style={{ color: 'red' }}>${product.Price}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default FeaturedSection
