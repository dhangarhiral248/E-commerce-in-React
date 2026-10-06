import React from 'react'
import shopBg from '../assets/shop-bg.avif'

const Hero = () => {
  return (
    <div
      className="dashboard"
      style={{ backgroundImage: `url(${shopBg})` }}
    >
      <div className="dashboard-overlay">

        <div className="dashboard-content">

          <p>THE NEW COLLECTION</p>

          <h1>
            Timeless Style.
            <br />
            Modern Living.
          </h1>

          <p className="dashboard-text">
            Discover carefully selected pieces designed
            for your everyday style.
          </p>

          <button className="shop-button">
            SHOP COLLECTION
          </button>

        </div>

      </div>
    </div>
  )
}

export default Hero