import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Products'
import About from './About'
import Contact from './Contact'

function Homepage() {
  return (
    <div>
      <Navbar/>  
      <Home/>
      <About/>
      <Products/>
      <Contact/>
      
     
    </div>
  )
}

export default Homepage
