
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [], // Array to hold all addresses
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter((_, index) => index !== action.payload);
    },
    updateAddress: (state, action) => {
      state.addresses[action.payload.index] = action.payload.address;
    },
  },
});

export const { addAddress, removeAddress, updateAddress } = addressSlice.actions;
export default addressSlice.reducer;

