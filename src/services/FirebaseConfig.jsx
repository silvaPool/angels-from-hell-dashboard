import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpMfVeaTYP8_8orGOVpkqaeRR4lDOhcxY",
  authDomain: "angels-from-hell-dash.firebaseapp.com",
  projectId: "angels-from-hell-dash",
  storageBucket: "angels-from-hell-dash.appspot.com",
  messagingSenderId: "862734770998",
  appId: "1:862734770998:web:606ee4279fee37b7c08997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const database = getDatabase(app);