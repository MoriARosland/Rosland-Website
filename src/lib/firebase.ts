import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrrGjI0kV5EZVVkuMhg1CAT30h5Uj5s68",
    authDomain: "rosland-website.firebaseapp.com",
    projectId: "rosland-website",
    storageBucket: "rosland-website.appspot.com",
    messagingSenderId: "329717577397",
    appId: "1:329717577397:web:a7dce16531e14047ff70fc",
    measurementId: "G-77F4S15RYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);