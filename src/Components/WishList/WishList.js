import React, {useContext} from 'react'
import './wishlist.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/trash.png'


const WishList = () => {
  
    const {wishlistItems,all_product, removeFromWishList} = useContext(ShopContext);
  return (
    <div className='wishlist_body'>
        <h1>My WishList</h1>
        <div className='wishlist_card'>
          {
            all_product.map((e)=>{
              if(wishlistItems[e.id]>0){
                  return <div>
                      <div className="whishlist-items">
                          <img src={e.image} alt="" className='whishlist-image' />
                          <p className='whishlist-name'>{e.name}</p>
                          <div className='wishlist-prices'>
                            <p className='whishlist-n-price'>₹ {e.new_price}</p>
                            <p className='whishlist-o-price'>₹ {e.old_price}</p>
                          </div>
                          <div className='line'></div>
                          <div className='remove-icon' onClick={()=>{removeFromWishList(e.id)}}>
                            <img className='remove-img' src={remove_icon} alt='' />
                            <p>Remove</p>
                          </div>
                      </div>
                  </div>
              }
              return null;
            })
          }
        </div>
        
    </div>
  )
}

export default WishList
