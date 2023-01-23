import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h3 className="footer__title">Our information</h3>

          <ul className="footer__list">
            <li>1234 - Peru</li>
            <li>La Libertad 43210</li>
            <li>123-456-789</li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">About Us</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Copy Right
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Product</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Road bikes
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Mountain bikes
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Electric
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Accesories
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Social</h3>

          <ul className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-facebook"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-twitter"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">
        &#169; Kimbayeva T.
      </span>
    </footer>
  );
};
