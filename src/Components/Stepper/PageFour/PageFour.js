import React from "react";
import { NavLink } from "react-router-dom";
import './pagefour.css'
import success_icon from '../../Assets/check.png'

const PageFour = () => {
    return (
      <div className="pagefour">
        <h1>Success</h1>
        <img src={success_icon} alt="" />
        <NavLink to='/'><button>Continue</button></NavLink> 
      </div>
    );
}

export default PageFour;