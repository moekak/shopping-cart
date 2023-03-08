import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import LOGO from '../../image/cooltext431182961817332.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className='logo' src={LOGO} alt="" />
      <Link className='cart' to='/cart'> <AiOutlineShoppingCart/></Link>
    </div>
   
  )
}

export default Navbar