// Importing necessary modules and components from React and the project
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

// Functional component representing the reset password page
const Resetpassword = () => {
  return (
    <>
      {/* Setting the meta title for the page */}
      <Meta title={"Reset Password"} />

      {/* Displaying breadcrumb with the title "Reset Password" */}
      <BreadCrumb title={"Reset Password"} />

      {/* Container for styling and layout purposes */}
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/* Authentication card containing the reset password form */}
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>

              {/* Reset password form with password and confirm password inputs */}
              <form action="" className="d-flex flex-column gap-15">
                {/* CustomInput component for password input */}
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                {/* CustomInput component for confirming password input */}
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                />

                <div>
                  {/* Button for submitting the reset password form */}
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">OK</button>
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

// Exporting the Resetpassword component as the default export
export default Resetpassword;
