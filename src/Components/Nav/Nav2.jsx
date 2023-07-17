import * as React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import { NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Nav2(){
    return (
        <Navbar className="nav2">
                <NavItem>
                    <Link to="/" variant="text" className="nav2-home">
                    <FontAwesomeIcon icon={faHome} className="nav2-icon" />
                    </Link>
                </NavItem>
              
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
        </Navbar>
    )
}

export default Nav2
