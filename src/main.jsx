import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAFvzqn1Pa3vipQNJgtezNqMruUG4I2AJY",
  authDomain: "saramorchio-ecommerce.firebaseapp.com",
  projectId: "saramorchio-ecommerce",
  storageBucket: "saramorchio-ecommerce.appspot.com",
  messagingSenderId: "385609518591",
  appId: "1:385609518591:web:2545c47c4f92fa125aebca"};

  initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App/>
    
  </React.StrictMode>,
)
