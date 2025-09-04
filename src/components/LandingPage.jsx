import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import Header from './Header';
import bg1 from '../assets/bg.jpg';
import bg2 from '../assets/bg1.jpg';
import bg3 from '../assets/bg2.jpg';
import AboutUs from './AboutUs';
import OurServices from './Services';
import ReportCounter from './ReportCounter';
import ProjectSection from './ProjectSection';
import OurWorkFlow from './OurServices';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ContactLandingSection from './ContactLanding';
import logo from '../assets/logoar.png';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const SplashScreen = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const companyName = "Arackamannil  Printers";
    const tagline = "We print what you think ";
    const nameLetters = companyName.split('');
    const taglineLetters = tagline.split('');

    useEffect(() => {
        const totalSteps = nameLetters.length + taglineLetters.length + 2;

        const timer = setTimeout(() => {
            if (step < totalSteps - 1) {
                setStep(step + 1);
            } else {
                // Final delay before exiting splash
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, step < nameLetters.length ? 150 : 60); // Faster for tagline for smoother flow

        return () => clearTimeout(timer);
    }, [step, nameLetters.length, taglineLetters.length, onComplete]);

    return (
        <div className="splash-container">
            <div className="splash-content">
                {/* Title Animation */}
                <AnimatePresence>
                    {step > nameLetters.length + taglineLetters.length && (
                        <motion.div
                            className="logo-container"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.175, 0.885, 0.32, 1.275]
                                }
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                transition: { duration: 0.4 }
                            }}
                        >
                            <div className="logo-symbol"><img src={logo} /></div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="name-container">
                    {nameLetters.map((letter, index) => (
                        <motion.span
                            key={index}
                            className="name-letter"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: step > index ? 1 : 0,
                                x: step > index ? 0 : -20
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Tagline Animation */}
                {step > nameLetters.length && (
                    <div className="tagline-container">
                        {taglineLetters.map((letter, index) => {
                            const show = step > nameLetters.length + index;
                            return (
                                <motion.span
                                    key={index}
                                    className="tagline-letter"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: show ? 1 : 0 }}
                                    transition={{ duration: 0.03 }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </div>
                )}

                {/* Logo Animation */}

            </div>
        </div>
    );
};


const ContactPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, subject, message } = formData;

        const whatsappMessage = `Hello, I'm interested in your printing services. Here are my details:

   Name: ${name}
   Email: ${email}
   Phone: ${phone}
   Subject: ${subject}
   Message: ${message}`;

        const whatsappURL = `https://wa.me/919349489349?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');

        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    return (
        <motion.div
            className="contact-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="contact-popup-box"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
            >
                <button className="contact-popup-close-btn" onClick={onClose}>✕</button>
                <h2>Interested in Our Services?</h2>
                <p>Leave your details and we'll get back to you!</p>

                <motion.div
                    className="contact-popup-form-container"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {isSubmitted ? (
                        <div className="contact-popup-success-message">
                            <FaPaperPlane className="contact-popup-success-icon" />
                            <h3>Message Sent Successfully!</h3>
                            <p>Thank you for contacting us. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-popup-form" onSubmit={handleSubmit}>
                            <div className="contact-popup-form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="contact-popup-form-input"
                                />
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <div className="contact-popup-form-row">
                                <div className="contact-popup-form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                        className="contact-popup-form-input"
                                    />
                                    <span className="contact-popup-input-highlight"></span>
                                </div>

                                <div className="contact-popup-form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="contact-popup-form-input"
                                    />
                                    <span className="contact-popup-input-highlight"></span>
                                </div>
                            </div>

                            <div className="contact-popup-form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className="contact-popup-form-input"
                                />
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <div className="contact-popup-form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="contact-popup-form-textarea"
                                ></textarea>
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <motion.button
                                className="contact-popup-submit-btn"
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FaPaperPlane className="contact-popup-send-icon" />
                                    </>
                                )}
                                <div className="contact-popup-btn-hover-effect"></div>
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const LandingPage = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const categoriesTrackRef = useRef(null);

    const adImages = [
        "https://res.cloudinary.com/dpo91btlc/image/upload/v1751268325/business-success-with-modern-technology-equipment-generated-by-ai_ivoojl.jpg",
        "https://res.cloudinary.com/dpo91btlc/image/upload/v1751268284/women-holding-paper-side-view_g3ddn9.jpg",
        "https://res.cloudinary.com/dpo91btlc/image/upload/v1751279365/Need_high-quality_printing_services_in_Irvine_hj7uya.jpg"
    ];

    const categories = [
        {
            id: 1,
            name: 'ID Cards',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757001946/Gemini_Generated_Image_uj4tu4uj4tu4uj4t_csyfa6.png'
        },
        {
            id: 2,
            name: 'Balloon Printing',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757003820/Gemini_Generated_Image_ugvewmugvewmugve_mibcaq.png'
        },
        {
            id: 3,
            name: 'Sign Boards',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757003619/Gemini_Generated_Image_h6c8mph6c8mph6c8_sxsxgc.png'
        },
        {
            id: 4,
            name: 'Banners',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002389/Gemini_Generated_Image_dl7litdl7litdl7l_zrnnjv.png'
        },
        {
            id: 5,
            name: 'Umbrella Printing',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002396/Gemini_Generated_Image_1i863t1i863t1i86_ztgg8v.png'
        },
        {
            id: 6,
            name: 'T-Shirt Printing',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002388/Gemini_Generated_Image_hcp782hcp782hcp7_ucv93r.png'
        },
        {
            id: 7,
            name: 'Box Printing',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002393/Gemini_Generated_Image_pgjmvypgjmvypgjm_zuostu.png'
        },
        {
            id: 8,
            name: 'Wedding Cards',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002393/Gemini_Generated_Image_3q85333q85333q85_kpn6ks.png'
        },
        {
            id: 9,
            name: 'Visiting Card',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002391/Gemini_Generated_Image_vdl9lhvdl9lhvdl9_qjzdp7.png'
        },
        {
            id: 10,
            name: 'Rubber Stamp',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002402/Gemini_Generated_Image_h3gndch3gndch3gn_qm0mxh.png'
        },
        {
            id: 11,
            name: 'Flex Printing',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002398/Gemini_Generated_Image_9sjeej9sjeej9sje_hxhwcs.png'
        },
        {
            id: 12,
            name: 'Notice and Posters',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1757002394/Gemini_Generated_Image_ypfn9aypfn9aypfn_bnes9e.png'
        }
    ];



    useEffect(() => {
        const adInterval = setInterval(() => {
            setCurrentAdIndex((prev) => (prev + 1) % adImages.length);
        }, 5000);

        return () => clearInterval(adInterval);
    }, []);

    const scrollLeft = () => {
        if (categoriesTrackRef.current) {
            categoriesTrackRef.current.scrollBy({
                left: -250,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (categoriesTrackRef.current) {
            categoriesTrackRef.current.scrollBy({
                left: 250,
                behavior: "smooth",
            });
        }
    };

    const contactus = () => {
        const message = "Hello, I am interested in your printing services.";
        const whatsappURL = `https://wa.me/919349489349?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="app-container">
            <Header />

            {/* Advertisement Carousel (Half-screen height) */}
            <section className="ad-carousel-section">
                <div className="ad-carousel-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentAdIndex}
                            className="ad-carousel-item"
                            style={{ backgroundImage: `url(${adImages[currentAdIndex]})` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="ad-overlay" />
                            <div className="ad-content">
                                <h2>Arackamannil Printers</h2>
                                <p>Your trusted partner for high-quality printing and design solutions.</p>
                                <button onClick={contactus} className="ad-cta-btn">
                                    Contact Us
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="ad-indicators">
                        {adImages.map((_, index) => (
                            <button
                                key={index}
                                className={`ad-indicator ${currentAdIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentAdIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section - Full Width with Images */}
            {/* Categories Section - Horizontal Scroll */}
            <section className="categories-section">
                <div className="categories-header">
                    <div className='our-service-title'>
                        <h2>Explore all categories</h2>
                        <div className="our-service-line-heading" />
                    </div>
                </div>

                <div className="categories-carousel">
                    <button className="carousel-btn left-btn" onClick={scrollLeft}>
                        ‹
                    </button>

                    <div className="categories-track" ref={categoriesTrackRef}>
                        {categories.map((category) => (
                            <div key={category.id} className="category-circle">
                                <div className="circle-image">
                                    <img src={category.image} alt={category.name} />
                                </div>
                                <p>{category.name}</p>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn right-btn" onClick={scrollRight}>›</button>
                </div>
            </section>

            <AboutUs />

            <OurServices />
            <ContactLandingSection />
            <Footer />


        </div>
    );
};

export default LandingPage;
