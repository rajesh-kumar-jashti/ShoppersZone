import React, { useState } from 'react'
import './CSS/Login.css'
import { NavLink } from 'react-router-dom'

const LoginSignup = () => {
  const [state,setstate]=useState("Login")

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const Login = async ()=>{
    console.log("Login",formData);
    let responseData;
    await fetch('https://shopperszonebackend.onrender.com/login',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }

  const SignUp = async () =>{
    console.log("SignUp",formData);
    let responseData;
    await fetch('https://shopperszonebackend.onrender.com/signup',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }

  const changeHandler = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {(state==="Sign Up")?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:""}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <div className="frgt-pass">
        {(state==="Sign Up")?"":<NavLink to={`/forgot-pwd/${formData.email}`} style={{textDecoration:"none", color: "#333"}} ><p>Forgot Password?</p></NavLink>}
        </div>
        <button onClick={()=>{state==="Login"?Login():SignUp()}}>Continue</button>
        {(state==="Sign Up")
        ?<p className='loginsignup-login'>Already have an account? <span onClick={()=>setstate("Login")}>Login here</span></p>
        :<p className='loginsignup-login'>Create an account? <span onClick={()=>setstate("Sign Up")}>click here</span></p>
        }
      </div>

    </div>
  )
}

export default LoginSignup
