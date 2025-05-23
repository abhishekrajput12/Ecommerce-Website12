import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
// import { Provider } from 'react-redux';
// import store from './store'; // Import the store
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
// root.render(
//   <React.StrictMode>
//     <Provider store={store}> {/* Wrapping the app with Provider */}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux'; // Only import Provider here
// import store from './store'; // Import the store
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
// root.render(
//   <React.StrictMode>
//     <Provider store={store}> {/* Wrapping the app with Provider */}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

