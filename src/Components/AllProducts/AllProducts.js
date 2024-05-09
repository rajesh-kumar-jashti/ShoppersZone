import React from 'react'
import './AllProducts.css'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const AllProducts = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div>
        <h1 style={{color:'#333',fontWeight:'500',fontSize:'28px',marginLeft:'14%'}}>All Products</h1>
        <div className='all_products'>
        {
          all_product.map((item,i)=>{
            if(item.category === props.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
          })
        }
        </div>
    </div>
    
  )
}

export default AllProducts
