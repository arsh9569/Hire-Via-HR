import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        {/* Logo */}
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label="Hire Via HR Home"
        >
          <img
            src="/img/hire-via-hr-logo.png"
            alt="Hire Via HR"
            className="brand-logo"
          />

          <span className="brand-copy">
            <strong>
              Hire Via <em>HR</em>
            </strong>
            <small>RECRUITMENT SOLUTIONS</small>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Navigation links */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Action buttons */}
        <div className={`nav-actions ${open ? "open" : ""}`}>
          <Link
            to="/contact"
            className="btn btn-orange btn-small"
            onClick={closeMenu}
          >
            Find a Job
          </Link>
        </div>
      </div>
    </header>
  );
}
