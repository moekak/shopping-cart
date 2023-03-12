import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Cart from "./component/Cart/Cart";
import CartItems from "./component/Cart/CartItems";
import CheckOut from "./component/checkout/CheckOut";
import Menu from "./component/Menu/Menu";
import Menus from "./component/Menu/Menus";
import Navbar from "./component/Navbar/Navbar";
import Thank from "./component/thank/Thank";
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
          <Route path={`/checkout`} element={<CheckOut/>}/> 
          <Route path={`/thank`} element={<Thank/>}/> 
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
    
  )
}

export default App