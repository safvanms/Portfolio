import { React } from 'react'
import './Intro.css'
import Github from '../../img/Github--.png'
import Instagram from '../../img/Instagram--.png'
import In from '../../img/in--.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Intro() {
  const transition = { duration: 2, type: 'spring' }

  return (
    <div className="intro">
      <div className="i-left">
        <div
          className="blur in-blur "
          style={{
            background: '#F4F2F1',
            top: '-2.5rem',
            width: '21rem',
            height: '11rem',
            left: '15rem',
          }}
        ></div>
        
        <div className="i-name">
          <span>Hey ! this is</span>
          <span>Muhammed Safvan</span>
          <span>
            Frontend | React.js Developer with a little level of experience in web
            designing and development , producing the Quality work
          </span>
        </div>
        
        <div className="blur i-blur1" style={{ background: '#FDF0E7' }}></div>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/safvanms">
            <img className="imgs" src={Github} alt="icon" />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-safvan-p-118a83225/">
            {' '}
            <img className="imgs" src={In} alt="icon" />
          </a>
          <a href="https://www.instagram.com/mdsafvan1">
            <img className="imgs" src={Instagram} alt="icon" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%', color: 'black' }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: '18rem', left: '8rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '0rem', color: 'black' }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Awards" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
