// Importing necessary modules and components from React and the project
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

// Functional component representing the login page
const Login = () => {
  return (
    <>
      {/* Setting the meta title for the page */}
      <Meta title={"Login"} />

      {/* Displaying breadcrumb with the title "Login" */}
      <BreadCrumb title={"Login"} />

      {/* Container for styling and layout purposes */}
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/* Authentication card containing the login form */}
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>

              {/* Login form with email and password inputs */}
              <form action="" className="d-flex flex-column gap-15">
                {/* CustomInput component for email input */}
                <CustomInput type="email" name="email" placeholder="Email" />

                {/* CustomInput component for password input */}
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  {/* Link to the forgot password page */}
                  <Link to="/forgot-password">Forgot Password?</Link>

                  {/* Buttons for submitting the form and navigating to the signup page */}
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>

                    {/* Link to the signup page */}
                    <Link to="/signup" className="button signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

// Exporting the Login component as the default export
export default Login;
