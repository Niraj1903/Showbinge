// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX7DdC0ihsh1zVLF8zflh9JSG6kTna328",
  authDomain: "showbinge-40bdf.firebaseapp.com",
  projectId: "showbinge-40bdf",
  storageBucket: "showbinge-40bdf.firebasestorage.app",
  messagingSenderId: "991353075904",
  appId: "1:991353075904:web:bc1ca8d7338fa90f1a5525",
  measurementId: "G-6ZEGXFPN7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
