// import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, type DocumentData } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { PUBLIC_FIREBASE_API_KEY, PUBLIC_FIREBASE_AUTH_DOMAIN, PUBLIC_FIREBASE_PROJECT_ID, PUBLIC_FIREBASE_STORAGE_BUCKET, PUBLIC_FIREBASE_MESSAGING_SENDER_ID, PUBLIC_FIREBASE_APP_ID, PUBLIC_FIREBASE_MEASUREMENT_ID } from '$env/static/public';
import type { Firebase_Project } from "./types";


const firebaseConfig = {
    apiKey: PUBLIC_FIREBASE_API_KEY,
    authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: PUBLIC_FIREBASE_APP_ID,
    measurementId: PUBLIC_FIREBASE_MEASUREMENT_ID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
// const storage = getStorage(app);

export async function getProjectsData() {

    const collectionRef = collection(db, "projects");
    const querySnapshot = await getDocs(collectionRef);

    let projectList: any[] = [];

    querySnapshot.forEach((doc) => {
        projectList.push(doc.data());
        // console.log(doc.data());
        // console.log(`${doc.id} => ${doc.data()}`);
    });

    // // -- Get download reference [DEBUGGING] -- //
    // const imgRef = ref(storage, '<URL>');
    // const zeURl = await getDownloadURL(imgRef);
    // console.log(`Download URL: ${zeURl}`);
    // // ---------------------------------------- //

    return projectList as Firebase_Project[];
}