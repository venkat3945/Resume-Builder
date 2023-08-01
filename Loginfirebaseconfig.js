// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHIvYbdBJifaY2jhF0J569Yuagyh8-arc",
  authDomain: "resume-builder-b3e4b.firebaseapp.com",
  databaseURL: "https://resume-builder-b3e4b-default-rtdb.firebaseio.com",
  projectId: "resume-builder-b3e4b",
  storageBucket: "resume-builder-b3e4b.appspot.com",
  messagingSenderId: "232003689480",
  appId: "1:232003689480:web:936420d7be43e240fb45bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);