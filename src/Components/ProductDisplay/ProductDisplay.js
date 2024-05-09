import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import Footer from '../Footer/Footer'
import { ShopContext } from '../../Context/ShopContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart, addTowishList} = useContext(ShopContext);


  return (
    <>
      <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">₹ {product.old_price}</div>
          <div className="productdisplay-right-price-new">₹ {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque atque quibusdam ut blanditiis maiores facilis dolores voluptates rerum molestias ipsa placeat consectetur pariatur, nisi perspiciatis nam odio minima. Deleniti.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div>
          <button style={{marginRight:"20px"}} onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
          <button style={{width: "240px", border: "2px solid #333", background: "#fff", color: "#333"}} onClick={()=>{addTowishList(product.id)}} >ADD TO WISHLIST</button>
        </div>
        <p className='product-display-right-category1'><span>Category: </span>Women, T-Shirt, Crop Top</p>
        <p className='product-display-right-category2'><span>Tags: </span>Modern, Latest</p>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default ProductDisplay
