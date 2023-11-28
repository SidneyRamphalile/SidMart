import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

// SpecialProduct component representing a special product card
const SpecialProduct = () => {
  return (
    // Container for the special product card with grid size and margin-bottom
    <div className="col-6 mb-3">
      <div className="special-product-card">
        {/* Flex container for alignment */}
        <div className="d-flex justify-content-between">
          {/* Product image */}
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>

          {/* Special product content */}
          <div className="special-product-content">
            {/* Brand name */}
            <h5 className="brand">Havels</h5>
            {/* Product title */}
            <h6 className="title">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h6>

            {/* Star rating component from 'react-rating-stars-component' */}
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />

            {/* Product price with discount */}
            <p className="price">
              <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>

            {/* Countdown for the discount expiration */}
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <strong>5 </strong>days
              </p>
              {/* Countdown display using badges */}
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>

            {/* Product count and progress bar */}
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                {/* Progress bar indicating the product count */}
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            {/* Add to Cart button with a link */}
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the SpecialProduct component
export default SpecialProduct;
