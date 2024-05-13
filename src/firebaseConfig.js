// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCnOQWwZ1a1EXtqj1vWR9dFVwsR_q_WhI",
  authDomain: "bitsafari.firebaseapp.com",
  databaseURL: "https://bitsafari-default-rtdb.firebaseio.com",
  projectId: "bitsafari",
  storageBucket: "bitsafari.appspot.com",
  messagingSenderId: "1040980585759",
  appId: "1:1040980585759:web:f70dd5bbf30f06dbb8542a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;