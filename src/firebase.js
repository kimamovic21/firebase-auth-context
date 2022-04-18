// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdE4RQiIQWb3K30V7OoAoHrdrxrXI3fNI",
  authDomain: "fir-auth-yt-13055.firebaseapp.com",
  projectId: "fir-auth-yt-13055",
  storageBucket: "fir-auth-yt-13055.appspot.com",
  messagingSenderId: "827039483730",
  appId: "1:827039483730:web:ea180da9c9570aa5899c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

//npm audit fix --force