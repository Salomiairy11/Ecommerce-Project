import React from 'react'
import '../assets/Footer.css'

const Footer = () => {
  return (
    <footer className="modern-footer pt-5">
      <div className="container footer-content">
        <div className="row g-4 mb-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <a href="#" className="footer-logo d-block mb-4">
              My Ecommerce<span className="text-primary">.</span>
            </a>
            <p className="text-muted mb-4">
              Empowering businesses with innovative digital solutions. We create
              meaningful experiences that drive success.
            </p>
            <ul className="contact-info mb-4">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  123 Business Avenue, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>contact@yourbrand.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="quick-links">
              {[
                'Our Services',
                'About Company',
                'Latest Projects',
                'Recent News',
                'Customer Support',
                'Contact Details',
                'Privacy Policy',
                'Terms of Service',
              ].map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-12">
            <h3 className="footer-title">Stay Connected</h3>
            <p className="text-muted mb-4">
              Subscribe to our newsletter and stay updated with the latest news
              and insights.
            </p>
            <form className="mb-4">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="Your email address"
                />
              </div>
              <button
                type="submit"
                className="btn btn-subscribe text-white w-100"
              >
                Subscribe Now
              </button>
            </form>
            <div className="social-links">
              {[
                'facebook-f',
                'twitter',
                'instagram',
                'linkedin-in',
                'youtube',
              ].map((icon, index) => (
                <a key={index} href="#" className="social-icon">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-6 text-center text-md-start">
              <p>&copy; 2024 My Ecommerce. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p>
                Made with <i className="fas fa-heart text-danger"></i> by{' '}
                <a href="#">My Ecommerce</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
