import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Address from '../components/Address'
import '../assets/CartPage.css'

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Handle form validation
  const handleCheckout = () => {
    if (!name) {
      setError('Please enter your name.')
      return
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!phone || !phoneRegex.test(phone)) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }

    alert('Your order has been successfully placed!')
    navigate('/')
  }

  // Calculate total price
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipping = 10.0
  const total = subtotal + shipping

  return (
    <div className="container py-5">
      <h1 className="mb-5">Your Shopping Cart</h1>
      <div className="row">
        {/* Cart Items Section */}
        <div className="col-lg-8">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <p>Your cart is empty.</p>
              <Link to="/" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2" /> Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="card mb-4" key={item.id}>
                <div className="card-body">
                  <div className="row cart-item mb-3">
                    <div className="col-md-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-5">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="text-muted">Category: {item.category}</p>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() =>
                            item.quantity > 1 &&
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <p className="fw-bold">${item.price.toFixed(2)}</p>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary & Checkout */}
        <div className="col-lg-4">
          {/* Checkout Form */}
          <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </form>
            <Address />
            <div className="card cart-summary">
              <div className="card-body">
                <h5 className="card-title mb-4">Order Summary</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>${total.toFixed(2)}</strong>
                </div>
              </div>
            </div>
            <button
              style={{
                backgroundColor: `${cartItems.length === 0 ? 'gray' : 'green'}`,
              }}
              type="submit"
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Place Order For Delivery
            </button>
            <p>
              Your package will be delivered to the address you provided within
              2-4 days. Thank you for your patience.
            </p>
            <Link to="/" className="btn btn-outline-secondary mt-3">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
