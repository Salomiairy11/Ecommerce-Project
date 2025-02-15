import React, { useState, useEffect } from 'react'
import '../assets/AdBanner.css'

const AdBanner = () => {
  // Sample image URLs for ads (replace with actual images later)
  const adImages = [
    'https://blog.daraz.com.np/wp-content/uploads/2024/01/1200x450-3.png',
    'https://daraz.com/wp-content/uploads/2023/04/KV.jpg',
    'https://img.lazcdn.com/us/lazada_mars_image/8c233f02960720b357ac25bb4d81c872.jpg_2200x2200q80.jpg',
  ]

  const [currentAdIndex, setCurrentAdIndex] = useState(0)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adImages.length)
    }, 3000)
    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  const handlePrev = () => {
    setCurrentAdIndex(
      (prevIndex) => (prevIndex - 1 + adImages.length) % adImages.length
    )
  }

  const handleNext = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adImages.length)
  }

  const toggleAd = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div>
      {/* Ad Banner */}
      {!isCollapsed && (
        <div className="ad-banner">
          <button className="close-btn" onClick={toggleAd}>
            &times;
          </button>
          <div className="ad-slide">
            <img
              src={adImages[currentAdIndex]}
              alt={`Ad ${currentAdIndex + 1}`}
            />
          </div>
          <button className="nav-button prev" onClick={handlePrev}>
            &#8249;
          </button>
          <button className="nav-button next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      )}

      {isCollapsed && (
        <button className="toggle-btn" onClick={toggleAd}>
          Show Ad
        </button>
      )}
    </div>
  )
}

export default AdBanner
