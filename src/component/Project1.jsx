import React from 'react'
import './project1.css'
import photgrid from '../photogrid.jpg'
import {FaAirbnb} from 'react-icons/fa'
import Project3  from './Project3.jsx'
import { data } from './data'
export default function Project1() {
  return (
    <div className='container'>
       <div className="top">
            <div className="navbaro">
                <div className="logoo">
                    <FaAirbnb/> airbnb
                </div>
            </div>
            <div className="photogrid"><img  className="adv" src={photgrid} alt="" /></div>
            <div className="phrase">
                <h1>Online Experiences</h1>
                <h4>
                    join unque interactive activities led by one-of-kind hosts--all without leaving home.    
                </h4>
            </div>
            <div className="carousal">
                {data.map( e =>
                 <Project3 rate={e.rate} num={e.num} img={e.img} desc={e.desc} country={e.country} price={e.price} />
                    
                )}
            </div>
        </div>

        
    </div>
  )
}
