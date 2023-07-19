import React, { useEffect, useState, useLayoutEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Components/Home/Home';
import CustomCursor from './Components/Cursor/CustomCursor';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Certificates from './Components/Certificates/Certificates';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);
  const [prevLocation, setPrevLocation] = useState(null);

  useEffect(() => {
    
    fetch('http://localhost:8000/certificates')
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((error) => console.error('Error fetching certificates:', error));

    
    fetch('http://localhost:8000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);

    return () => clearTimeout(timeoutId);
  }, [prevLocation]);

  useLayoutEffect(() => {
    setPrevLocation(location);
  }, [location]);

  return (
    <>
      <div className="background"></div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
          mountOnEnter
          unmountOnExit
        >
          <div className="page-wrapper">
            <Routes location={location}>
              <Route
                path="/"
                element={<Home certificates={certificates} />}
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/projects"
                element={<Projects projects={projects} />}
              />
              <Route
                path="/certificates"
                element={<CertificatesPage certificates={certificates} />}
              />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <CustomCursor />
    </>
  );
}

function CertificatesPage({ certificates }) {
  return (
    <div className="certificates-container">
      <Certificates certificates={certificates} />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="contact-container">
      <Contact />
    </div>
  );
}

export default App;
