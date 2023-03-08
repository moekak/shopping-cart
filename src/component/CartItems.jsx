import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopCart'

const CartItems = ({id, title, category, price, img, desc}) => {
  const {cartItems, AddCart, RemoveFromCart, upDateCartItemCount} =useContext(ShopContext);
  return (
    <div className="cartItems">
      <p>{title}</p>
      <img src={img} alt="" />
      <p>{price}</p>
      <p>{desc}</p>
      <div className="counter">
        <button onClick={()=> AddCart(id)}>+</button>
        <input value={cartItems[id]} onChange={(e) => upDateCartItemCount(Number(e.target.value), id)} />
        <button onClick={() => RemoveFromCart(id)}>-</button>
      </div>
    </div>
  )
}

export default CartItems