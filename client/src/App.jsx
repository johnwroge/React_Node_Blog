import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Login from './components/login'
import './App.css'
import Navbar from './components/navbar'

function App() {
  return (
    <> 
    <BrowserRouter> 
      <Navbar />
    </BrowserRouter>     
      {/* <h1> Blog</h1> */}
    </>
  )
}

export default App
