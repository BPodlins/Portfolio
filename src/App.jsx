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
  const [message, setMessage] = useState("");
  const [prevLocation, setPrevLocation] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
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
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/about" element={<AboutWrapper />} />
        <Route path="/projects" element={<ProjectsWrapper />} />
        <Route path="/certificates" element={<CertificatesWrapper />} />
        <Route path="/contact" element={<ContactWrapper />} />
      </Routes>
      <CustomCursor />
    </>
  );
}

function HomeWrapper() {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Home />
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

function ProjectsWrapper() {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Projects />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function CertificatesWrapper() {
  return (
    <div className="page-wrapper">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Certificates />
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
