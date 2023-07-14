import './App.css'
import Home from './Components/Home/Home'
import React, { useState, useEffect } from "react"
import CustomCursor from './Components/CustomCursor'


function App() {
  return (
    <div>
        <Home/>
        <CustomCursor />
    </div>
  )
}


export default App
