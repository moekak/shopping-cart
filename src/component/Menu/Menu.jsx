import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopCart'

const Menu = ({id, title, category, price, img, desc}) => {
    const { AddCart, cartItems, menu } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    

    
   
  return (
    <div className="menu">
        <main>
            <h2>{title}</h2>
            <div className="image-container">
                <img className='img' src={img} alt="" />
            </div>
            <div className="detail">
                
                <h3>${price}</h3>
            </div>
             
                <h4>{desc}</h4>
  
            <button className='add-btn' onClick={() => AddCart(id)} >Add items {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </main>
        

    </div>
  )
}

export default Menu