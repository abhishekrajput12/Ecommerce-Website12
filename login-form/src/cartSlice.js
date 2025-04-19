import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;




// import React, { useState } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// function Contact() {
//   const [contactInfo, setContactInfo] = useState({
//     name: '',
//     email: '',
//     message: '',
//     city: '',
//     localAddress: '',
//     pinCode: ''
//   });
  
//   const [submittedInfo, setSubmittedInfo] = useState(null);
//   const navigate = useNavigate(); // Initialize the navigate hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContactInfo(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Store the submitted contact information
//     setSubmittedInfo(contactInfo);

//     // Save contact details in localStorage (or state management) to use on the Payment Page
//     localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

//     // Alert and then navigate to the Payment Page
//     alert('Thank you for reaching out!');
    
//     // Reset form fields after submission
//     setContactInfo({
//       name: '',
//       email: '',
//       message: '',
//       city: '',
//       localAddress: '',
//       pinCode: ''
//     });

//     // Redirect to the Payment page
//     navigate('/payment');
//   };

//   return (
//     <Layout>
//       <div className="contact">
//         <h2>Add Address</h2>
//         {/* <p>Feel free to reach out to us at:</p> */}
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={contactInfo.name}
//             onChange={handleChange}
//             required
//           /><br />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={contactInfo.email}
//             onChange={handleChange}
//             required
//           /><br />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={contactInfo.city}
//             onChange={handleChange}
//             required
//           /><br />
//           <input
//             type="text"
//             name="localAddress"
//             placeholder="Local Address"
//             value={contactInfo.localAddress}
//             onChange={handleChange}
//             required
//           /><br />
//           <input
//             type="text"
//             name="pinCode"
//             placeholder="Pin Code"
//             value={contactInfo.pinCode}
//             onChange={handleChange}
//             required
//           /><br />
//           <button type="submit">Submit</button>
//         </form>

//         {submittedInfo && (
//           <div className="submitted-info">
//             <h3>Submitted Contact Information:</h3>
//             <p><strong>Name:</strong> {submittedInfo.name}</p>
//             <p><strong>Email:</strong> {submittedInfo.email}</p>
//             <p><strong>City:</strong> {submittedInfo.city}</p>
//             <p><strong>Local Address:</strong> {submittedInfo.localAddress}</p>
//             <p><strong>Pin Code:</strong> {submittedInfo.pinCode}</p>
//             <p><strong>Message:</strong> {submittedInfo.message}</p>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default Contact;

// import React, { useState } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection


