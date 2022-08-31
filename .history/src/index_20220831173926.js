import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './page/home/App';
import reportWebVitals from './reportWebVitals';
import './page/home/lottie/lottie.js'
// import Lottie from "react-lottie";
// import data from './page/home/static/98185-goodvibe-works-logo.json'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Lottie animationData={data}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
