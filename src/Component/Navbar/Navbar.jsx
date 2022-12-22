import React from 'react';
import '../Navbar/Navbar.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';



function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">MDSAFVAN</div>
        <div className="dark-button">
          <Toggle />
        </div>
      </div>   

      <div className="n-right">
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