import React, { useState } from 'react';
import './projects.css';
import { Container } from 'react-bootstrap';
import Nav2 from '../Nav/Nav2';
import Footer from '../Footer/Footer';
import { AiFillGithub } from 'react-icons/ai';

function Projects({ projects }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [event.target.name]: event.target.checked,
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
                checked={checkedItems.Java || false}
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
                checked={checkedItems.JavaScript || false}
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
                checked={checkedItems.Spring || false}
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
                checked={checkedItems.React || false}
                onChange={handleCheckboxChange}
              />{' '}
              React
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="NodeJS"
                checked={checkedItems.NodeJS || false}
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
                checked={checkedItems.MongoDB || false}
                onChange={handleCheckboxChange}
              />{' '}
              MongoDB
            </label>
          </li>
        </ul>
      </Container>
      <Container className="project">
        {projects.map((project) => (
          Object.keys(checkedItems).every(
            (item) => checkedItems[item] && project.category.includes(item)
          ) && (
            <Container key={project._id} className="project-card">
              <img className="photo" src={project.imageUrl} alt="Project" />
              <div className="text">{project.text}</div>
              <a href={project.url} className="code-link">
                <AiFillGithub className="icon" />
              </a>
            </Container>
          )
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
