import React from 'react'
import AdBanner from '../components/AdBanner'
import NavBar from '../components/NavBar'
import FeaturedSection from '../components/FeaturedSection'
import CategoryProducts from '../components/CategoryProducts'
import Footer from '../components/Footer'
import '../assets/HomePage.css'
import Filters from '../components/Filters'

const HomePage = () => {
  return (
    <div>
      <AdBanner />
      {/* <NavBar /> */}
      <FeaturedSection />
      <div style={{ display: 'flex', gap: '1.6%', paddingLeft: '2%' }}>
        <div>
          <Filters />
        </div>
        <div>
          <CategoryProducts />
          <div className="ad-placeholder">
            <img
              src="https://blog.daraz.com.np/wp-content/uploads/2024/01/1200x450-3.png"
              alt="Advertisement"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
