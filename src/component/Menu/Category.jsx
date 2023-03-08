import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopCart'

const Category = () => {
  const { menu, filter,category } = useContext(ShopContext)
  return (
    <div className="header">
    <div className="button">
        {category.map((category) =>{
        return(
            <button className='btn-category' onClick={() => {filter(category)}}>{category}</button>
        )
        })}
    </div>
    
    
</div>
  )
}

export default Category