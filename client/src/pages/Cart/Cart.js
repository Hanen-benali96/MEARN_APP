import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Cart.css'
import {delItem} from '../../redux/action/actionCart'
import {NavLink, useParams} from 'react-router-dom'
function Cart() {
  const id=useParams()
  const state = useSelector((state)=>state.handleCart)
  const dispatch = useDispatch()
const handleClose =  (product)=>{
  console.log('product',product)
  dispatch(delItem(id))
  console.log('id',id)
}

var total = 0;
const itemlist=(product)=>{
  total = total + product.price}
 
  const cartItems = (product) =>{
    
    return (
    
      <div className='px-4 my-5 bg-light rounded-3 'key={product.id} >
        <div className='container'></div>
               <button onClick={()=>handleClose(id)} className='btn-close floas-end' aria-label="Close" ></button>
               
               <div className='row justify-content-center'>
               <div className='col-md-4' >
                 <img className='img-cart' src={`/uploads/${product.imagesUrl}`}  />
                 <div className='floats'>
                <h3  className='display-flex  lead fw-bolder'> {product.name} </h3>
                <h4 className='leod fw-bold'>{product.price}dt</h4>
              
              </div>
               </div>

              </div>
             
      </div>
     
    )
  }
  const emptyCart = () => {
    return(
      <div className='px-4 my-5 bg-light rounded-3 py-5 ' >
      <div className='container'>
        <div className='row'>
          <h3>Your Cart is Empty</h3>

        </div>
      </div>
      
      </div>
    )
  
  };
      const button = () => {
        return(
          <div>
          <ul className="list-group mb-3">
               {state.map(itemlist)}
          
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (TND)</span>
            <strong>{ total }dt</strong>
          </li>
        </ul>
        
          <div className='container'>
          <div className='row'>
            <NavLink to="/shipping" className="btn-checkout btn-outline-dark mb-5 w-25 mx auto" > Proceed To checkout </NavLink>
          
            </div> 
            </div>
            </div>
        )
      }
    
  return (
  <>   
        {state.length === 0 &&  emptyCart()}
      {state.lenth !==0 && state.map(cartItems)}
      {console.log(state,'state')}
      {state.lenth !==0 && button()}

  </>

  )
}

export default Cart