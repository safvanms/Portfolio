import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import Toggle from '../Toggle/Toggle'
import Logo from '../../img/logo.png'
import LogoLight from '../../img/logo-l.png'
import { Link } from 'react-scroll'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '../Navbar/avatar.jpeg'

function Navbar() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          {darkMode ? (
            <img src={LogoLight} alt="" />
          ) : (
            <img src={Logo} alt="" />
          )}
        </div>

        <div className="hamburger">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {open ? (
              <CloseIcon className={darkMode ? 'white-btn' : 'dark-btn'} />
            ) : (
              <MenuIcon className={darkMode ? 'white-btn' : 'dark-btn'} />
            )}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <div className={darkMode ? 'dark-spread' : 'spread'}>
              <Link
                to="Services"
                smooth={true}
                spy={true}
                onClick={handleClose}
              >
                Services
              </Link>
              <Link to="works" smooth={true} spy={true} onClick={handleClose}>
                Works
              </Link>
              <Link
                to="experience"
                smooth={true}
                spy={true}
                onClick={handleClose}
              >
                Experiences
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                spy={true}
                onClick={handleClose}
              >
                Portfolio
              </Link>
              <Link to="contact" smooth={true} spy={true} onClick={handleClose}>
                Contacts
              </Link>
            </div>
            <div className={darkMode ? 'profile-dark' : 'profile'}>
			  <div className="profile-details">
                <div>
                  <img className="avatar" src={Avatar} alt="avatar" />
                </div>
                <p>muhammedsafvan1ms@gmail.com</p>
                <p>+91 755-886-4266</p>
              </div>
            </div>
			{!darkMode&&<hr/>}
            <div className="spread-icons">
              <span>
                <a onClick={handleClose} href="https://www.instagram.com/mdsafvan1">
                  <InstagramIcon />
                </a>
              </span>
              <span>
                <a
                onClick={handleClose}
				href="https://wa.me/917558864266">
                  <WhatsAppIcon />
                </a>
              </span>
              <span>
                <a
                onClick={handleClose}
				href="https://www.linkedin.com/in/muhammed-safvan-p-118a83225/">
                  <LinkedInIcon />
                </a>
              </span>
              <span>
                <a 
				onClick={handleClose}
				href="https://github.com/safvanms">
                  <GitHubIcon />
                </a>
              </span>
            </div>
          </Menu>
        </div>
      </div>

      <div className="n-right">
        <div className="dark-button">
          <Toggle />
        </div>
        <div className="n-list">
          <ul>
            <Link spy={true} to="Navbar" smooth={true} activeClass="active">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Service</li>
            </Link>
            <Link spy={true} to="works" smooth={true}>
              <li>Works</li>
            </Link>
            <Link spy={true} to="experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
