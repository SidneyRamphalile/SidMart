import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

// Cart component to display the items in the shopping cart
const Cart = () => {
  return (
    <>
      {/* Set meta title for the page */}
      <Meta title={"Cart"} />

      {/* Display breadcrumb for navigation */}
      <BreadCrumb title={"Cart"} />

      {/* Cart section with product details */}
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Cart header with column titles */}
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>

              {/* Cart data for a specific product */}
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                {/* Product details */}
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    {/* Product image */}
                    <img
                      src="/images/watch.jpg"
                      className="img-fluid"
                      alt="product image"
                    />
                  </div>
                  <div className="w-75">
                    {/* Product details such as name, color, and size */}
                    <p>Watch</p>
                    <p>Colour: Silver</p>
                    <p>Size: S</p>
                  </div>
                </div>

                {/* Product price */}
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>

                {/* Quantity input and delete icon */}
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  {/* Quantity input */}
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={10}
                      name=""
                      id=""
                    />
                  </div>

                  {/* Delete icon for removing the product */}
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>

                {/* Total price for the specific product */}
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>
            </div>

            {/* Cart summary and actions */}
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                {/* Continue shopping button */}
                <Link to="/product" className="button">
                  Continue Shopping
                </Link>

                {/* Cart subtotal, taxes, and checkout button */}
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $100</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  {/* Link to the checkout page */}
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Export the Cart component
export default Cart;
