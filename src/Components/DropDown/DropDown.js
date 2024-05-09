import React from "react"
import './dropdown.css'
import { NavLink } from "react-router-dom"

const DropDown = () => {
    return (
        <div className="dropdown-content">
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/wishlist'>Wishlist</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</NavLink>
        </div>
    )
}

export default DropDown
