
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   addresses: [], // Array to hold all addresses
// };

// const addressSlice = createSlice({
//   name: 'address',
//   initialState,
//   reducers: {
//     addAddress: (state, action) => {
//       state.addresses.push(action.payload);
//     },
//     removeAddress: (state, action) => {
//       state.addresses = state.addresses.filter((_, index) => index !== action.payload);
//     },
//     updateAddress: (state, action) => {
//       state.addresses[action.payload.index] = action.payload.address;
//     },
//   },
// });

// export const { addAddress, removeAddress, updateAddress } = addressSlice.actions;
// export default addressSlice.reducer;

// addressSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   addresses: [], // Array to hold all addresses
// };

// const addressSlice = createSlice({
//   name: 'address',
//   initialState,
//   reducers: {
//     addAddress: (state, action) => {
//       state.addresses.push(action.payload);
//     },
//     removeAddress: (state, action) => {
//       state.addresses = state.addresses.filter((_, index) => index !== action.payload);
//     },
//     updateAddress: (state, action) => {
//       const { index, address } = action.payload;
//       state.addresses[index] = address;
//     },
//   },
// });

// export const { addAddress, removeAddress, updateAddress } = addressSlice.actions;
// export default addressSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   addresses: [], // Array to hold all addresses
//   defaultAddressId: null, // To track the default address
// };

// const addressSlice = createSlice({
//   name: 'address',
//   initialState,
//   reducers: {
//     addAddress: (state, action) => {
//       state.addresses.push(action.payload);
//     },
//     removeAddress: (state, action) => {
//       state.addresses = state.addresses.filter((_, index) => index !== action.payload);
//     },
//     updateAddress: (state, action) => {
//       const { index, address } = action.payload;
//       state.addresses[index] = address;
//     },
//     setDefaultAddress: (state, action) => {
//       state.defaultAddressId = action.payload; // Set the default address ID
//     },
//   },
// });

// export const { addAddress, removeAddress, updateAddress, setDefaultAddress } = addressSlice.actions;
// export default addressSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [], // Array to hold all addresses
  defaultAddressId: null, // To track the default address
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    removeAddress: (state, action) => {
      // Filter by address id
      state.addresses = state.addresses.filter(address => address.id !== action.payload);
    },
    updateAddress: (state, action) => {
      const { index, address } = action.payload;
      state.addresses[index] = address;
    },
    setDefaultAddress: (state, action) => {
      state.defaultAddressId = action.payload; // Set the default address ID
    },
  },
});

export const { addAddress, removeAddress, updateAddress, setDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer;
