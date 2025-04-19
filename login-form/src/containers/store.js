// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from '../redux/cartSlice';
// import productsReducer from '../redux/productsSlice';
// import orderReducer from '../redux/orderSlice';
// import walletReducer from '../redux/walletSlice'; // Ensure the wallet reducer is imported

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     products: productsReducer,
//     orders: orderReducer,
//     wallet: walletReducer, // Include the wallet reducer here
//   },
// });

// export default store;
// store.js
//1
// import { configureStore } from '@reduxjs/toolkit';
// import addressReducer from '../redux/addressSlice'; // Ensure the correct import path
// import cartReducer from '../redux/cartSlice'; // Adjust path as necessary
// import productsReducer from '../redux/productsSlice'; // Adjust path as necessary
// import orderReducer from '../redux/orderSlice'; // Adjust path as necessary
// import walletReducer from '../redux/walletSlice'; // Adjust path as necessary
// import authReducer from '../containers/auth/authSlice';

// const store = configureStore({
//   reducer: {
//     address: addressReducer,
//     cart: cartReducer,
//     products: productsReducer,
//     orders: orderReducer,
//     wallet: walletReducer,
//     auth: authReducer,
//   }
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default to localStorage for web

// Import your reducers
import addressReducer from '../redux/addressSlice';
import cartReducer from '../redux/cartSlice';
import productsReducer from '../redux/productsSlice';
import orderReducer from '../redux/orderSlice';
import walletReducer from '../redux/walletSlice';
import authReducer from '../containers/auth/authSlice'; // or persistedAuthReducer if using persistence

// Configure persistence for the auth reducer
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'], // Specify which parts of the auth state you want to persist (optional)
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    address: addressReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: orderReducer,
    wallet: walletReducer,
    auth: persistedAuthReducer, // Use the persisted auth reducer
  },
});

// Create the persistor to persist the store
export const persistor = persistStore(store);

export default store;

