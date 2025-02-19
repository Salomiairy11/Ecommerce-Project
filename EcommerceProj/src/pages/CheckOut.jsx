import React, { useState } from 'react'
import './ChcekOut.css'
import Address from './Address'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
//import LocationInput from './LocationInput'

const CheckOut = ({ handleCheckout, setCart, setCartCount }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('') // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const navigate = useNavigate()

  function handleClick() {
    if (!name) {
      setError('PLEASE ENTER YOUR NAME.')
      return
    }
    const phoneRegex = /^[0-9]{10}$/
    if (!phone || !phoneRegex.test(phone)) {
      setError('PLEASE ENTER A VALID 10 DIGIT NUMBER')
      return
    }
    alert('Your order has been successfully placed!')
    navigate('/')
    setCart([])
    setCartCount(0)
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="checkout-form">
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
      <button type="submit" className="checkout-btn" onClick={handleClick}>
        Place Order For Delivery
      </button>
      <p>
        Your package will be delivered to the address you provided within 2-4
        days. Thank you for your patience.
      </p>
      <Link
        to="/"
        style={{
          marginBottom: '10px',
          marginTop: '20px',
        }}
      >
        Go to HomePage?
      </Link>
    </div>
  )
}

export default CheckOut
