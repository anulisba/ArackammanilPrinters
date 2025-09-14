import React from "react";
import './Footer.css'
import logo from '../assets/logoar.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src={logo} alt="Aim Sports Wear" />
                            </div>
                            <p className="brand-description">
                                Whether it's brochures, banners, or personalized gifts, our team is ready to bring your ideas to life with precision and care.
                            </p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/share/19NGLg4ohj/" className="social-link">
                                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                                </a>
                                <a href="https://www.instagram.com/arackamannil_printers?igsh=aG51OW82YmU2MG50" className="social-link">
                                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://wa.me/919349489349" className="social-link">
                                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.4-3.48c-6.627 0-12 5.373-12 12 0 2.52.779 4.86 2.107 6.78L0 24l6.335-1.652a12.001 12.001 0 005.953 1.631h.005c6.627 0 12-5.373 12-12 0-3.188-1.24-6.189-3.495-8.447z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-columns">
                            <div className="footer-column">
                                <h3 className="footer-heading">Contact Us</h3>
                                <ul className="contact-list">
                                    <li className="contact-item">
                                        <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        <div>
                                            <span className="contact-label">Email</span>
                                            <span className="contact-value">arackamannilranny@gmail.com</span>
                                        </div>
                                    </li>
                                    <li className="contact-item">
                                        <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.55c.28-.28.36-.67.25-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                        </svg>
                                        <div>
                                            <span className="contact-label">Phone</span>
                                            <span className="contact-value">+91 9349489349</span>
                                            <span className="contact-value">+91 9447207272</span>
                                        </div>
                                    </li>
                                    <li className="contact-item">
                                        <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        <div>
                                            <span className="contact-label">Address</span>
                                            <span className="contact-value">Near Valiyapalam</span>
                                            <span className="contact-value">Mamukku Pazhavangadi(PO), Ranni</span>
                                            <span className="contact-value">Kerala 689673</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3 className="footer-heading">Quick Links</h3>


                                <nav className="footer-nav">
                                    <Link to="/" className="nav-link">Home</Link>
                                    <Link to="/about-us" className="nav-link">About Us</Link>
                                    <a
                                        href="https://wa.me/919349489349?text=I%20am%20interested%20in%20your%20services"
                                        className="nav-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Contact
                                    </a>

                                </nav>

                            </div>



                            {/* <div className="footer-column">
                                <h3 className="footer-heading">Newsletter</h3>
                                <p className="newsletter-text">Subscribe to receive updates on new collections and exclusive offers.</p>
                                <form className="newsletter-form">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="newsletter-input"
                                        />
                                        <button type="submit" className="newsletter-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="send-icon">
                                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                                <div className="payment-methods">
                                    <div className="payment-icon">VISA</div>
                                    <div className="payment-icon">MC</div>
                                    <div className="payment-icon">PP</div>
                                    <div className="payment-icon">AE</div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">&copy; {new Date().getFullYear()} . All rights reserved.</p>

                    </div>
                </div>

                <div className="footer-decoration">
                    <div className="decoration-line"></div>
                    <div className="decoration-dot"></div>
                    <div className="decoration-line"></div>
                </div>
            </footer>
        </>
    );
};

export default Footer;