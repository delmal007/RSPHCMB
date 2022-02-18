import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
// import { useState } from 'react'

const Navbar2 = () => {
  // const [Mobile, setMobile] = useState(false)
  return (
    <div>
      <nav className='navbar'>
        <a className='logo'>
          <img src={logo} alt="" width="256" height="70"/>
        </a>
        <ul className="nav-links">
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>
          <Link to='/resources' className='resources'>
            <li>Resources</li>
          </Link>
          <Link to='/blog' className='blog'>
            <li>Blog</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>
          <div className='nav-btn'>
            <Link to='/contact' className='health'>
              <li>myhealth.ng</li>
            </Link>
            <Link to='/contact' className='covid'>
              <li>Covid-19 vacination info</li>
            </Link>
          </div>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar2