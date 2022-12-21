import React from 'react'
import './Toggle.css'
import { FiSun } from 'react-icons/fi'
import { HiOutlineMoon } from 'react-icons/hi'
import { themeContext } from '../../Context'
import { useContext } from 'react'
 
export default function Toggle() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode


  const handleClick =() =>{
    theme.dispatch({type: 'toggle'})
  }

  return (
    <div className="toggle" onClick={handleClick}>
      <HiOutlineMoon />
      <FiSun />
      <div
        className="t-button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
        
      ></div>
    </div>
  )
}
