import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopCart'
import CartItems from './CartItems';
import data from '../data'

const Cart = () => {
  const { menu, AddCart, category, cartItems, totalAmount, total } =useContext(ShopContext);
  console.log(total);



  return (
    <div>
      {data.map((data) =>{
            if (cartItems[data.id] !== 0){
                return (
                    <div>
                      <CartItems key={data.id} {...data}/>
                    </div>
                )
            }
        })}
        <p>{total}</p>
  
    </div>
  )
}

export default Cart