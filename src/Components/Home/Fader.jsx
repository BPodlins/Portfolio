import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./fader.css";

function Fader({ texts }) {
  const [fadeProp, setFadeProp] = useState("fade-in");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setFadeProp("fade-out");
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeProp("fade-in");
      }, 500); 
    }, 5000); 
    return () => clearInterval(timeout);
  }, [texts]);

  return <h1 className={`welcome ${fadeProp}`}>{texts[currentTextIndex]}</h1>;
}

Fader.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Fader;
