import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-about">
          <div className="footer-brand"><img src="/img/hire-via-hr-logo.png" alt="Hire Via HR logo" className="footer-logo" /><strong>Hire Via <em>HR</em></strong></div>
          <p>Your trusted partner for premium placement solutions in BPO, Call Centers, and Non-IT sectors. We bridge the gap between exceptional talent and industry leaders with ethical and transparent recruitment.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.93-1.954 1.884v2.285h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="social-icon-dot" cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="https://www.twitter.com/" aria-label="Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.98 13.98 0 0 1 1.64 3.162a4.822 4.822 0 0 0-.666 2.475 4.92 4.92 0 0 0 2.188 4.096 4.903 4.903 0 0 1-2.23-.616v.06a4.923 4.923 0 0 0 3.946 4.823 4.936 4.936 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.46-2.548z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.903 3.37-1.903 3.601 0 4.267 2.37 4.267 5.455v6.339zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div><h4>Explore</h4><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/contact">Contact Us</Link></div>
        <div><h4>Information</h4><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms and Conditions</Link><Link to="/refund-policy">Refund Policy</Link></div>
        <div><h4>Contact</h4><p>Rajapuri, Uttam Nagar, Dwarka, New Delhi - 110075</p><p>Branch offices: Hyderabad, Bangalore, Pune, Chandigarh and Mumbai</p><p><a href="tel:+919220762559">+91 9220762559</a></p><p><a href="mailto:info@hireviahr.in">info@hireviahr.in</a></p></div>
      </div>
      <div className="copyright">
        <div className="container">2024 All Rights Reserved</div>
      </div>
    </footer>
  )
}