import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
  const {getTotalCartAmount,all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartItems'>
      <div className='cart-items'>
        <div className="cartitems-right">
          <div className='cartItems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {
            all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div>
                        <div className="cartitems-format cartItems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p className='title'>{e.name}</p>
                            <p className='price'>₹ {e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>₹ {e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })
          }
        </div>
        <div className="cartitems-left">
        <div className='direction'>
            <div className='CartTotals'>
              <h1>Cart Totals</h1>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Subtotal</p>
                <p>₹ {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr/>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <h1 className='total'>Total</h1>
                <h1 className='total'>₹ {getTotalCartAmount()}</h1>
              </div>
              {/* <button>Proceed to Checkout</button> */}
            </div>
          {/* <div className='store'>
            <h1>Find in the store</h1>
            <div className='search-box'>
              <select name="items" className='finditems' id="finditems">
                <option value="none" selected disabled hidden>Select an Option</option> 
                {
                  all_product.map((e)=>{
                    if(cartItems[e.id]>0){
                        return <option value={e.name}>{e.name}</option>
                    }
                    return null;
                  })
                }
              </select>
              <button>Search</button>
            </div>
            {
              all_product.map((e)=>{
                  if(cartItems[e.id]>0){
                      return <div className="store-items">
                                <img src={e.image} alt="" />
                                <div className='store-middle'>
                                  <p>{e.name}</p>
                                  <div className="location">
                                    <img src={loca} alt="" />
                                    <p>Location</p>
                                  </div>
                                </div>
                                <div className="distance">
                                  <p>1.5 KM</p>
                                </div>
                              </div>
                        }
                  return null;
              })
            }
            
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
