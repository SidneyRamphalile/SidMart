import { Helmet } from "react-helmet";
import React from "react";

// Meta component for managing document metadata using React Helmet
const Meta = (props) => {
  return (
    // Helmet component to manage the head of the document
    <Helmet>
      {/* Set character set for the document */}
      <meta charSet="utf-8" />

      {/* Set the title of the document dynamically based on the 'title' prop */}
      <title>{props.title}</title>
    </Helmet>
  );
};

// Export the Meta component
export default Meta;
