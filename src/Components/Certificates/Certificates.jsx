import React, { useState, useEffect, useRef } from 'react';
import './certificates.css';
import Nav2 from '../Nav/Nav2';
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap';

function Certificates({ certificates }) {
  if (certificates.length === 0) {
    return null;
  }

  const [visibleCertificateIndex, setVisibleCertificateIndex] = useState(0);
  const delay = 7000;
  const intervalRef = useRef(null);

  useEffect(() => {
    const totalCertificates = certificates.length;

    const interval = setInterval(() => {
      setVisibleCertificateIndex((prevIndex) => (prevIndex + 1) % totalCertificates);
    }, delay);

    intervalRef.current = interval;

    return () => clearInterval(interval);
  }, [certificates, delay]);

  const handleCardClick = () => {
    clearInterval(intervalRef.current);
    setVisibleCertificateIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    intervalRef.current = setInterval(() => {
      setVisibleCertificateIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, delay);
  };

  return (
    <div>
      <Nav2 />
      <div className="certificates-container">
        <div className="certificates-grid">
          <CertificateCard
            key={certificates[visibleCertificateIndex]._id}
            certificate={certificates[visibleCertificateIndex]}
            onClick={handleCardClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function CertificateCard({ certificate, isVisible, onClick }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setFlipped(false);
    }
  }, [isVisible]);

  const handleFlip = () => {
    setFlipped(!flipped);
    onClick();
  };

  return (
    <div className={`certificate-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className={`front ${flipped ? 'flipped' : ''}`}>
          <img src={certificate.imageUrl} alt={certificate.text} />
          <div className="certificate-info">
            <p className="certificate-name">{certificate.text}</p>
            <div className="credentials">
              <p className="credentials-link">
                <Button className="credentials-link" href={certificate.url} target="_blank" rel="noopener noreferrer">
                  Credentials
                </Button>
              </p>
            </div>
          </div>
        </div>
        <div className={`back ${flipped ? 'flipped' : ''}`}>
          <p>{certificate.additionalInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
