// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Handles google sign in information 
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9L0SVTrZLDVuoafSb_XXzcjGsImc9pbM",
  authDomain: "reach-out-f4764.firebaseapp.com",
  projectId: "reach-out-f4764",
  storageBucket: "reach-out-f4764.appspot.com",
  messagingSenderId: "928152550715",
  appId: "1:928152550715:web:ea4770b2a7094f48848b1e",
  measurementId: "G-0DDSETBJ5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

