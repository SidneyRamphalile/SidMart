// Importing necessary modules and components from React and the project
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

// Functional component representing the compare product page
const CompareProduct = () => {
  return (
    <>
      {/* Setting the meta title for the page */}
      <Meta title={"Compare Products"} />

      {/* Displaying breadcrumb with the title "Compare Products" */}
      <BreadCrumb title="Compare Products" />

      {/* Container for styling and layout purposes */}
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          {/* First product column */}
          <div className="col-3">
            {/* Compare product card for the first product */}
            <div className="compare-product-card position-relative">
              {/* Cross icon for removing the product from comparison */}
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />

              {/* Product card image */}
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>

              {/* Product details section */}
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T17.0 1GB RAM 8GB ROM 7 inch with Wi-Fi + 3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$100</h6>

                {/* Product details including brand, type, availability, color, and size */}
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colour:</h5>
                    {/* Component for displaying color (assuming it's imported from the Color component) */}
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second product column (similar structure as the first product) */}
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T17.0 1GB RAM 8GB ROM 7 inch with Wi-Fi + 3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colour:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

// Exporting the CompareProduct component as the default export
export default CompareProduct;
