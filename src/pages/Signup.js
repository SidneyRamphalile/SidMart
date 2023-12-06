// Importing necessary modules and components from React and the project
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

// Functional component representing the signup page
const Signup = () => {
  return (
    <>
      {/* Setting the meta title for the page */}
      <Meta title={"Sign Up"} />

      {/* Displaying breadcrumb with the title "Sign Up" */}
      <BreadCrumb title={"Sign Up"} />

      {/* Container for styling and layout purposes */}
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/* Authentication card containing the signup form */}
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>

              {/* Signup form with name, email, mobile, and password inputs */}
              <form action="" className="d-flex flex-column gap-15">
                {/* CustomInput component for name input */}
                <CustomInput type="text" name="name" placeholder="Name" />

                {/* CustomInput component for email input */}
                <CustomInput type="email" name="email" placeholder="Email" />

                {/* CustomInput component for mobile number input */}
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />

                {/* CustomInput component for password input */}
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    {/* Button for submitting the signup form */}
                    <button className="button border-0">Sign Up</button>
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

// Exporting the Signup component as the default export
export default Signup;
