import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Login from './components/Login'
import './App.css'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <> 
    <BrowserRouter> 
      <Navbar />
        <Routes> 
          
          <Route path = "/login" element = {<Login />}> </Route>
          <Route path = "/blog" element = {<Blog />}> </Route>
          <Route path = "/projects" element = {<Projects />}> </Route>
          <Route path = "/about" element = {<About />}> </Route>
        </Routes>
    </BrowserRouter>     

    </>
  )
}

export default App
