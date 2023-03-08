import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopCart'
import Menu from '../Menu/Menu';
import Category from './Category';
import './menu.css'



const Menus = () => {
  const { menu, AddCart, category } =useContext(ShopContext);

   
  return (
    <div className="menu-container">
      <div className="menu-top">
        <div className="text">
          <h1>OREDR YOUR FAVORITES <br /> FOODS WITH CHEAP PRICE</h1>
          <button className='btn'><a href="#menu">SEE MENU</a></button>
        </div>
      </div>
      <div id='menu' className="menus">
        <h1>Menu</h1>
        <Category/>
        <div className="menu-wrapper">
          {menu.map((menu) =>{
            return(
              <div>
                  <Menu key={menu.id}{...menu}/>
                  
              </div>
          
              
            )
          })}
        </div>
        
    </div>
    </div>
   
   
  )
}

export default Menus