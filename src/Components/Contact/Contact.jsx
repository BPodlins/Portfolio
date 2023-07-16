import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav2 from '../Nav/Nav2';
import Footer from '../Footer/Footer';
import './contact.css';

function Contact() {
    const [showNotification, setShowNotification] = useState(false);
  
    const handleEmailClick = () => {
      const email = 'podlinskibartosz@gmail.com'; 
      navigator.clipboard.writeText(email)
        .then(() => {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 2000); 
        })
        .catch((error) => {
          console.error('Error copying email to clipboard:', error);
        });
    };
  
    return (
      <div className='background'>
        <Nav2 />
        <Container className='contact-cont'>
          <div className='contact-text'>
            <h1 className='contact-h1'>Let's get in touch</h1>
            <p>
              I would love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out to me. I'm always open to new opportunities and collaborations.
              You can contact me via email or my socials. I'll do my best to respond promptly. Let's connect and bring our ideas to life!
            </p>
            <p className="email" onClick={handleEmailClick}>
              Email: podlinskibartosz@gmail.com
            </p>
            {showNotification && (
              <div className="notification">
                Copied to clipboard!
              </div>
            )}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
  
  export default Contact;