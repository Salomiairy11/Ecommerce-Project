import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import ProductByCategory from './pages/ProductByCategory'
import FeaturedProductPage from './pages/FeaturedProductPage'
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/product/category/:id" element={<ProductByCategory />} />
          <Route path="/featuredproduct" element={<FeaturedProductPage />} />
        </Routes>
      </Router>
    </SearchProvider>
  )
}

export default App
