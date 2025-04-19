// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { deleteAddress, setDefaultAddress } from '../redux/addressSlice'; // Ensure correct path
// // import { useNavigate } from 'react-router-dom';

// // const AddressList = () => {
// //   const savedAddresses = useSelector((state) => state.address.savedAddresses);
// //   const defaultAddressId = useSelector((state) => state.address.defaultAddressId);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const handleDelete = (addressId) => {
// //     dispatch(deleteAddress(addressId));
// //   };

// //   const handleSetDefault = (addressId) => {
// //     dispatch(setDefaultAddress(addressId));
// //   };

// //   const handleAddNewAddress = () => {
// //     navigate('/address');
// //   };

// //   return (
// //     <div className="address-list">
// //       <h2>Saved Addresses</h2>
// //       <ul>
// //         {savedAddresses.map((address) => (
// //           <li key={address.id} className={address.id === defaultAddressId ? 'default-address' : ''}>
// //             <p>{`${address.address}, ${address.city}, ${address.pinCode}, ${address.mobileNumber}`}</p>
// //             <div>
// //               <button onClick={() => handleSetDefault(address.id)}>
// //                 {address.id === defaultAddressId ? 'Default Address' : 'Set as Default'}
// //               </button>
// //               <button onClick={() => handleDelete(address.id)}>Delete</button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //       <button onClick={handleAddNewAddress}>Add New Address</button>
// //     </div>
// //   );
// // };

// // export default AddressList;
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeAddress, setDefaultAddress } from '../redux/addressSlice'; // Ensure correct path
// import { useNavigate } from 'react-router-dom';

// const AddressList = () => {
//   const savedAddresses = useSelector((state) => state.address.addresses);
//   const defaultAddressId = useSelector((state) => state.address.defaultAddressId);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleDelete = (addressId) => {
//     dispatch(removeAddress(addressId)); // Use removeAddress to delete
//   };

//   const handleSetDefault = (addressId) => {
//     dispatch(setDefaultAddress(addressId)); // Set default address
//   };

//   const handleAddNewAddress = () => {
//     navigate('/getCurrentAddress');
//   };

//   return (
//     <div className="address-list">
//       <h2>Saved Addresses</h2>
//       <ul>
//         {savedAddresses.map((address, index) => (
//           <li key={index} className={address.id === defaultAddressId ? 'default-address' : ''}>
//             <p>{`${address.address}, ${address.city}, ${address.pinCode}, ${address.mobileNumber}`}</p>
//             <div>
//               <button onClick={() => handleSetDefault(address.id)}>
//                 {address.id === defaultAddressId ? 'Default Address' : 'Set as Default'}
//               </button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddNewAddress}>Add New Address</button>
//     </div>
//   );
// };

// export default AddressList;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeAddress, setDefaultAddress } from '../redux/addressSlice'; // Ensure correct path
// import { useNavigate } from 'react-router-dom';

// const AddressList = () => {
//   const savedAddresses = useSelector((state) => state.address.addresses);
//   const defaultAddressId = useSelector((state) => state.address.defaultAddressId);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleDelete = (addressId) => {
//     dispatch(removeAddress(addressId)); // Use removeAddress to delete
//   };

//   const handleSetDefault = (addressId) => {
//     dispatch(setDefaultAddress(addressId)); // Set default address
//   };

//   const handleAddNewAddress = () => {
//     navigate('/address'); // Changed to redirect to /address page
//   };

//   return (
//     <div className="address-list">
//       <h2>Saved Addresses</h2>
//       <ul>
//         {savedAddresses.map((address, index) => (
//           <li key={index} className={address.id === defaultAddressId ? 'default-address' : ''}>
//             <p>{`${address.address}, ${address.city}, ${address.pinCode}, ${address.mobileNumber}`}</p>
//             <div>
//               <button onClick={() => handleSetDefault(address.id)}>
//                 {address.id === defaultAddressId ? 'Default Address' : 'Set as Default'}
//               </button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddNewAddress}>Add New Address</button>
//     </div>
//   );
// };

// export default AddressList;


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeAddress, setDefaultAddress } from '../redux/addressSlice'; // Ensure correct path
// import { useNavigate } from 'react-router-dom';

// const AddressList = () => {
//   const savedAddresses = useSelector((state) => state.address.addresses);
//   const defaultAddressId = useSelector((state) => state.address.defaultAddressId);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleDelete = (addressId) => {
//     dispatch(removeAddress(addressId)); // Use address.id to delete
//   };

//   const handleSetDefault = (addressId) => {
//     dispatch(setDefaultAddress(addressId)); // Set default address
//   };

//   const handleAddNewAddress = () => {
//     // navigate('/address'); // Redirect to /address page
//   };

//   return (
//     <div className="address-list">
//       <h2>Saved Addresses</h2>
//       <ul>
//         {savedAddresses.map((address) => (
//           <li key={address.id} className={address.id === defaultAddressId ? 'default-address' : ''}>
//             <p>{`${address.address}, ${address.city}, ${address.pinCode}, ${address.mobileNumber}`}</p>
//             <div>
//               <button onClick={() => handleSetDefault(address.id)}>
//                 {address.id === defaultAddressId ? 'Default Address' : 'Set as Default'}
//               </button>
//               <button onClick={() => handleDelete(address.id)}>Delete</button> {/* Use address.id */}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddNewAddress}>Add New Address</button>
//     </div>
//   );
// };

// export default AddressList;
