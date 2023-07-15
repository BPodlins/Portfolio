import './App.css'
import {  BrowserRouter, Routes, Route, Switch, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import { Switch } from 'react-router-dom';
import Home from './Components/Home/Home'
import CustomCursor from './Components/Cursor/CustomCursor'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Certificates from './Components/Certificates/Certificates'
import Contact from './Components/Contact/Contact'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  return (
    <div>
      <Route render = {({location}) => (
      <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
            >
          <BrowserRouter>
              <Switch>
                  <Routes location={location}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/certificates" element={<Certificates />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
              </Switch>
          </BrowserRouter>
        </CSSTransition>
      </TransitionGroup>
      )}/>
      <CustomCursor/>
    </div>
  )
}


export default App
