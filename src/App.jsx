import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Cart from "./component/Cart";
import CartItems from "./component/CartItems";
import Menu from "./component/Menu/Menu";
import Menus from "./component/Menu/Menus";
import Navbar from "./component/Navbar/Navbar";
import Top from "./component/Top/Top";

import { ShopContext, ShopContextProvider } from "./context/ShopCart";

const App = () => {
  return (
    
    <ShopContextProvider>
      
      <BrowserRouter className='moeka'>
        <Navbar/>
        <Routes>
          <Route path={`/`} element={<Menus/>}/>
          <Route path={`/cart`} element={<Cart/>}/> 
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
    
  )
}

export default App