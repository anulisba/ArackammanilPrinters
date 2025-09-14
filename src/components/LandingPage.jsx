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
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const SplashScreen = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const companyName = "Arackamannil   Printers";
    const tagline = "We print what you think";
    const sinceline = "Since 1971";

    const nameLetters = companyName.split('');
    const taglineLetters = tagline.split('');
    const sincelineLetters = sinceline.split('');

    useEffect(() => {
        const totalSteps =
            nameLetters.length +     // company name letters
            1 +                     // logo animation step
            taglineLetters.length +  // tagline letters
            sincelineLetters.length + // since letters
            1; // finish

        if (step < totalSteps) {
            let delay;
            if (step < nameLetters.length) delay = 150; // name letters
            else if (step === nameLetters.length) delay = 600; // logo
            else delay = 60; // tagline & since letters

            const timer = setTimeout(() => setStep(step + 1), delay);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => onComplete(), 1200);
            return () => clearTimeout(timer);
        }
    }, [step]);

    return (
        <div className="splash-container">
            <div className="splash-content">

                {/* Logo at top, always visible after animation */}
                <motion.div
                    className="logo-container"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: nameLetters.length * 0.15 }}
                    style={{ marginBottom: "2rem" }}
                >
                    <div className="logo-symbol">
                        <img src={logo} alt="Logo" />
                    </div>
                </motion.div>

                {/* Company Name */}
                <div className="name-container">
                    {nameLetters.map((letter, index) => (
                        <motion.span
                            key={index}
                            className="name-letter"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: step > index ? 1 : 0,
                                y: step > index ? 0 : 20
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Tagline */}
                {step > nameLetters.length && (
                    <div className="tagline-container">
                        {taglineLetters.map((letter, index) => {
                            const show = step > nameLetters.length + 1 + index;
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

                {/* Since 1971 */}
                {step > nameLetters.length + 1 + taglineLetters.length && (
                    <div className="sinceline-container">
                        {sincelineLetters.map((letter, index) => {
                            const show = step > nameLetters.length + 1 + taglineLetters.length + index;
                            return (
                                <motion.span
                                    key={index}
                                    className="sinceline-letter"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: show ? 1 : 0 }}
                                    transition={{ duration: 0.06 }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </div>
                )}
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
    const [showSplash, setShowSplash] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // After splash completes, show popup
        if (!showSplash) {
            const popupTimer = setTimeout(() => {
                setShowPopup(true);
            }, 1500); // show popup 1.5s after splash ends
            return () => clearTimeout(popupTimer);
        }
    }, [showSplash]);
    const adImages = [
        "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757783583/image_2025-09-13_224258901_gfcbhi.png",
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
            <AnimatePresence>
                {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            </AnimatePresence>

            <AnimatePresence>
                {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
            </AnimatePresence>

            {/* Main site */}
            {!showSplash && (
                <>
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
                                        <p>Your trusted partner for high-quality printing & design solutions.</p>
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

                   {/* Categories Section - Full Width */}
<section className="categories-section">
    <div className="categories-header">
        <div className='our-service-title'>
            <h2>Explore all categories</h2>
            <div className="our-service-line-heading" />
        </div>
    </div>

    {/* First row - High Demand (5) */}
    <div className="image-row-5">
        {[
            { name: 'Graphic Design', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767752/Graphic_Design_qtk1zt.png' },
            { name: 'Offset Printing', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757764346/Offset_Printing_nbpfg4.png' },
            { name: 'Flex & Cloth Printing', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757765919/Flex_u1grrc.png' },
            { name: 'Plastic Cover', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767937/Plastic_Cover_ibwg8a.png' },
            { name: 'Laser Printing', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757765271/Laser_Printing_ikvyjp.png' },
        ].map((category, idx) => (
            <div key={idx} className="category-circle">
                <div className="circle-image">
                    <img src={category.image} alt={category.name} />
                </div>
                <p>{category.name}</p>
            </div>
        ))}
    </div>

    {/* Second row - 8 images */}
    <div className="image-row-8">
        {[
            { name: 'LED', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768334/LED_lkj4et.png' },
            { name: 'T-shirt & Jersy', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767428/Tshirt_vnpcoe.jpg' },
            { name: 'Cap', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767999/Cap_wddsr5.png' },
            { name: 'Box ', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767611/Box_Design_cw5h9k.png' },
            { name: 'Wedding Card', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768146/Wedding_Card_ez0v1u.png' },
            { name: 'Pin Badge', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768957/Badge_anto5i.png' },
            { name: 'Ribbon Badge ', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757781307/2_3_Layer_Badges_gczyub.png' },
            { name: 'ID Card ', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757741267/ID_Card_afof4h.jpg' },
        ].map((category, idx) => (
            <div key={idx} className="category-circle">
                <div className="circle-image">
                    <img src={category.image} alt={category.name} />
                </div>
                <p>{category.name}</p>
            </div>
        ))}
    </div>

    {/* Third row - 8 images */}
    <div className="image-row-8">
        {[
            { name: 'Visiting Card', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769618/Visiting_Card_jqaega.png' },
            { name: 'Sticker', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769529/Sticker_maeu0l.png' },
            { name: 'Roll Sticker', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769612/Roll_Sticker_ujh1ya.png' },
            { name: 'Momento', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757770026/Metal_Momento_ncndv5.png' },
            { name: 'Price Tag', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769853/Price_Tag_z5teel.png' },
            { name: 'Magazine', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769730/Magazines_a8k8fq.png' },
            { name: 'Gift Voucher', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757770180/Gift_Voucher_phbsgt.png' },
            { name: 'Calender', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769839/Calendar_g6awp5.png' },
        ].map((category, idx) => (
            <div key={idx} className="category-circle">
                <div className="circle-image">
                    <img src={category.image} alt={category.name} />
                </div>
                <p>{category.name}</p>
            </div>
        ))}
    </div>
    {/* Fourth row - 8 images */}
    <div className="image-row-8">
        {[
            { name: 'Certificate', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757779940/certificate_1_ls4ifr.png' },
            { name: 'Tissue Box', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757780401/Tissue_Box_nmjaaq.png' },
            { name: 'Mug', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757780584/Cup_Printing_zowwcg.png' },
            { name: 'Brochure', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768287/Brochure_kbhxur.png' },
            { name: 'Catalogs', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757783470/image_2025-09-13_224107002_lzjejp.png' },
            { name: 'Danglers', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757780685/Danglers_zte4cf.png' },
            { name: 'Flags', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769273/Flag_utrs9o.png' },
            { name: 'Invitation', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757781617/Invitation_Cards_k7lwdo.jpg' },
        ].map((category, idx) => (
            <div key={idx} className="category-circle">
                <div className="circle-image">
                    <img src={category.image} alt={category.name} />
                </div>
                <p>{category.name}</p>
            </div>
        ))}
    </div>
    {/* Fifth row - 8 images */}
    <div className="image-row-8">
        {[
            { name: 'Flat bed', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757781569/Flat_Bed_ctiej6.png' },
            { name: 'Print and Cut', image: 'https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757783267/image_2025-09-13_223743130_vx9qsm.png' },
        ].map((category, idx) => (
            <div key={idx} className="category-circle">
                <div className="circle-image">
                    <img src={category.image} alt={category.name} />
                </div>
                <p>{category.name}</p>
            </div>
        ))}
    </div>
</section>


                    <AboutUs />

                    <OurServices />
                    <ContactLandingSection />
                    <Footer />

                </>
            )}
        </div>
    );
};

export default LandingPage;
