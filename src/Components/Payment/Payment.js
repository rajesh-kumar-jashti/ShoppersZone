import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './payment.css'

const Payment = () => {
    const { getTotalCartAmount, all_product, cartItems} = useContext(ShopContext);

    
    return (
        <div className='payment-table'>
            <div className='cart-itemss'>
                <div className='cartItems-format-mainn'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Total</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div>
                            <div className="cartitems-formatt cartItems-format-mainn">
                                <img src={e.image} alt="" className='carticon-product-iconn' />
                                <p className='title'>{e.name}</p>
                                <p>₹ {e.new_price * cartItems[e.id]}</p>
                            </div>
                        </div>
                    }
                    return null;
                })
                }
                <hr/>
                <div className='CartTotalss'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Subtotal</p>
                        <p>₹ {getTotalCartAmount()}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 className='total'>Total</h1>
                        <h1 className='total'>₹ {getTotalCartAmount()}</h1>
                    </div>
                    {/* <button>Proceed to Checkout</button> */}
                </div>

            </div>
        </div>
    )
}

export default Payment
