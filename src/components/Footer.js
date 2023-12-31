import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

// Footer component definition
const Footer = () => {
  return (
    <>
      {/* Newsletter section */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              {/* Newsletter subscription form */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact and social links section */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                {/* Contact information */}
                <address className="text-white fs-6">
                  135 Green Willow Street <br /> Cape Town <br />
                  South Africa <br /> 198321
                </address>
                <a
                  href="tel: +27 123456789"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +27 123 456 789
                </a>
                <a
                  href="mailto:siddev.testing@gmail.com"
                  className="mt-2 d-block mb-2 text-white"
                >
                  info@sidmart.com
                </a>
                {/* Social media icons */}
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Information section */}
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                {/* Links to information pages */}
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/terms-and-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>

            {/* Account section */}
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                {/* Links to account-related pages */}
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>

            {/* Quick Links section */}
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                {/* Links to quick access pages */}
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright section */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Copyright information */}
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}. Powered by SidMart
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// Export Footer component
export default Footer;