// function Contact() {
//   const [address, setAddress] = useState({
//     name: '',
//     street: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: ''
//   });
//   const [marker, setMarker] = useState(center);
//   const [showMap, setShowMap] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: GOOGLE_MAPS_API_KEY
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSaveAndProceed = (e) => {
//     e.preventDefault();
//     dispatch(saveAddress({ ...address, id: new Date().getTime(), location: marker }));
//     notifySuccess('Address saved successfully');
//     navigate('/products/payment');
//   };

//   const handleSelectAddress = (selectedAddress) => {
//     setAddress(selectedAddress);
//   };

//   const onMapClick = useCallback((event) => {
//     setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
//   }, []);
//   return (
//     <Layout>
//         <div className="address-container">
//         <h1 className="address-title">Shipping Address</h1>

//         <GetCurrentAddress />

//         {showMap ? (
//           <>
//             <div className="map-container">
//               {isLoaded ? (
//                 <GoogleMap
//                   mapContainerStyle={containerStyle}
//                   center={marker}
//                   zoom={10}
//                   onClick={onMapClick}
//                 >
//                   <Marker position={marker} />
//                 </GoogleMap>
//               ) : (
//                 <div>Loading map...</div>
//               )}
//             </div>
//             <div className="address-options">
//               <button
//                 className="enter-address-manually-button"
//                 onClick={() => setShowMap(false)}
//               >
//                 Enter Address Manually
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <form className="address-form" onSubmit={handleSaveAndProceed}>
              // <input
              //   type="text"
              //   name="name"
              //   placeholder="Full Name"
              //   value={address.name}
              //   onChange={handleChange}
              //   required
              // />
              // <input
              //   type="text"
              //   name="street"
              //   placeholder="Street Address"
              //   value={address.street}
              //   onChange={handleChange}
              //   required
              // />
              // <input
              //   type="text"
              //   name="city"
              //   placeholder="City"
              //   value={address.city}
              //   onChange={handleChange}
              //   required
              // />
              // <input
              //   type="text"
              //   name="state"
              //   placeholder="State"
              //   value={address.state}
              //   onChange={handleChange}
              //   required
              // />
              // <input
              //   type="text"
              //   name="zip"
              //   placeholder="ZIP Code"
              //   value={address.zip}
              //   onChange={handleChange}
              //   required
              // />
              // <input
              //   type="text"
              //   name="country"
              //   placeholder="Country"
              //   value={address.country}
              //   onChange={handleChange}
              //   required
              // />
//               <button type="submit" className="save-address-button">Save Address and Proceed to Payment</button>
//             </form>
//             <div className="address-options">
//               <button
//                 className="back-to-map-button"
//                 onClick={() => setShowMap(true)}
//               >
//                 Back to Map
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default Contact;

// import React, { useState, useCallback } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom'; 
// import { useDispatch } from 'react-redux'; // Add useDispatch
// import { saveAddress } from '../redux/addressSlice'; // Add saveAddress action from Redux
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'; // Add Google Maps API components
// import { notifySuccess } from '../components/Toast'; // Assuming notifySuccess is a utility function
// import GetCurrentAddress from '../components/GetCurrentAddress'; // Assuming this is a custom component

// // Define the default map center
// const center = { lat: 37.7749, lng: -122.4194 }; // Example coordinates (San Francisco)

// // Define container style for the Google Map
// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// function Contact() {
//   const [address, setAddress] = useState({
//     name: '',
//     street: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: ''
//   });
  
//   const [marker, setMarker] = useState(center); // Initialize marker with center coordinates
//   const [showMap, setShowMap] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY // Use environment variable for API key
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSaveAndProceed = (e) => {
//     e.preventDefault();
//     dispatch(saveAddress({ ...address, id: new Date().getTime(), location: marker }));
//     notifySuccess('Address saved successfully');
//     navigate('/products/payment');
//   };

//   const handleSelectAddress = (selectedAddress) => {
//     setAddress(selectedAddress);
//   };

//   const onMapClick = useCallback((event) => {
//     setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
//   }, []);

//   return (
//     <Layout>
//       <div className="address-container">
//         <h1 className="address-title">Shipping Address</h1>

//         {/* Assuming this is a custom component that shows the current address */}
//         <GetCurrentAddress onSelectAddress={handleSelectAddress} />

//         {showMap ? (
//           <>
//             <div className="map-container">
//               {isLoaded ? (
//                 <GoogleMap
//                   mapContainerStyle={containerStyle}
//                   center={marker}
//                   zoom={10}
//                   onClick={onMapClick}
//                 >
//                   <Marker position={marker} />
//                 </GoogleMap>
//               ) : (
//                 <div>Loading map...</div>
//               )}
//             </div>
//             <div className="address-options">
//               <button
//                 className="enter-address-manually-button"
//                 onClick={() => setShowMap(false)}
//               >
//                 Enter Address Manually
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <form className="address-form" onSubmit={handleSaveAndProceed}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={address.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="street"
//                 placeholder="Street Address"
//                 value={address.street}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={address.city}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={address.state}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="zip"
//                 placeholder="ZIP Code"
//                 value={address.zip}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="country"
//                 placeholder="Country"
//                 value={address.country}
//                 onChange={handleChange}
//                 required
//               />
//               <button type="submit" className="save-address-button">
//                 Save Address and Proceed to Payment
//               </button>
//             </form>
//             <div className="address-options">
//               <button
//                 className="back-to-map-button"
//                 onClick={() => setShowMap(true)}
//               >
//                 Back to Map
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default Contact;
// import React, { useState, useCallback } from 'react';
// import Layout from '../layouts/Layout';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addAddress } from '../redux/addressSlice'; // Import addAddress
// import { notifySuccess } from '../components/Toast'; // Import notification utility
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'; // Ensure this library is installed

// // Define container style for Google Maps
// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// // Center of the map as a fallback
// const center = {
//   lat: -3.745, // Default latitude
//   lng: -38.523, // Default longitude
// };

// const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Make sure your Google Maps API Key is set in .env file

// function Contact() {
//   const [address, setAddress] = useState({
//     name: '',
//     street: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: ''
//   });
//   const [marker, setMarker] = useState(center);
//   const [showMap, setShowMap] = useState(true); // Toggle between map and manual input
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: GOOGLE_MAPS_API_KEY,
//   });

//   // Handle address changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prevState) => ({ ...prevState, [name]: value }));
//   };

//   // Handle save and proceed
//   const handleSaveAndProceed = (e) => {
//     e.preventDefault();
//     dispatch(addAddress({ ...address, id: new Date().getTime(), location: marker }));
//     notifySuccess('Address saved successfully');
//     navigate('/payment');
//   };

//   // When a user clicks on the map, update the marker position
//   const onMapClick = useCallback((event) => {
//     setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
//   }, []);

//   return (
//     <Layout>
//       <div className="address-container">
//         <h1 className="address-title">Shipping Address</h1>

//         {/* Placeholder for GetCurrentAddress (If you have this component) */}
//         {/* <GetCurrentAddress /> */}

//         {showMap ? (
//           <>
//             <div className="map-container">
//               {isLoaded ? (
//                 <GoogleMap
//                   mapContainerStyle={containerStyle}
//                   center={marker}
//                   zoom={10}
//                   onClick={onMapClick}
//                 >
//                   <Marker position={marker} />
//                 </GoogleMap>
//               ) : (
//                 <div>Loading map...</div>
//               )}
//             </div>
//             <button onClick={() => setShowMap(false)} className="enter-address-manually-button">
//               Enter Address Manually
//             </button>
//           </>
//         ) : (
//           <>
//             <form className="address-form" onSubmit={handleSaveAndProceed}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={address.name}
//                 onChange={handleChange}
//                 required
//               /><br />
//               <input
//                 type="text"
//                 name="street"
//                 placeholder="Street Address"
//                 value={address.street}
//                 onChange={handleChange}
//                 required
//               /><br />
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={address.city}
//                 onChange={handleChange}
//                 required
//               /><br />
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={address.state}
//                 onChange={handleChange}
//                 required
//               /><br />
//               <input
//                 type="text"
//                 name="zip"
//                 placeholder="PIN Code"
//                 value={address.zip}
//                 onChange={handleChange}
//                 required
//               /><br />
//               <input
//                 type="text"
//                 name="country"
//                 placeholder="Country"
//                 value={address.country}
//                 onChange={handleChange}
//                 required
//               /><br />
//               <button type="submit" className="save-address-button">
//                 Save Address and Proceed to Payment
//               </button>
//             </form>
//             <button onClick={() => setShowMap(true)} className="back-to-map-button">
//               Back to Map
//             </button>
//           </>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default Contact;