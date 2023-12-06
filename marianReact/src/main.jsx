/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdfhWzXgCxol6jj6VIg3Jv3mnAzRxNfHk",
  authDomain: "miapasta41.firebaseapp.com",
  projectId: "miapasta41",
  storageBucket: "miapasta41.appspot.com",
  messagingSenderId: "488625465382",
  appId: "1:488625465382:web:b5fe857b50b392681c9ee7"
};


const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
