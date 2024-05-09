import React from 'react'
import '../BreadCum/BreadCum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const BreadCum = (props) => {
    const {product} = props;
    return (
    <div className='breadcum'>
      HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.type} <img src={arrow_icon} alt="" /> {product.name} <img src={arrow_icon} alt="" />
    </div>
  )
}

export default BreadCum
