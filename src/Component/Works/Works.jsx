import React from 'react'
import './Works.css'
import Html from '../../img/html.png'
import Css from '../../img/css.png'
import Js from '../../img/js.png'
import Rjs from '../../img/react.png'
import Njs from '../../img/njs.png'
import { motion } from "framer-motion";
import {Link} from 'react-scroll';




export default function Works() {



  return (
    <div className="works" id ='works'>
      <div className="awesome">
        <span>Works with All these</span>
        <span>Tools & Libraries </span>
        <span>
          Makes more Beautiful User Interfaces with React
          The most popular Library of Js.
          <br />
          Different varieties of Styles.
          <br />
          Implementing design on mobile websites.
          Creating tools that improve site interaction regardless of the browser.
        </span>
        <Link spy={true} to='contact' smooth={true} >
        <button className="button s-button">Hire me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: '#ABF1ff94' }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div 
        initial={{rotate : 60}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5 , type : 'spring' }}
        className="w-mainCircle">
          <div className="w-secCircle">
            <img className='imgs' src={Js} alt="" />
          </div>
          <div className="w-secCircle">
            <img className='imgs' src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img className='imgs' src={Rjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img className='imgs' src={Njs} alt="" />
          </div>
          <div className="w-secCircle">
            <img className='imgs' src={Css} alt="" />
          </div>
        </motion.div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}
