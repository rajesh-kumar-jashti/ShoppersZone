import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for(let index = 0; index < 300+1;index++){
    cart[index]=0;
  }
  return cart;
}

const getDefaultwishList = () =>{
  let wishlist = {};
  for(let index = 0; index < 300+1;index++){
    wishlist[index]=0;
  }
  return wishlist;
}

const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlistItems, setwishlistItems] = useState(getDefaultwishList());
    
    useEffect(()=>{
      fetch('https://shopperszonebackend.onrender.com/allproducts')
      .then((response)=>response.json())
      .then((data)=>setAll_Product(data))

      if(localStorage.getItem('auth-token')){
        fetch('https://shopperszonebackend.onrender.com/getcart',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: "",
        }).then((response) => response.json())
        .then((data)=>setCartItems(data));
      }

      if(localStorage.getItem('auth-token')){
        fetch('https://shopperszonebackend.onrender.com/getwishlist',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: "",
        }).then((response) => response.json())
        .then((data)=>setwishlistItems(data));
      }
    },[])


    const addToCart = (itemId) =>{
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
      if(localStorage.getItem('auth-token')){
        fetch('https://shopperszonebackend.onrender.com/addtocart',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"itemId":itemId})
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
      }
    }

    const addTowishList = (itemId) =>{
      setwishlistItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
      if(localStorage.getItem('auth-token')){
        fetch('https://shopperszonebackend.onrender.com/addtowishlist',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"itemId":itemId})
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
      }
    }

    const removeFromCart = (itemId) =>{
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
      if(localStorage.getItem('auth-token')){
        fetch('https://shopperszonebackend.onrender.com/removefromcart',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"itemId":itemId})
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
      }
    }

    const removeFromWishList = (itemId) =>{
      setwishlistItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
      if(localStorage.getItem('auth-token')){
        fetch('https://shopperszonebackend.onrender.com/removefromwishlist',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"itemId":itemId})
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
      }
    }

    const getTotalCartITems = ()=>{
      let totalItem=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          totalItem+=cartItems[item];
        }
      }
      return totalItem;
    }

    const getTotalCartAmount = () =>{
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo = all_product.find ((product)=>product.id===Number(item))       
          totalAmount+=itemInfo.new_price*cartItems[item];
        }
      }
      return totalAmount;
    }

    

    const contextValue = {getTotalCartITems,getTotalCartAmount, all_product,wishlistItems,cartItems,addTowishList,addToCart,removeFromCart,removeFromWishList};

  return (
    <div>
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>      
    </div>
  )
}

export default ShopContextProvider;