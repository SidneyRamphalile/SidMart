// Importing necessary modules and components from React and the project
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

// Functional component representing the forgot password page
const Forgotpassword = () => {
  return (
    <>
      {/* Setting the meta title for the page */}
      <Meta title={"Forgot Password"} />

      {/* Displaying breadcrumb with the title "Forgot Password" */}
      <BreadCrumb title={"Forgot Password"} />

      {/* Container for styling and layout purposes */}
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/* Authentication card containing the forgot password form */}
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>

              {/* Informational text for the user */}
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>

              {/* Forgot password form with an email input */}
              <form action="" className="d-flex flex-column gap-15">
                {/* CustomInput component for email input */}
                <CustomInput type="email" name="email" placeholder="Email" />

                <div>
                  {/* Buttons for submitting the form and canceling the operation */}
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    {/* Button for submitting the forgot password form */}
                    <button className="button border-0" type="submit">
                      Submit
                    </button>

                    {/* Link to cancel and navigate back to the login page */}
                    <Link to="/login">Cancel</Link>
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

// Exporting the Forgotpassword component as the default export
export default Forgotpassword;
