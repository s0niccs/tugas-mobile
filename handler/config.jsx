// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW-q5hEYQM8yGLM93S--FJJqa-GeG8Sfs",
  authDomain: "mobile-test-a5625.firebaseapp.com",
  projectId: "mobile-test-a5625",
  storageBucket: "mobile-test-a5625.appspot.com",
  messagingSenderId: "686295128367",
  appId: "1:686295128367:web:c46fe1d01c688cc8a529da",
  measurementId: "G-WDEJ4SM6EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();