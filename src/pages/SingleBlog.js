// Importing necessary dependencies and components
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

// SingleBlog component representing a page for displaying a single blog
const SingleBlog = () => {
  return (
    <>
      {/* Meta component for setting the title of the page */}
      <Meta title={"Dynamic Blog Name"} />

      {/* BreadCrumb component for displaying breadcrumb navigation */}
      <BreadCrumb title={"Dynamic Blog Name"} />

      {/* Main container for the single blog page */}
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Container for the single blog content */}
              <div className="single-blog-card">
                {/* Link to navigate back to the Blogs page */}
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>

                {/* Title of the single blog */}
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>

                {/* Image for the single blog */}
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="Blog"
                />

                {/* Blog content */}
                <p>
                  {/* Placeholder text for the blog content */}
                  You're only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury -
                  it's not something people need, but it's what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money. Scelerisque sociosqu ullamcorper urna nisi mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dit lacus accumsan nisl ante
                  vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the SingleBlog component
export default SingleBlog;
