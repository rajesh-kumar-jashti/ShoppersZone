import React from 'react'
import './orders.css'
import Footer from '../Footer/Footer'
import prod_imag from '../Assets/cat_img1.png'
import { useEffect, useState } from 'react'


const Orders = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('https://shopperszonebackend.onrender.com/totalorders')
      .then((res) => res.json())
      .then((data) => { setAllProducts(data) });
  }

  useEffect(() => {
    fetchInfo();
  }, [])


  return (
    <div className='orders'>
      <div className='orders-contentt'>
        {allproducts.map((product, index) => {
          return <>
            <div key={index} className='orders-content'>
              {/* <img src={prod_imag} alt="" /> */}
              <div className='orders-value'>
                <p>Username: <span>{product.username}</span></p>
                <p>phone number: <span>{product.phoneNumber}</span></p>
                <p>Address: <span>{product.address}</span></p>
                <p>Paymeny Method: <span>{product.paymentMethod}</span></p>
                <p style={{color:"green"}}>Delivery in 2 Days</p>
              </div>
            </div>
          </>
        })}

      </div>


      <Footer />
    </div>
  )
}

export default Orders
