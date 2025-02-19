import React, { useState } from 'react'
import '../assets/CartPage.css'

const Address = () => {
  const [address, setAddress] = useState('')
  const [deliveryLocation, setDeliveryLocation] = useState(null)

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const geocodeAddress = async (event) => {
    event.preventDefault() // Prevent default form submission
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
      )
      const data = await response.json()
      if (data && data.length > 0) {
        const { lat, lon, display_name } = data[0]
        setDeliveryLocation({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
          address: display_name,
        })
      } else {
        alert('Address not found')
        setDeliveryLocation(null)
      }
    } catch (error) {
      console.error('Error geocoding address:', error)
      alert('Error finding address')
      setDeliveryLocation(null)
    }
  }

  return (
    <div className="location-input-container" style={{ padding: '12px' }}>
      <form onSubmit={geocodeAddress} className="address-btn">
        <input
          type="text"
          placeholder="Enter delivery address"
          value={address}
          onChange={handleAddressChange}
          style={{ padding: '10px', marginBottom: '1rem' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            marginBottom: '9px',
            marginLeft: '0.9rem',
            backgroundColor: 'rgba(245, 112, 35, 0.88)',
            cursor: 'pointer',
          }}
        >
          Find Address
        </button>
      </form>

      {deliveryLocation && (
        <div className="delivery-info">
          <p>
            Delivery to:
            <span className="address">{deliveryLocation.address}</span>
            (Lat: {deliveryLocation.latitude}, Lon:
            {deliveryLocation.longitude})
          </p>
        </div>
      )}
    </div>
  )
}

export default Address
