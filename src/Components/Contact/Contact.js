import React from 'react'
import { useRef } from 'react';
import './contact.css'
import Footer from '../Footer/Footer'
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {

  const [snackbarData, setSnackbarData] = React.useState({
    open: false,
    message: "",
    severity: "success", 
  });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current.from_email.value.trim();
    const name = form.current.from_name.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();
  
    if (!email || !name || !subject || !message) {
      console.log("Please fill in all fields");
      setSnackbarData({
        open: true,
        message: "Please fill in all fields",
        severity: "error",
      });
      return;
    }

    emailjs.sendForm('service_6bvr9gc', 'template_g3uute6', form.current, 'IiOYO_V0t9iMPjrhM')
    .then(
      (result) => {
        setSnackbarData({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setSnackbarData({
          open: true,
          message: "Error sending email. Please try again later.",
          severity: "error",
        });
      }
    );
  }

  return (
    <div className='contact'>
      <div className='contact-banner'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-container'>
        <form ref={form} onSubmit={handleSubmit} className='contact-form'>
          <input placeholder="Your Email" name="from_email" />
            <input placeholder="Your Name" name="from_name" />
            <input placeholder="Subject" name="subject" />
            <textarea placeholder="Message" rows="4" name="message" />
            <button type="submit" value="Send">Send</button>
          </form>
      </div>
      <Snackbar
          open={snackbarData.open}
          autoHideDuration={6000}
          onClose={() => setSnackbarData({ ...snackbarData, open: false })}
          message={snackbarData.message}
          severity={snackbarData.severity}
        />
      <Footer/>
    </div>
  )
}

export default Contact
