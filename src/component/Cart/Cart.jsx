import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopCart'
import CartItems from './CartItems';
import data from '../../data'
import './cart.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const Cart = () => {
  const { menu, AddCart, category, cartItems, total } =useContext(ShopContext);
  return (
    <div className='cart-container'>
      <h1 className='m-5'>Your Cart</h1>
      <div className="cart-items">
        {data.map((data) =>{
          if (cartItems[data.id] !== 0){
            return (
              <div>
                <CartItems key={data.id} {...data}/>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-btn m-5">
        
        <Link  to='/'><Button variant="secondary" size="lg" className='checkput-btn ' style={{ fontSize: '1rem'}}>Continue shopping</Button> </Link>
        <Link to='/checkout'><Button variant="primary" size="lg" className='checkout-btn' style={{ fontSize: '1rem'}}>Checkout</Button></Link>
        
        
      </div>
    </div>
  )
}

export default Cart