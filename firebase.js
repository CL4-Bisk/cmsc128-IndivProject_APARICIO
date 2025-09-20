 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
  import {getFirestore, collection, addDoc, setDoc, getDocs, doc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBP-WDUknqqrYDeVP-NETfRNtXiYt6Z0mY",
    authDomain: "cmsc128-apariciomisola.firebaseapp.com",
    projectId: "cmsc128-apariciomisola",
    storageBucket: "cmsc128-apariciomisola.firebasestorage.app",
    messagingSenderId: "622507766800",
    appId: "1:622507766800:web:5bdc30bf220d3f856ac695"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
