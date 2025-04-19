
// import React, { useState, useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addAddress, removeAddress, updateAddress } from '../redux/addressSlice'; // Ensure correct path
// import { selectAddresses } from '../redux/selectors'; // Ensure correct path
// import { useNavigate } from 'react-router-dom';
// import Layout from '../layouts/Layout'; // Ensure Layout is correctly imported

// const AddressPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [newAddress, setNewAddress] = useState({
//     address: '',
//     city: '',
//     pinCode: '',
//     mobileNumber: ''
//   });

//   // Use memoized selector to get addresses
//   const addresses = useSelector(selectAddresses);
//   const memoizedAddresses = useMemo(() => addresses, [addresses]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewAddress((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleAddAddress = () => {
//     if (newAddress.address.trim() && newAddress.city.trim() && newAddress.pinCode.trim() && newAddress.mobileNumber.trim()) {
//       dispatch(addAddress(newAddress));
//       setNewAddress({
//         address: '',
//         city: '',
//         pinCode: '',
//         mobileNumber: ''
//       });
//     }
//   };

//   const handleRemoveAddress = (index) => {
//     dispatch(removeAddress(index));
//   };

//   const handleUpdateAddress = (index) => {
//     const updatedAddress = {
//       address: prompt("Enter new address", memoizedAddresses[index].address),
//       city: prompt("Enter new city", memoizedAddresses[index].city),
//       pinCode: prompt("Enter new pin code", memoizedAddresses[index].pinCode),
//       mobileNumber: prompt("Enter new mobile number", memoizedAddresses[index].mobileNumber),
//     };

//     if (updatedAddress.address && updatedAddress.city && updatedAddress.pinCode && updatedAddress.mobileNumber) {
//       dispatch(updateAddress({ index, address: updatedAddress }));
//     }
//   };

//   const handleProceedToPayment = () => {
//     navigate('/payment');
//   };

//   return (
//     <Layout>
//       <div className='address-management'>
//         <h2>Manage Addresses</h2>
//         <input
//           type="text"
//           name="address"
//           value={newAddress.address}
//           onChange={handleChange}
//           placeholder="Enter new address"
//         />
//         <input
//           type="text"
//           name="city"
//           value={newAddress.city}
//           onChange={handleChange}
//           placeholder="Enter city"
//         />
//         <input
//           type="text"
//           name="pinCode"
//           value={newAddress.pinCode}
//           onChange={handleChange}
//           placeholder="Enter pin code"
//         />
//         <input
//           type="text"
//           name="mobileNumber"
//           value={newAddress.mobileNumber}
//           onChange={handleChange}
//           placeholder="Enter mobile number"
//         />
//         <button onClick={handleAddAddress}>Add Address</button>

//         <ul>
//           {memoizedAddresses.map((address, index) => (
//             <li key={index}>
//               {`${address.address}, ${address.city}, ${address.pinCode}, ${address.mobileNumber}`}
//               <button onClick={() => handleUpdateAddress(index)}>Edit</button>
//               <button onClick={() => handleRemoveAddress(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>

//       </div>
//     </Layout>
//   );
// };

// export default AddressPage;

// import React, { useState, useMemo } from 'react';
// import { useDispatch } from 'react-redux';
// import { addAddress, removeAddress, updateAddress } from '../redux/addressSlice'; // Ensure correct path
// import { selectAddresses } from '../redux/selectors'; // Ensure correct path
// import { useNavigate } from 'react-router-dom';
// import Layout from '../layouts/Layout'; // Ensure Layout is correctly imported
// //import AddressList from '../components/AddressList'; // Import the new AddressList component
// import { Container, Box, Typography, Button, Grid, Card, CardContent, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';


// const AddressPage = () => {
//   const savedAddresses = useSelector((state) => state.address.savedAddresses);
//   const defaultAddressId = useSelector((state) => state.address.defaultAddressId);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleDelete = (addressId) => {
//     dispatch(deleteAddress(addressId));
//   };

//   const handleSetDefault = (addressId) => {
//     dispatch(setDefaultAddress(addressId));
//   };

//   const handleAddNewAddress = () => {
//     navigate('/address');
//   };

//   return (
//     <Layout>
//         <Container className="address-list-container">
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//           <Typography variant="h4" className="address-list-title" gutterBottom>
//             Saved Addresses
//           </Typography>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             startIcon={<AddIcon />} 
//             className="add-address-button"
//             onClick={handleAddNewAddress}
//           >
//             Add New Address
//           </Button>
//         </Box>
//         <Grid container spacing={3} className="address-cards">
//           {savedAddresses.map((address) => (
//             <Grid item xs={12} sm={6} md={4} key={address.id}>
//               <Card className={`address-card ${address.id === defaultAddressId ? 'default-address-card' : ''}`}>
//                 <CardContent>
//                   <Typography variant="h6">{address.name}</Typography>
//                   <Typography>{address.street}</Typography>
//                   <Typography>{`${address.city}, ${address.state}, ${address.zip}`}</Typography>
//                   <Typography>{address.country}</Typography>
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     onClick={() => handleSetDefault(address.id)}
//                     className="set-default-button"
//                   >
//                     {address.id === defaultAddressId ? 'Default Address' : 'Set as Default'}
//                   </Button>
//                 </CardContent>
//                 <IconButton
//                   color="secondary"
//                   onClick={() => handleDelete(address.id)}
//                   className="delete-address-button"
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Layout>
//   );
// };

// export default AddressPage;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAddress, setDefaultAddress } from '../redux/addressSlice'; // Corrected import
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout'; // Ensure Layout is correctly imported

// Material-UI imports
import { Container, Box, Typography, Button, Grid, Card, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const AddressPage = () => {
  const savedAddresses = useSelector((state) => state.address.addresses); // Fixed to match the correct state
  const defaultAddressId = useSelector((state) => state.address.defaultAddressId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (addressId) => {
    dispatch(removeAddress(addressId)); // Changed from deleteAddress to removeAddress
  };

  const handleSetDefault = (addressId) => {
    dispatch(setDefaultAddress(addressId));
  };

  const handleAddNewAddress = () => {
    navigate('/GetCurrentAddress');
  };

  return (
    <Layout>
      <Container className="address-list-container">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" className="address-list-title" gutterBottom>
            Saved Addresses
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            className="add-address-button"
            onClick={handleAddNewAddress}
          >
            Add New Address
          </Button>
        </Box>
        <Grid container spacing={3} className="address-cards">
          {savedAddresses.map((address) => (
            <Grid item xs={12} sm={6} md={4} key={address.id}>
              <Card className={`address-card ${address.id === defaultAddressId ? 'default-address-card' : ''}`}>
                <CardContent>
                  <Typography variant="h6">{address.name}</Typography>
                  <Typography>{address.street}</Typography>
                  <Typography>{`${address.city}, ${address.state}, ${address.zip}`}</Typography>
                  <Typography>{address.country}</Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleSetDefault(address.id)}
                    className="set-default-button"
                  >
                    {address.id === defaultAddressId ? 'Default Address' : 'Set as Default'}
                  </Button>
                </CardContent>
                <IconButton
                  color="secondary"
                  onClick={() => handleDelete(address.id)}
                  className="delete-address-button"
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default AddressPage;
