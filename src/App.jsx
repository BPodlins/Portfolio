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
    <div>
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
    // Fetch certificates
    fetch('http://localhost:8000/certificates')
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((error) => console.error('Error fetching certificates:', error));

    // Fetch projects
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
      <Routes location={location}>
        <Route path="/" element={<HomeWrapper certificates={certificates} />} />
        <Route path="/about" element={<AboutWrapper />} />
        <Route
          path="/projects"
          element={<ProjectsWrapper projects={projects} />}
        />
        <Route
          path="/certificates"
          element={<CertificatesWrapper certificates={certificates} />}
        />
        <Route path="/contact" element={<ContactWrapper />} />
      </Routes>
      <CustomCursor />
    </>
  );
}

function HomeWrapper({ certificates }) {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Home certificates={certificates} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function AboutWrapper() {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <About />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function ProjectsWrapper({ projects }) {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Projects projects={projects} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function CertificatesWrapper({ certificates }) {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Certificates certificates={certificates} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function ContactWrapper() {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Contact />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
