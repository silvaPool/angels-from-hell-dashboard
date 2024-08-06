import {  setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

export async function setProfileData(profile, uid) {
    
    try {
        const docRef = await setDoc(doc(db, "profile", uid), profile);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
}