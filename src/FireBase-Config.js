// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMguUbCSrkkrSM4y9_3slvM0Brn7hc5tU",
  authDomain: "cloth-swap.firebaseapp.com",
  projectId: "cloth-swap",
  storageBucket: "cloth-swap.appspot.com",
  messagingSenderId: "437007549375",
  appId: "1:437007549375:web:8738ca2384eb83ab93570a",
  measurementId: "G-22MVT69QEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

