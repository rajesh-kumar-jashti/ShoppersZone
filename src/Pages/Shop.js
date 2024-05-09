import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'
import '../Pages/CSS/Shop.css'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <div className="poplar">
        <Popular category="men"/>
      </div>  
      <Popular category="women"/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop
