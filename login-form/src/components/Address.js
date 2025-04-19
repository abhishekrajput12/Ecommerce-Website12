 

import React, { useState, useCallback } from 'react';
import Layout from '../layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/addressSlice'; // Import addAddress action
import { notifySuccess } from '../components/Toast'; // Import notification utility
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'; // Google Maps API

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Address = () => {
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
  const [marker, setMarker] = useState(center);
  const [showMap, setShowMap] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSaveAndProceed = (e) => {
    e.preventDefault();
    dispatch(addAddress({ ...address, id: new Date().getTime(), location: marker }));
    notifySuccess('Address saved successfully');
    // navigate('/getCurrentAddress');
  };

  const onMapClick = useCallback((event) => {
    setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  }, []);

  return (
    <Layout>
      <div className="address-container">
        <h1 className="address-title">Shipping Address</h1>

        {showMap ? (
          <>
            <div className="map-container">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={marker}
                  zoom={10}
                  onClick={onMapClick}
                >
                  <Marker position={marker} />
                </GoogleMap>
              ) : (
                <div>Loading map...</div>
              )}
            </div>
            <button onClick={() => setShowMap(false)} className="enter-address-manually-button">
              Enter Address Manually
            </button>
          </>
        ) : (
          <>
            <form className="address-form" onSubmit={handleSaveAndProceed}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={address.name}
                onChange={handleChange}
                required
              /><br />
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={address.street}
                onChange={handleChange}
                required
              /><br />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                required
              /><br />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                required
              /><br />
              <input
                type="text"
                name="zip"
                placeholder="PIN Code"
                value={address.zip}
                onChange={handleChange}
                required
              /><br />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={address.country}
                onChange={handleChange}
                required
              /><br />
              
              <button type="submit" className="save-address-button">
                Save Address
              </button>
            </form>
            <button onClick={() => setShowMap(true)} className="back-to-map-button">
              Back to Map
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Address;
