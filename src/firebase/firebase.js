// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLZ0RDv2dmtSls5Orc13igNGxstKjgT3A",
    authDomain: "instagram-clone-2270f.firebaseapp.com",
    projectId: "instagram-clone-2270f",
    storageBucket: "instagram-clone-2270f.appspot.com",
    messagingSenderId: "680596826247",
    appId: "1:680596826247:web:bbdbedd042603ce89b7022",
    measurementId: "G-5SWZE2PVEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, storage, firestore}

