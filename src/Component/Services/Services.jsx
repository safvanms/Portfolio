import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { motion } from "framer-motion";



export default function Services() {

  const transition = {duration :2 , type : 'spring'}


  return (
    <div className="services" id='Services'>
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Makes more Beautiful User Interfaces with React
          <br/>
          The most popular Library of the Javascript 
        </span>
<a href='blah' download>
        <button className="button s-button">Download CV</button>
</a>
        <div className="blur s-blur1" style={{background:"#ABF1ff94"}}></div>
      </div>
      {/* right side */}
      <div className="cards">
          {/* first card */}
          <motion.div
          whileInView={{left :'22rem'}}
          initial={{left :'14rem'}}
          transition={transition}
          style={{left:"22rem"}}>
             <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail= {"Figma  Canva  Photoshop  Adobe etc "}
          />  
          </motion.div >
          {/* second card */}
          <motion.div 
          whileInView={{left :'3rem'}}
          initial={{left: '25%'}}
          transition={transition}
          style={{top:"12rem" , left : "3rem"}}>
          <Card
          emoji = {Glasses}
          heading = {'Developer'}
          detail= {"HTML  css  Javascript  React  Redux .."}
          /> 
          </motion.div>
          {/* Third card */}
          <motion.div 
           whileInView={{left :'20rem'}}
           initial={{left: '15rem'}}
           transition={transition}
          style={{top:"19rem" , left : "20rem"}}>
          <Card
          emoji = {Humble}
          heading = {'UI/UX'}
          detail= {"Better UI experiences with the modern patterns "}
          /> 
          </motion.div>
          <div className="blur s-blur2" style={{background : "var(--purple)"}}></div>
      </div>
    </div>
  )
}
