import React, { useState } from 'react'

const Card = ({ prod }) => {

  const [showInfo, setShowInfo] = useState(false)

  const ratings = [1, 2, 3, 4, 5]

  return (
    <div className="card" style={{ width: '18rem' }}>

      <img
        src={prod.thumbnail}
        className="card-img-top"
        alt={prod.title}
      />

      <div className="card-body">

        <div className="text-end">
          <span
            className={`badge ${
              prod.availabilityStatus === 'In Stock'
                ? 'text-bg-success'
                : 'text-bg-warning'
            }`}
          >
            {prod.availabilityStatus}
          </span>
        </div>

        <h5 className="card-title">
          {prod.title}
        </h5>

        <p className="card-text">
          {prod.description.slice(0, 55)}...
        </p>

        <div>
          {prod.tags.map((tag, index) => (
            <span
              key={index}
              className="badge text-bg-warning me-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-3">
          Price: $ {prod.price}
        </p>

        {/* Rating */}
        <div>
          {ratings.map((star) => (
            <span key={star}>
              {star <= Math.round(prod.rating) ? "⭐" : "☆"}
            </span>
          ))}

          <span className="ms-2">
            {prod.rating}
          </span>
        </div>

        {/* Reviews */}
        <p className="mt-2">
          Reviews: {prod.reviews?.length || 0}
        </p>

        <button className="btn btn-primary me-2">
          Add To Cart
        </button>

        {/* More Info */}
        <button
          className="btn btn-link p-0"
          onClick={() => setShowInfo(!showInfo)}
        >
          More Info
        </button>

        {/* Full Information */}
        {showInfo && (
          <div className="mt-3">

            <p>
              <strong>Description:</strong>
              <br />
              {prod.description}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {prod.rating}
            </p>

            <p>
              <strong>Reviews:</strong> {prod.reviews?.length || 0}
            </p>

          </div>
        )}

      </div>
    </div>
  )
}

export default Card

