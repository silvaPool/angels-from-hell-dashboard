import {  setDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

export async function getProfile(uid) {
    const profileUserRef = doc(db, "profile", uid);
    const docSnap = await getDoc(profileUserRef);
    return docSnap.data();
}

export async function setPhoto(file, uid) {
    try {
        const storageRef = ref(storage, uid);

        const snapshot = await uploadBytes(storageRef, file);

        const urlDownloadData = await getDownloadURL(storageRef, snapshot);
        console.log(urlDownloadData);
        await updateProfile({urlImage:urlDownloadData}, uid);

        return urlDownloadData;
    } catch (error) {
        return error;
    }
}