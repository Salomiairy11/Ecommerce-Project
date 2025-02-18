import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/CartPage.css'

const CartItem = ({ image, name, category, price, quantity }) => (
  <div className="row cart-item mb-3">
    <div className="col-md-3">
      <img src={image} alt={name} className="img-fluid rounded" />
    </div>
    <div className="col-md-5">
      <h5 className="card-title">{name}</h5>
      <p className="text-muted">Category: {category}</p>
    </div>
    <div className="col-md-2">
      <div className="input-group">
        <button className="btn btn-outline-secondary btn-sm" type="button">
          -
        </button>
        <input
          style={{ maxWidth: 100 }}
          type="text"
          className="form-control form-control-sm text-center quantity-input"
          value={quantity}
        />
        <button className="btn btn-outline-secondary btn-sm" type="button">
          +
        </button>
      </div>
    </div>
    <div className="col-md-2 text-end">
      <p className="fw-bold">${price}</p>
      <button className="btn btn-sm btn-outline-danger">
        <i className="bi bi-trash" />
      </button>
    </div>
  </div>
)

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/100',
      name: 'Product 1',
      category: 'Electronics',
      price: 99.99,
      quantity: 1,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/100',
      name: 'Product 2',
      category: 'Clothing',
      price: 49.99,
      quantity: 2,
    },
  ]

  return (
    <div className="container py-5">
      <h1 className="mb-5">Your Shopping Cart</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
              <hr />
              <div className="text-start mb-4">
                <Link to="/" className="btn btn-outline-primary">
                  <i className="bi bi-arrow-left me-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card cart-summary">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>$199.97</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>$20.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>$229.97</strong>
              </div>
              <button className="btn btn-primary w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Apply Promo Code</h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter promo code"
                />
                <button className="btn btn-outline-secondary" type="button">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
