// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-d2a0f.firebaseapp.com",
  projectId: "mern-real-estate-d2a0f",
  storageBucket: "mern-real-estate-d2a0f.appspot.com",
  messagingSenderId: "967084473225",
  appId: "1:967084473225:web:7a71c15747e51dfc133f58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);