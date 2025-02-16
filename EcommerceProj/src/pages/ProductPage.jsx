import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ProductPage = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:7000/product/')
      .then((res) => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch((err) => console.log(err.message))
    console.log(product)
  }, [])
  return (
    <div className="container mt-5">
      <h2 className="mb-4"> Category Name</h2>
      <div className="row g-4">
        {product.map((item) => {
          return (
            <div className="col-md-4">
              <div key={item._id}>
                <ProductCard
                  name={item.Name}
                  category={item?.Category?.Category_Name}
                  price={item.Price}
                  description={item.ProductDes}
                  quantity={item.Stock}
                  image={item.Image}
                  brand={item?.Brand?.Brand_Name}
                />
              </div>
            </div>
          )
        })}

        <Link to="/">Back To HomePage</Link>
      </div>
    </div>
  )
}

export default ProductPage
