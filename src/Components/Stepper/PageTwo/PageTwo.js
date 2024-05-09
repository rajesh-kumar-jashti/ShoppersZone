import React from "react";
import "./PageTwo.css";
import { useState, useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import Footer from "../../Footer/Footer";


const PageTwo = ({onButtonClick}) => {
  const {cartItems} = useContext(ShopContext);

  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    address: '',
    paymentMethod: 'cashOnDelivery', 
    productData: cartItems,
    paymentId: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  

  const Orders = async (e) => {

    if (
      formData.username.trim() === '' ||
      formData.phoneNumber.trim() === '' ||
      formData.address.trim() === '' ||
      formData.paymentMethod === ''
    ) {
      // Alert the user that they need to fill out all required fields
      alert('Please fill out all required fields.');
      return; // Exit the function early if any fields are empty
    }
    
    try {
      const response = await fetch('https://shopperszonebackend.onrender.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
      console.log('Form data submitted successfully');
      if (formData.paymentMethod === "cashOnDelivery") {
        onButtonClick("pagefour");
      } else {
        onButtonClick("pagethree");
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

    return (
      <main>
        <div className="but">
          <div className='details-container'>
            <h1>Add Details</h1>
            <div className="details-input">
              <input name="username" value={formData.username} onChange={handleChange}  type="text" placeholder="Enter Name" required/>
              <input name="phoneNumber" type="number" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required/>
              <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Enter Address" required />
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                <option value="cashOnDelivery">Cash on Delivery</option>
                <option value="onlinePayment">Online Payment</option>
              </select>
            </div>
          </div>
          <div className="pagetwo-button">
            <button onClick={() => onButtonClick("pageone")}>Previous</button>
            <button onClick={() => {Orders()}}>Next</button>
          </div>
        </div>
        <Footer/>
      </main>
    );
}

export default PageTwo;