import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import LOGO from '../../image/cooltext431182961817332.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CarouselItem } from 'react-bootstrap'

const Navbar = () => {
  return (
    <div className="navbar-container">
       <Link to='/'> 
          <img className='logo' src={LOGO} alt="" />
       </Link>
      <Link className='cart' to='/cart'> <AiOutlineShoppingCart/></Link>
    </div>
   
  )
}

export default Navbar