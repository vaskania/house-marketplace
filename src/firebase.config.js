// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDDm4vLkYt8qj0i_QNLzZCcEh7g8qgrMfs",
    authDomain: "house-marketplace-app-ef337.firebaseapp.com",
    projectId: "house-marketplace-app-ef337",
    storageBucket: "house-marketplace-app-ef337.appspot.com",
    messagingSenderId: "267730578719",
    appId: "1:267730578719:web:6a9c760a7bda044e16142a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()