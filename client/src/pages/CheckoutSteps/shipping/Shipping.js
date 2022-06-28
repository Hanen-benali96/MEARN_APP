import React from 'react'
import {useSelector} from 'react-redux';
import './shipping.css'
import Swal from 'sweetalert2'
function Shipping() {

  const user = useSelector(state => state.authReducer.user);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Payment Successful',
    showConfirmButton: true,
    timer: 1500
  })
  
  return (
    <div className="wrappers">
    <div className="containers">
        <form action="">
            <h1>
                <i className="fas fa-shipping-fast"></i>
                Shipping Details
            </h1>
            <div className="fullName">
                <div>
                    <label for="f-name">Full Name</label>
                    <input type="text" name="f-name" value={user.name}/>
                </div>
                
            </div>
            <div className="street">
                <label for="name">address1</label>
                <input type="text" name="address1" value={user.address1}/>
            </div>
            <div className="address-info">
                <div>
                    <label for="city">address2</label>
                    <input type="text" name="city" value={user.address2}/>
                </div>
                <div>
                    <label for="country">country</label>
                    <input type="text" name="country" value={user.country}/>
                </div>
                <div>
                    <label for="zip">Zip</label>
                    <input type="text" name="zip" value={user.zipCode}/>
                </div>
            </div>
            <h1>
                <i className="far fa-credit-card"></i> Payment Information
            </h1>
            <div className="cc-num">
                <label for="card-num">Credit Card . </label>
                <input type="text" name="card-num"/>
            </div>
            <div className="cc-info">
                <div>
                    <label for="card-num">Exp</label>
                    <input type="text" name="expire"/>
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security"/>
                </div>
            </div>
            <div className="btns">

            
<button className='btn btn-outline-dark mb-5 w-25 mx auto'>Checkout</button>
            </div>
        </form>
    </div>
</div>
      

  )
}

export default Shipping;