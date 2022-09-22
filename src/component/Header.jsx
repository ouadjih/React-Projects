import React from 'react'
import "./header.css"
import logo from '../react.png'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='navbar'>
      <div className="brand">
        <img className="logo" src={logo} alt="react logo"/>
        ReactFacts
      </div>
        <div className="title"><Link to ='/'>Home</Link></div>
        <div className="title"><Link to ='project1'>React Course - project 1</Link></div>
        <div className="title"><Link to ='project2'>React Course - project 2</Link></div>
        <div className="title"><Link to ='project3'>React Course - project 3</Link></div>
        
    </div>
  )
}
