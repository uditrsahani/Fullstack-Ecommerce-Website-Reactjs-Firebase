// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHXQNCdCKI650T6XDtXAl4CW1vPTrmaNY",
  authDomain: "ecommerceproject-9ff79.firebaseapp.com",
  projectId: "ecommerceproject-9ff79",
  storageBucket: "ecommerceproject-9ff79.appspot.com",
  messagingSenderId: "604751955059",
  appId: "1:604751955059:web:a2fdda2c0202d4810e5606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth} 