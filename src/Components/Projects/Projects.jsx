import React, { useState } from 'react';
import './projects.css'
import { Container } from 'react-bootstrap';
import  Nav2  from '../Nav/Nav2'; 
import Footer from '../Footer/Footer';
import {
    AiFillGithub,
  } from 'react-icons/ai';

function Projects(){

    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (event) => {
        setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [event.target.name]: event.target.checked
        }));
    };

    return (
        <div className='background'>
            <Nav2 />
            <Container className='tech'>
                <h2 className='h1-tech'>Tech</h2>
                <ul className="clickable-list">
                    <li>
                        <label>
                        <input
                            type="checkbox"
                            name="Java"
                            checked={checkedItems.item1 || false}
                            onChange={handleCheckboxChange}
                        />{' '}
                        Java
                        </label>
                    </li>
                    <li>
                        <label>
                        <input
                            type="checkbox"
                            name="JavaScript"
                            checked={checkedItems.item2 || false}
                            onChange={handleCheckboxChange}
                        />{' '}
                        JavaScript
                        </label>
                    </li>
                    <li>
                        <label>
                        <input
                            type="checkbox"
                            name="Spring"
                            checked={checkedItems.item3 || false}
                            onChange={handleCheckboxChange}
                        />{' '}
                        Spring
                        </label>
                    </li>
                    <li>
                        <label>
                        <input
                            type="checkbox"
                            name="React"
                            checked={checkedItems.item4 || false}
                            onChange={handleCheckboxChange}
                        />{' '}
                        React
                        </label>
                    </li>
                    <li>
                        <label>
                        <input
                            type="checkbox"
                            name="Node.js"
                            checked={checkedItems.item5 || false}
                            onChange={handleCheckboxChange}
                        />{' '}
                        Node.js
                        </label>
                    </li>
                    <li>
                        <label>
                        <input
                            type="checkbox"
                            name="MongoDB"
                            checked={checkedItems.item6 || false}
                            onChange={handleCheckboxChange}
                        />{' '}
                        MongoDB
                        </label>
                    </li>
                </ul>
            </Container>
            <Container className='project'>
                <Container className='project-card'>
                    <div className='photo'>Photo</div>
                    <div className='text'>Text</div>
                    <button className='code-link'><AiFillGithub className='icon' /></button>
                </Container>
                <Container className='project-card'>
                    <div className='photo'>Photo</div>
                    <div className='text'>Text</div>
                    <button className='code-link'><AiFillGithub className='icon' /></button>
                </Container>
                <Container className='project-card'>
                    <div className='photo'>Photo</div>
                    <div className='text'>Text</div>
                    <button className='code-link'><AiFillGithub className='icon' /></button>
                </Container>
            </Container>
            <Footer/>
        </div>
    )
}

export default Projects