import {  setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

export async function setProfileData(profile, uid) {
    
    try {
        const docRef = await setDoc(doc(db, "profile", uid), profile);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function updateProfile(profile, uid) {
    try {
        const profileUserRef = doc(db, "profile", uid);
        const res = await updateDoc(profileUserRef, profile);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}