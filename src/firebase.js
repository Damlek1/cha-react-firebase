// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYLIAtde_gfjjOhsrxJG1NxYoLf6VlzfE",
  authDomain: "chat-app-af9fb.firebaseapp.com",
  projectId: "chat-app-af9fb",
  storageBucket: "chat-app-af9fb.appspot.com",
  messagingSenderId: "578186520967",
  appId: "1:578186520967:web:5555ec62db2af39d00cb22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
