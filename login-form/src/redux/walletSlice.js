// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     balance: 1000, // Ensure the balance is initialized
//     transactions: [
//         { id: 1, amount: 50, date: '2024-09-01', description: 'Payment Received' },
//         { id: 2, amount: -30, date: '2024-09-02', description: 'Purchase' },
//         { id: 3, amount: 200, date: '2024-09-03', description: 'Funds Added' },
//     ],
// };

// const walletSlice = createSlice({
//     name: 'wallet',
//     initialState,
//     reducers: {
//         addMoney: (state, action) => {
//             const addedAmount = action.payload;
//             state.balance += addedAmount;
//             state.transactions.push({
//                 id: state.transactions.length + 1,
//                 amount: addedAmount,
//                 date: new Date().toLocaleDateString(),
//                 description: 'Funds Added',
//             });
//         },
//     },
// });

// export const { addMoney } = walletSlice.actions;
// export default walletSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    balance: 5000, // initial balance
  },
  reducers: {
    addMoney: (state, action) => {
      state.balance += action.payload;
    },
    deductMoney: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { addMoney, deductMoney } = walletSlice.actions;
export default walletSlice.reducer;
