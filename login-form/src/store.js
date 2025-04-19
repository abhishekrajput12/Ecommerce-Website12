// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import addressReducer from './addressSlice'; // Ensure the correct import path

// const store = configureStore({
//   reducer: {
//     address: addressReducer,
//     // Add other reducers here
//   }
// });

// export default store;


// store.js
import { configureStore } from '@reduxjs/toolkit';
import addressReducer from '../src/redux/addressSlice'; // Ensure the correct import path
import cartReducer from '../src/redux/cartSlice'; // Adjust path as necessary
import productsReducer from '../src/redux/productsSlice'; // Adjust path as necessary
import orderReducer from '../src/redux/orderSlice'; // Adjust path as necessary
import walletReducer from '../src/redux/walletSlice'; // Adjust path as necessary

const store = configureStore({
  reducer: {
    address: addressReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: orderReducer,
    wallet: walletReducer
  }
});

export default store;
