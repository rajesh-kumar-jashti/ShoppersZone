import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './forgotPassword.css';

const ForgotPassword = () => {
  const { email } = useParams();
  
    const [formData, setFormData] = useState({
        email: email,
        newPassword: "",
        confirmPassword: ""
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const UpdatePassword = async () => {
        if (formData.newPassword !== formData.confirmPassword) {
            setPasswordsMatch(false);
            return; 
        }

        console.log("UpdatePassword", formData);
        try {
            const response = await fetch('https://shopperszonebackend.onrender.com/update-password', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                window.location.replace('/login');
            } else {
                alert('updated successful');
                window.location.replace('/login');
            }
        } catch (error) {
            console.error('Error updating password:', error);
        }
    };

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setPasswordsMatch(true);
    };

    return (
        <div className='forgot-pwd'>
          <h1 style={{textAlign: "center", paddingTop: "35px", fontSize: "24px", fontFamily: "Poppins", fontWeight: "500"}}>Forgot Password</h1>
            <div className="fgpwd-inputs">
                <input
                    name='newPassword'
                    value={formData.newPassword}
                    onChange={changeHandler}
                    type="password"
                    placeholder='Enter New Password'
                />
                <input
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    type="password"
                    placeholder='Confirm Password'
                />
            </div>
            {!passwordsMatch && (
                <p style={{ color: 'red', paddingLeft: '80px', fontSize: '14px', paddingTop: '8px' }}>
                    Passwords do not match!
                </p>
            )}
            <div className='fgpwd-button'>
                <button onClick={UpdatePassword} style={{cursor: "pointer"}}>Submit</button>
            </div>
        </div>
    );
};

export default ForgotPassword;
