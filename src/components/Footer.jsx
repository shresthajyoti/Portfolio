import React from 'react';
import { Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-icon">✨</span>
                            <span className="logo-text">Jyoti Shrestha</span>
                        </div>
                        <p className="footer-bio">
                            Innovative Full-Stack Developer dedicated to building high-performance web solutions and exceptional user experiences.
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/jyoti-shrestha-6234862b2/" target="_blank" rel="noreferrer" className="social-link">
                                <Linkedin size={20} />
                            </a>

                            <a href="https://github.com/shresthajyoti" target="_blank" rel="noreferrer" className="social-link">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>

                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">Contact Me</h4>
                        <ul>
                            <li>
                                <Mail size={18} className="text-accent" />
                                <span>hello@jyotistha.com</span>
                            </li>
                            <li>
                                <MapPin size={18} className="text-accent" />
                                <span>Kathandu, nepal</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Jyoti Shrestha. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
