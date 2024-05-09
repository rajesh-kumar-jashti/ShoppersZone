import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import BreadCum from '../Components/BreadCum/BreadCum';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  
  return (
    <div>
      <BreadCum product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
