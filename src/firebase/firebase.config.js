// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_JzlvCUqcb6X8gIwHF_9aArMnjCZd5NY",
  authDomain: "task-plus-100.firebaseapp.com",
  projectId: "task-plus-100",
  storageBucket: "task-plus-100.appspot.com",
  messagingSenderId: "899779995465",
  appId: "1:899779995465:web:e4cbb9bf6b5e7a0d4f1c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;