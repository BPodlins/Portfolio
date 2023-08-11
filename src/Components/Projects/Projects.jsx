import React, { useState, useEffect } from 'react';
import './projects.css';
import { Container } from 'react-bootstrap';
import Nav2 from '../Nav/Nav2';
import Footer from '../Footer/Footer';
import { AiFillGithub } from 'react-icons/ai';
import {Button} from 'react-bootstrap';

function Projects({ projects }) {
  const [checkedItems, setCheckedItems] = useState({
    Java: false,
    JavaScript: false,
    Spring: false,
    React: false,
    NodeJS: false,
    MongoDB: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const filterProjects = (project) => {
    const projectCategories = project.category;
    const checkedCategories = Object.entries(checkedItems)
      .filter(([category, isChecked]) => isChecked)
      .map(([category]) => category);
  
    return checkedCategories.length === 0 || projectCategories.some(category => checkedCategories.includes(category));
  };


  useEffect(() => {
    console.log('Updated checkedItems:', checkedItems);
  }, [checkedItems]);

  console.log('Original projects:', projects);

  return (
    <div className='background'>
      <Nav2 />
        <div className='tech-container'>
          <h2 className='h1-tech'>Tech</h2>
          <ul className="clickable-list">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="Java"
                  defaultChecked={checkedItems.Java}
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
                  defaultChecked={checkedItems.JavaScript}
                  onChange={handleCheckboxChange}
                />{' '}
                JavaScript
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="Selenium"
                  defaultChecked={checkedItems.Spring}
                  onChange={handleCheckboxChange}
                />{' '}
                Selenium
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="React"
                  defaultChecked={checkedItems.React}
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
                  defaultChecked={checkedItems.NodeJS}
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
                  defaultChecked={checkedItems.MongoDB}
                  onChange={handleCheckboxChange}
                />{' '}
                MongoDB
              </label>
            </li>
          </ul>
        </div>
        <Container className="project">
              {projects.filter(filterProjects).map((project) => (
                <Container key={project._id} className="project-card">
                  <img className="photo" src={project.imageUrl} alt="Project" />
                  <div className="text">{project.text}</div>
                  <Button href={project.url} className="code-link">
                    <AiFillGithub className="icon" />
                  </Button>
                </Container>
              ))}
               <Footer />
        </Container>
    </div>
  );
}

export default Projects;
