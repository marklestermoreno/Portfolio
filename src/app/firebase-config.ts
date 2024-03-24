import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD2M2PdZXkl9dMoC4R1eRt_i4W0k7CwBB0",
    authDomain: "portfolio-efbfd.firebaseapp.com",
    projectId: "portfolio-efbfd",
    storageBucket: "portfolio-efbfd.appspot.com",
    messagingSenderId: "664021337625",
    appId: "1:664021337625:web:f87369e40a07ea9002cc88",
    measurementId: "G-K3PBJH9J2Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)