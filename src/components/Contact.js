import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// ⚠️ Replace these with your actual EmailJS credentials from https://www.emailjs.com
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2>Contact <span>Me</span></h2>
          <p>Feel free to reach out for opportunities or collaborations</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:nikhita.data2807@gmail.com">nikhita.data2807@gmail.com</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:9452518080">945.251.8080</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaLinkedin /></div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/nikhita-kk-394546272/" target="_blank" rel="noreferrer">
                  nikitha-kk-394546272
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <span>United States</span>
              </div>
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              {/* name must match your EmailJS template variables */}
              <input type="text" name="from_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="reply_to" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea rows="5" name="message" placeholder="Your Message" required />
            </div>

            {status === 'success' && (
              <div className="form-status success">
                <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                <FaExclamationCircle /> Something went wrong. Please try again or email directly.
              </div>
            )}

            <button type="submit" className="btn-primary btn-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
