import React from 'react'
import './Footer.css'
import Wave from '../../img/Wave.png'
import { GrInstagram } from 'react-icons/gr'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>muhammedsafvan1ms@gmail.com</span>
        <div className="f-icon">
          <a href="https://www.instagram.com/mdsafvan1">
            <GrInstagram className='f-btns' size='1.5rem'  />
          </a>
          <a href="https://wa.me/9175588642666">
            <FaWhatsapp className='f-btns'  />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-safvan-p-118a83225/">
            <RiLinkedinFill className='f-btns'  />
          </a>
          <a href="https://github.com/safvanms">
            <AiFillGithub className='f-btns'  />
          </a>
        </div>
      </div>
    </div>
  )
}
