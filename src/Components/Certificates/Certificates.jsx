import React, { useState, useEffect } from 'react';
import './Certificates.css';
import Nav2 from '../Nav/Nav2';

function Certificates({ certificates }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [visibleCertificateIndex, setVisibleCertificateIndex] = useState(0);

  useEffect(() => {
    const delay = 300; 
    setVisibleCertificateIndex(0); 

    const interval = setInterval(() => {
      setVisibleCertificateIndex((prevIndex) => {
        if (prevIndex >= certificates.length - 1) {
          clearInterval(interval);
        }
        return prevIndex + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [certificates]);

  const handleCardClick = (certificate) => {
    setSelectedCertificate((prevSelected) =>
      prevSelected?._id === certificate._id ? null : certificate
    );
  };

  return (
    <div className="certificates-container">
      <div className="certificates-grid">
        <Nav2 />
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate._id}
            certificate={certificate}
            isSelected={selectedCertificate?._id === certificate._id}
            isVisible={index === visibleCertificateIndex}
            onClick={() => handleCardClick(certificate)}
          />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ certificate, isSelected, isVisible, onClick }) {
  return (
    <div
      className={`certificate-card ${isSelected ? 'selected' : ''} ${
        isVisible ? 'visible' : ''
      }`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className={`front ${isSelected ? 'flipped' : ''}`}>
          <img src={certificate.imageUrl} alt={certificate.text} />
        </div>
        <div className={`back ${isSelected ? 'flipped' : ''}`}>
          <p>{certificate.text}</p>
          <a href={certificate.url} target="_blank" rel="noopener noreferrer">
            <button>Credentials</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
