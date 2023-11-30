import React from "react";
import { Link } from "react-router-dom";

// BlogCard component representing a card for displaying blog content
const BlogCard = () => {
  return (
      <div className="blog-card">
        {/* Image section of the blog card */}
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>

        {/* Content section of the blog card */}
        <div className="blog-content">
          {/* Blog publication date */}
          <p className="date"> 3 December 2023</p>

          {/* Blog title */}
          <h5 className="title">A beautiful Sunday morning renaissance</h5>

          {/* Blog description */}
          <p className="desc">
            lorem ipsum sit amet consectetur adipisicing elit. Atque quaerat
            accusamus officia vel.
          </p>

          {/* Read More button linking to the home page */}
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
  );
};

// Export the BlogCard component
export default BlogCard;
