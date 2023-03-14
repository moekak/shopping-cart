import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopCart'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './checkout.css'
import { Link } from 'react-router-dom'


const CheckOut = () => {
    const { total } =useContext(ShopContext);

    
  return (

    <div className="checkout-container">
        
        <div className="order-summary">
            <div className="detail">
                <h1 className='summary'>Order Sumarry</h1>
                <div className="subtotal">
                    <h4>Subtotal</h4>
                    <h4 style={{fontWeight : '700'}}>${total}</h4>
                </div>
                <div className="shipping-cost">
                    <h4>Shipping</h4>
                    <h4 style={{color: total > 100 ? "green": 'black',fontWeight: '700'}}>{total > 100? 'free' : '$10'}</h4>
                </div>
                <div className="promotion">
                    <Dropdown>
                        <Dropdown.Toggle>
                            Add promotion code
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <input className='input-promotion' type="text" placeholder='Add code..'/>
                            <p className='desc'>please enter 4-digit number <br />ex) 3789 </p>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="total-container">
                    <h4>Total</h4>
                    <h4 style={{fontWeight: '700'}}>${total > 100 ? total : total + 10}</h4> 
                </div>
            </div>
            <Link to='/thank'>
                <div className="d-grid gap-2 py-3">
                    <Button variant="success" size="lg">
                        Order Confirm
                    </Button>    
                </div>
            </Link>
            
            
        </div>
        <div className="delivery-info">
            <form class=" form-container row g-3">
                <div class="col-md-6">
                    <label for="name" class="form-label">First name</label>
                    <input type="name" class="form-control" id="name"/>
                </div>
                <div class="col-md-6">
                    <label for="name" class="name">Last name</label>
                    <input type="name" class="form-control" id="name"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CheckOut