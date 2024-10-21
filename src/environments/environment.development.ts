export const environment = {};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTeLq2VOSZ3e4sT5wyk8JnvbetjQnTto",
  authDomain: "lab3-seg3102-1e70d.firebaseapp.com",
  projectId: "lab3-seg3102-1e70d",
  storageBucket: "lab3-seg3102-1e70d.appspot.com",
  messagingSenderId: "863918851903",
  appId: "1:863918851903:web:b304c86d694324a090b58a",
  measurementId: "G-6LVL5QT5S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);