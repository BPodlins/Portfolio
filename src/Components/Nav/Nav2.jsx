import * as React from 'react';
import './nav2.css';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import { NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";

function Nav2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(window.innerWidth >= 1100);
  const [isOverlapping, setIsOverlapping] = React.useState(false); 
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    const shouldOverlap = window.innerWidth < 1100;
    setIsMenuOpen(!shouldOverlap);
    setIsOverlapping(shouldOverlap);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Navbar className={`nav2 ${isOverlapping ? "nav2-blur" : ""}`}>
      {isMenuOpen && window.innerWidth < 1100 && (
        <NavItem className="nav2-menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="nav2-icon" />
        </NavItem>
      )}

      <div className={`nav2-menu${isMenuOpen ? "" : " nav2-menu-collapsed"}`}>
        {isMenuOpen && window.innerWidth >= 1100 && (
          <NavItem>
            <Link to="/" variant="text">
              <FontAwesomeIcon icon={faHome} className="nav2-icon" />
            </Link>
          </NavItem>
        )}

        {isMenuOpen && window.innerWidth < 1100 && (
          <NavItem onClick={toggleMenu}>
            <Link to="/" variant="text" className="nav2-button">
              Home
            </Link>
          </NavItem>
        )}

        <NavItem>
          <Link to="/about" variant="text" className="nav2-button">About Me</Link>
        </NavItem>

        <NavItem>
          <Link to="/projects" variant="text" className="nav2-button">Projects</Link>
        </NavItem>

        <NavItem>
          <Link to="/certificates" variant="text" className="nav2-button">Certificates</Link>
        </NavItem>

        <NavItem>
          <Link to="/contact" variant="text" className="nav2-button">Contact me</Link>
        </NavItem>
      </div>

      {!isMenuOpen && (
        <NavItem className="nav2-menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="nav2-icon" />
        </NavItem>
      )}
    </Navbar>
  );
}

export default Nav2;
