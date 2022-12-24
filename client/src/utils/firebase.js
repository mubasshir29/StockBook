// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbQwFCeuI2FJELET96HszUFPvQh4vWJ2E",
  authDomain: "stockbook-c2284.firebaseapp.com",
  projectId: "stockbook-c2284",
  storageBucket: "stockbook-c2284.appspot.com",
  messagingSenderId: "62016149140",
  appId: "1:62016149140:web:35d0c2ce0ba313ff780681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)