import React from "react";
import { Link } from "react-router-dom";

// BreadCrumb component for displaying breadcrumb navigation
const BreadCrumb = (props) => {
  // Destructuring 'title' from props
  const { title } = props;

  return (
    // Breadcrumb container with padding and margin
    <div className="breadcrumb mb-0 py-4">
      {/* Container for controlling the width of the breadcrumb */}
      <div className="container-xxl">
        {/* Row for organizing breadcrumb content */}
        <div className="row">
          {/* Column taking up the full width */}
          <div className="col-12">
            {/* Breadcrumb text with a link to the home page */}
            <p className="text-center mb-0">
              <Link to="/" className="text-dark">
                Home &nbsp;
              </Link>
              / {title}{" "}
              {/* Dynamic part of the breadcrumb based on the 'title' prop */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the BreadCrumb component
export default BreadCrumb;
