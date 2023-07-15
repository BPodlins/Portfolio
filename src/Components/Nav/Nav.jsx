import * as React from 'react'
import './nav.css'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav className="nav">
            <ul>  
                <li>
                    <Link to="/about" variant="text" className="nav-button">About Me</Link>
                </li>

                <li>
                    <Link to="/projects" variant="text" className="nav-button">Projects</Link>
                </li>

                <li>
                    <Link to="/certificates" variant="text" className="nav-button">Certificates</Link>
                </li>

                <li>
                    <Link to="/contact" variant="text" className="nav-button">Contact me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
