import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

// Layout component representing the overall structure of the application
const Layout = () => {
  return (
    // Fragment shorthand syntax to group multiple elements without adding a new node to the DOM
    <>
      {/* Header component for the top section of the layout */}
      <Header />

      {/* Outlet component from react-router-dom for rendering nested routes */}
      <Outlet />

      {/* Footer component for the bottom section of the layout */}
      <Footer />
    </>
  );
};

// Export the Layout component
export default Layout;
