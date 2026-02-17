import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar-mock ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container-mock">
        <div className="nav-socials">
          <a href="https://linkedin.com/in/shresthajyoti" target="_blank" rel="noreferrer" className="nav-social-icon"><Linkedin size={18} /></a>
          <a href="https://github.com/shresthajyoti" target="_blank" rel="noreferrer" className="nav-social-icon"><Github size={18} /></a>
        </div>

        <div className={`nav-links-centered ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link-mock ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="btn-hire-mock">Get a Consultation</Link>
          <button className="mobile-toggle-mock" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
