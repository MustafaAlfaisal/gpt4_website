import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
// BEM naming convention -> Block__Element--Modifier

function Navbar() {
  return (
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar__links'>
        <div className='gpt4__navbar__links__logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar