// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_PbO96z8vh8QMI7O-tdhYmum_X_yXigQ",
  authDomain: "netflixgpt-563f5.firebaseapp.com",
  projectId: "netflixgpt-563f5",
  storageBucket: "netflixgpt-563f5.appspot.com",
  messagingSenderId: "804669857398",
  appId: "1:804669857398:web:43a2fa4d07355d15100957",
  measurementId: "G-5MMMHJNKY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();