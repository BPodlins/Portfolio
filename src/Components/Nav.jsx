import * as React from 'react'
import '../Pages/style.css'
import Button from "react-bootstrap/Button";

function Nav(){
    return (
        <nav className="nav">
            <ul>  
                <li><Button variant="text" className="nav-button">About Me</Button></li>
                <li><Button variant="text" className="nav-button">Projects</Button></li>
                <li><Button variant="text" className="nav-button">Certificates</Button></li>
                <li><Button variant="text" className="nav-button">Contact me</Button></li>
            </ul>
        </nav>
    )
}

export default Nav
