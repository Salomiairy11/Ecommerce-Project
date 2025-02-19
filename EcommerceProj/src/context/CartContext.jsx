import React, { createContext, useState, useContext } from 'react'

// Create Cart Context
const CartContext = createContext()

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Add item to cart or increase quantity
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return removeFromCart(id) // Remove if quantity is 0
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom Hook
export const useCart = () => useContext(CartContext)
