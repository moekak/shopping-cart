import React, {createContext, useState, useEffect} from 'react'
import data from '../data'
const categories = ["all","Chinese", "Japanese", "Italian"]

export const ShopContext = createContext('')
const getDefaultCart = () =>{
    let cart ={}
    for (let i = 1; i< data.length +1; i ++){
        cart[i] = 0
    }
    
    return cart;
}

export const ShopContextProvider = ({children}) =>{
    
    const [menu, setMenu] = useState(data)
    const [category, setCategory] = useState(categories)
    const [cartItems, setCartItems] = useState((getDefaultCart()))
    const [total, setTotal] = useState('')

    const price = menu.map((menu) => menu.price)
    

    const totalamount = 
        data.map((data) =>{
            return data.price * cartItems[data.id]
        })

    useEffect(() =>{
        let total = 0;
        for (let i =0; i < totalamount.length; i ++){
            total = total + totalamount[i]
        }
        setTotal(total)
    })

     const filter = (category) =>{
      if (category === 'all'){
        setMenu(data);
        return;
      }
      const newItems = data.filter((item) => item.category===category)
        setMenu(newItems)
        
     }
   
 
    const AddCart = (itemId) =>{
       
        setCartItems((prev)=> ({...prev, [itemId] : prev[itemId] + 1}))
       
     
    }
    const RemoveFromCart = (itemId) =>{
      
        setCartItems((prev)=> ({...prev, [itemId] : prev[itemId] - 1}))
     
    }

    const upDateCartItemCount = (newCount, itemId) =>{
       

        setCartItems((prev) => ({...prev, [itemId]: newCount}))
    }
    

    const ContextValue = {
        menu,
        AddCart,
        setMenu,
        category,
        cartItems,
        setCartItems,
        RemoveFromCart,
        upDateCartItemCount,
        total,
        filter
        
    }
    
    return (
        <ShopContext.Provider value={ContextValue}>
            {children}
        </ShopContext.Provider>
        
        

    )
}

