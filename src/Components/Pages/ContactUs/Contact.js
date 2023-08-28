import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="container">
        <div className="contact">
            <h2 className="contact-us">Contact Us</h2>
            <p>we'd love to hear from you. Please fill out the form below or reach out to us using contact details provided by us</p>
            <form className="contact_details">
                <div className="form_group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='Name' required />
                </div>
                <div className="form_group">
                    <label htmlFor="name">Email</label>
                    <input type="email" id='email' name='email' required />
                </div>
                <div className="form_group">
                    <label htmlFor="name">message</label>
                    <textarea id='message' name='message' rows='5' required />
                </div>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact