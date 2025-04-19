
import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
    city: '',
    localAddress: '',
    pinCode: ''
  });
  
  const [submittedInfo, setSubmittedInfo] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store the submitted contact information
    setSubmittedInfo(contactInfo);

    // Save contact details in localStorage (or state management) to use on the Payment Page
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

    // Alert and then navigate to the Payment Page
    //alert('Thank you for reaching out!');
    
    // Reset form fields after submission
    setContactInfo({
      name: '',
      email: '',
      message: '',
      city: '',
      localAddress: '',
      pinCode: ''
    });

    // Redirect to the Payment page
    // navigate('/payment');
  };

  return (
    <Layout>
      <div className="contact">
        <h2>Contact Us</h2>
        {/* <p>Feel free to reach out to us at:</p> */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactInfo.name}
            onChange={handleChange}
            required
          /><br />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contactInfo.email}
            onChange={handleChange}
            required
          /><br />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={contactInfo.city}
            onChange={handleChange}
            required
          /><br />
          <input
            type="text"
            name="localAddress"
            placeholder="Local Address"
            value={contactInfo.localAddress}
            onChange={handleChange}
            required
          /><br />
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={contactInfo.pinCode}
            onChange={handleChange}
            required
          /><br />
          <textarea></textarea><br />
          <button type="submit">Submit</button>
        </form>

        {submittedInfo && (
          <div className="submitted-info">
            <h3>Submitted Contact Information:</h3>
            <p><strong>Name:</strong> {submittedInfo.name}</p>
            <p><strong>Email:</strong> {submittedInfo.email}</p>
            <p><strong>City:</strong> {submittedInfo.city}</p>
            <p><strong>Local Address:</strong> {submittedInfo.localAddress}</p>
            <p><strong>Pin Code:</strong> {submittedInfo.pinCode}</p>
            <p><strong>Message:</strong> {submittedInfo.message}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Contact;
