import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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