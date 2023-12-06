// Importing necessary modules and components from React and the project
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

// Functional component representing the blog page
const Blog = () => {
  return (
    <>
      {/* Setting the meta title for the page */}
      <Meta title={"Blogs"} />

      {/* Displaying breadcrumb with the title "Blogs" */}
      <BreadCrumb title={"Blogs"} />

      {/* Container for styling and layout purposes */}
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          {/* Sidebar column for category filters */}
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                {/* List of categories */}
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main content column for displaying blog cards */}
          <div className="col-9">
            <div className="row">
              {/* Blog cards, each in a separate column */}
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

// Exporting the Blog component as the default export
export default Blog;
