import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App
