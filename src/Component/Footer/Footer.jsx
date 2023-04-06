import React from 'react'
import './Footer.css'
import Wave from '../../img/Wave.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { INITIAL_MSG } from '../Navbar/Navbar';


export default function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <div className="f-icon">
          <a href={`https://wa.me/917558864266?text=${INITIAL_MSG}`}>
            <WhatsAppIcon />
          </a>
          <a href="https://www.instagram.com/mdsafvan1">
            <InstagramIcon   />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-safvan-p-118a83225/">
            <LinkedInIcon   />
          </a>
          <a href="https://github.com/safvanms">
            <GitHubIcon />
          </a>
        </div>
      <span className='footer-copyright'>©2022 Muhammed Safvan, All right reserved.</span>
      </div>
    </div>
  )
}
