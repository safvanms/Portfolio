import React from 'react'
import  './Card.css';

export default function Card({emoji , heading , detail}) {
  return (
    <div className="card">
     <img src={emoji} alt="" />
     <span>{heading}</span>
     <span>{detail}</span>
     <button className="c-button"><a className='c-button' href='https://github.com/safvanms'>Learn more</a></button>
    </div>
  )
}
