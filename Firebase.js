// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpCewlCTXugGt0T-8WcrCvlI7FmwPib_s",
  authDomain: "react-assignment-85bf6.firebaseapp.com",
  projectId: "react-assignment-85bf6",
  storageBucket: "react-assignment-85bf6.appspot.com",
  messagingSenderId: "355669080705",
  appId: "1:355669080705:web:bf80533d7b627ef5b36b80",
  measurementId: "G-XT7GEVPXGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // For authentication
const db = getFirestore(app); // For Firestore database

export { app, auth, db };
