import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

export let firebaseApp: FirebaseApp;

export const initializeFirebase = () => {
    if (getApps.length > 0) {
        firebaseApp = getApp();
    } else {
        firebaseApp = initializeApp(firebaseConfig);
    }
};
