import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import wishlist_icon from '../Assets/wishlist_icon.png'
import profile from '../Assets/profile.png'
import { ShopContext } from '../../Context/ShopContext'
import DropDown from '../DropDown/DropDown'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const [showNavbar, setShowNavbar] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);
    const {getTotalCartITems} = useContext(ShopContext);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <NavLink to='/' style={{textDecoration: 'none'}}><p>SHOPPERS ZONE</p></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</NavLink>
                </li>
                <li onClick={() => { setMenu("men") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/men'>Men</NavLink>
                </li>
                <li  onClick={() => { setMenu("women") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/women'>Women</NavLink>
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to='/kids'>Kids</NavLink>
                </li>
            </ul>
            <div className="nav-login-cart">
                <NavLink to='/wishlist'><img src={wishlist_icon} style={{height: "25px"}} alt="" /></NavLink>
                <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink>
                <div className="nav-cart-count">{getTotalCartITems()}</div>
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<NavLink to='/login'><button>Login</button></NavLink>}
                {localStorage.getItem('auth-token')
                ?(<div className="profile-dropdown" onClick={handleDropdown}>
                    <img src={profile} style={{height:'35px'}} alt="" />
                    {showDropdown && <DropDown/>}
                </div>)
                :""}
            </div>
        </div>
    </div>
  )
}

export default Navbar
