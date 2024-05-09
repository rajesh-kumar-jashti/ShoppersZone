import React from 'react'
import './Footer.css'
import instagram_clone from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <p>SHOPPERS ZONE</p>
        </div>
        <ul className='footer-links'>
            {/* <li><NavLink style={{textDecoration: 'none', color: 'black'}} to='http://localhost:5173/'>Be a Seller</NavLink></li> */}
            <li><NavLink style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</NavLink></li>
            <li><NavLink style={{textDecoration: 'none', color: 'black'}} to='/contact'>Contact</NavLink></li>
            <li><NavLink style={{textDecoration: 'none', color: 'black'}} to='/about'>About</NavLink></li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_clone} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
