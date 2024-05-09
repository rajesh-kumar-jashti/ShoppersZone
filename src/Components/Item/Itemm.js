import React from 'react'
import './Itemm.css'
import { Link } from 'react-router-dom'

const Itemm = (props) => {
  const val=props.link;
  const catt = props.category;
  return (
    <Link to={`/${catt}/${val}`} style={{paddingLeft: 13, textDecoration: 'none'}}>
      <div className="item">
        <div className="item-img">
            <img src={props.image} alt="" />
        </div>
        <h1>{props.type}</h1>
      </div>
    </Link>
  )
}

export default Itemm
