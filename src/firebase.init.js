// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEeWsJb1fnIWycZ0snn02zX1NYedoB1TA",
  authDomain: "car-fantasy-44f0b.firebaseapp.com",
  projectId: "car-fantasy-44f0b",
  storageBucket: "car-fantasy-44f0b.appspot.com",
  messagingSenderId: "135728650956",
  appId: "1:135728650956:web:592e36ef4c3b7c1d3f8069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;