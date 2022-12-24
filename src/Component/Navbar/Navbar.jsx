import React from 'react';
import '../Navbar/Navbar.css';
import Toggle from '../Toggle/Toggle';
import Logo from '../../img/logo.png';
import LogoLight from '../../img/logo-l.png';
import {Link} from 'react-scroll';
import { themeContext } from '../../Context'
import { useContext } from 'react'


function Navbar() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          {darkMode ? <img src={LogoLight} alt="" /> : <img src={Logo} alt="" /> }
        </div>
      </div>   

      <div className="n-right">
      <div className="dark-button">
          <Toggle />
        </div>
        <div className="n-list">
          <ul>
            <Link spy={true} to='Navbar' smooth={true} activeClass={'activeClass'}>
            <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} >
            <li>Service</li>
            </Link>
            <Link spy={true} to='works' smooth={true} >
            <li>Works</li>
            </Link>
            <Link spy={true} to='experience' smooth={true} >
            <li>Experience</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} >
            <li>Portfolio</li>
            </Link>
          </ul>                             
        </div>
        <Link spy={true} to='contact' smooth={true} >
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar; 