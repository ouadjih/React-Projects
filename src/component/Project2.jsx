import React from 'react'
import './project2.css'
import me from '../me.jpg'
import {HiOutlineMail} from 'react-icons/hi'
import {GrLinkedin} from 'react-icons/gr'
import {FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare} from 'react-icons/fa'

export default function Project2() {
  return (
    <div className="project2">
       

        <div className='cardi'>
          <div className="ticket">
            <img className='image' src={me} alt="profile"></img>
            <h2 className='name'>Moh Ouadjih</h2>
            <h5 className="job">Frontend Developper</h5>
            <h6 className='ws'>Medouadjih.website</h6>
            <div className="buttons">
            <button className='email'> <HiOutlineMail/> Email</button>
            <button className='linkdin'> <GrLinkedin/> LinkdIn</button>
            </div>
            <div className="info">
                <div className='about'>
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="interests">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <div className="social">
                <FaTwitterSquare/>
                <FaFacebookSquare/>
                <FaInstagramSquare/>
                <FaGithubSquare/>
            </div>


        </div>
     </div>
    </div>
  )
}
