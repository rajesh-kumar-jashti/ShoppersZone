import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = (props) => {

  const [popular_in_men, setPopular_in_men] = useState([]);

  const [popular_in_women,setPopular_in_women] = useState([]);

  const [popular_in_kids,setPopular_in_kids] = useState([]);

  useEffect(()=>{
    fetch('https://shopperszonebackend.onrender.com/popularinmen')
    .then((response)=>response.json())
    .then((data)=>setPopular_in_men(data));
  },[])

  useEffect(()=>{
    fetch('https://shopperszonebackend.onrender.com/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopular_in_women(data));
  },[])

  useEffect(()=>{
    fetch('https://shopperszonebackend.onrender.com/popularinkids')
    .then((response)=>response.json())
    .then((data)=>setPopular_in_kids(data));
  },[])

  let popular = props.category==='men'?popular_in_men:(props.category=='women'?popular_in_women:popular_in_kids)

  return (
    <div className='popular'>
        <h1>POPULAR IN {props.category.toUpperCase()}</h1>
        <div className="popular-item">
            {popular.map((item,i)=>{
              if(props.category === item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else
              return null;
            })}
        </div>
      
    </div>
  )
}

export default Popular
