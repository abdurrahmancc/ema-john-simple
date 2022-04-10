// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdxaKQFHZipLcaQLM-TcSnirjMCK5RWco",
  authDomain: "ema-john-simple-1a163.firebaseapp.com",
  projectId: "ema-john-simple-1a163",
  storageBucket: "ema-john-simple-1a163.appspot.com",
  messagingSenderId: "643864936722",
  appId: "1:643864936722:web:17a87468185270e5c1f3cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
