// import { createSelector } from 'reselect';

// export const selectAddresses = createSelector(
//   (state) => state.address?.addresses || [],
//   (addresses) => addresses
// );

//1corect
// import { createSelector } from 'reselect';

// const getProductsState = (state) => state.products || [];

// export const selectProducts = createSelector(
//   getProductsState,
//   (products) => products.map(product => ({
//     ...product,
//     name: product.name.toUpperCase()
//   }))
// );

// // For Addresses
// const getAddressesState = (state) => state.address?.addresses || [];

// export const selectAddresses = createSelector(
//   getAddressesState,
//   (addresses) => addresses.slice() // Ensures memoization by not mutating original state
// );

import { createSelector } from 'reselect';

// Products selector
const getProductsState = (state) => state.products || [];

export const selectProducts = createSelector(
  getProductsState,
  (products) => products.map(product => ({
    ...product,
    name: product.name.toUpperCase()
  }))
);

// Addresses selector
const getAddressesState = (state) => state.address?.addresses || [];

export const selectAddresses = createSelector(
  getAddressesState,
  (addresses) => addresses.slice() // Ensures memoization by copying the array without mutating it
);

// Make sure all selectors are exported in a single export statement
// export { selectProducts };
