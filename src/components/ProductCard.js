import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

// ProductCard component receives 'grid' as a prop, indicating the column size in the grid system.
const ProductCard = (props) => {
  // Destructuring 'grid' from props
  const { grid } = props;

  // Fetch the current location using the 'useLocation' hook from 'react-router-dom'
  let location = useLocation();

  return (
    <>
      {/* Dynamically set the column size based on the route */}
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        {/* Link to the product details page */}
        <Link to=":id" className="product-card position-relative">
          {/* Wishlist icon with a link (currently inactive) */}
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="wishlist" />
            </Link>
          </div>

          {/* Product images with alternative formats */}
          <div className="product-image">
            <img
              src="/images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="/images/watch-1.avif"
              className="img-fluid"
              alt="product image"
            />
          </div>

          {/* Product details */}
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>

            {/* Star rating component from 'react-rating-stars-component' */}
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />

            {/* Description with conditional class based on grid size */}
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum delemiti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>

            {/* Product price */}
            <p className="price">$100.00</p>
          </div>

          {/* Action bar with links for product actions */}
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="/images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

// Export the ProductCard component
export default ProductCard;
