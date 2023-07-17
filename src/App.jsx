import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          className={isTransitioning ? 'fade-out' : 'fade-in'}
        />
        <Route
          path="/about"
          element={<About />}
          className={isTransitioning ? 'fade-out' : 'fade-in'}
        />
        <Route
          path="/projects"
          element={<Projects />}
          className={isTransitioning ? 'fade-out' : 'fade-in'}
        />
        <Route
          path="/certificates"
          element={<Certificates />}
          className={isTransitioning ? 'fade-out' : 'fade-in'}
        />
        <Route
          path="/contact"
          element={<Contact />}
          className={isTransitioning ? 'fade-out' : 'fade-in'}
        />
      </Routes>
      <CustomCursor />
    </>
  );
}

export default App;
