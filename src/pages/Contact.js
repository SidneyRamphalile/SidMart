// Import necessary dependencies from React and other libraries
import React from "react";
import BreadCrumb from "../components/BreadCrumb"; // Import BreadCrumb component
import Meta from "../components/Meta"; // Import Meta component for setting page metadata
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"; // Import icons from react-icons library
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import Container from "../components/Container";

// Functional component for the Contact page
const Contact = () => {
  return (
    <>
      {/* Set the title of the page using the Meta component */}
      <Meta title={"Contact Us"} />
      {/* Display breadcrumb navigation for the Contact page */}
      <BreadCrumb title={"Contact Us"} />

      {/* Main content wrapper */}
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              {/* Google Maps embed iframe for displaying the location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6384.591283851106!2d18.414727812753267!3d-33.92675167000698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6763a3ee4fe9%3A0x95516cf23f5ee8f5!2sCape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208000!5e1!3m2!1sen!2sza!4v1700770620791!5m2!1sen!2sza"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              {/* Contact form and contact information section */}
              <div className="contact-inner-wrapper d-flex justify-content-between">
                {/* Contact form */}
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    {/* Input fields for name, email, mobile number, and message */}
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="8"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    {/* Submit button */}
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                {/* Contact information */}
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    {/* List of contact details */}
                    <ul className="ps-0">
                      {/* Location */}
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          135 Green Willow Street, Cape Town, South Africa,
                          198321
                        </address>
                      </li>
                      {/* Phone number */}
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel: +27 123456789">+27 123456789</a>
                      </li>
                      {/* Email */}
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:siddev.testing@gmail.com">
                          info@sidmart.com
                        </a>
                      </li>
                      {/* Business hours */}
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 8AM - 5PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

// Export the Contact component as the default export
export default Contact;
