import React from 'react'
import { Link } from "react-router-dom";
import './top.css'

import {FiPhoneCall} from 'react-icons/fi'
import {AiFillInstagram, AiFillYoutube, AiOutlineMail} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {IMG2} from '../../image/360_F_509662984_wuSDq2bL7gFO7W186pfv7SIUcmX7BEAD.jpg'


const Top = () => {
  return (
    <div className="top">
      <div className="top-container">
      
        <div className="link-container">
          <Link to='/' className='link'> Home</Link>
          <Link to='/cart' className='link'> Cart</Link>
          <Link to='/menu' className='link'> Menu</Link>
        </div>
        <button className='btn'>Sign Up</button>
        <div className="icon-container">
          <div className="icon">
            <h2><FiPhoneCall/></h2>
            <p>(225) 838-4558</p>
          </div>
          <div className="icon">
            <h2><AiOutlineMail/></h2>
            <p>rodin.jeremey@foundtoo.com</p>
          </div> 
        </div>
        <div className="social-icon">
          <BsFacebook className='social'/>
          <AiFillInstagram className='social'/>
          <AiFillYoutube className='social'/>
          <FaTiktok className='social'/>

        </div>
          
      </div>
    </div>
  )
}

export default Top