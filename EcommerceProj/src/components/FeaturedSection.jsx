import React from 'react'
import '../assets/FeaturedSection.css'

const FeaturedSection = () => {
  const title = 'Featured Products'
  return (
    <div className="container my-5">
      <div className=" text-center headings">
        <h2 className="mb-4">{title}</h2>
        <button className="btn btn-primary">View All</button>
      </div>
      <div className="row g-4">
        <div className="col-md-8">
          <div className="bento-item bento-tall">
            <img src="#" alt="Nature" />
            <div className="bento-content">
              <h3>product name</h3>
              <p>price</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bento-item">
                <img src="" alt="Food" />
                <div className="bento-content">
                  <h4>Culinary Delights</h4>
                  <p>price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bento-item">
            <img src="" alt="Travel" />
            <div className="bento-content">
              <h4>Travel Adventures</h4>
              <p>price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
