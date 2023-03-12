import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopCart'
import Table from 'react-bootstrap/Table';

const CartItems = ({id, title, category, price, img, desc}) => {
  const {setCartItems, cartItems, AddCart, RemoveFromCart, upDateCartItemCount, menu} =useContext(ShopContext);
  


  const Delete = (itemId) =>{
    setCartItems(menu.filter((menu => menu.id !== itemId)))
  }
  




  return (
    <div className="cartItems">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANITITIES</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='img-container'>
            <p>{title}</p>
            <img className='image' src={img} alt="" />
          </td>
            <td>
              <h4 className='price'>${price}</h4>
            </td>
          <td>
            <div className="form">   
                <button className='btn-plus' onClick={()=> AddCart(id)}>+</button>
                <input className='input' value={cartItems[id]} onChange={(e) => upDateCartItemCount(Number(e.target.value), id)} />
                <button className='btn-minus' onClick={() => RemoveFromCart(id)}>-</button>
            </div>
          </td>
          <td>
            <h4 className='total'>${price * cartItems[id]}</h4>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
  )
}

export default CartItems