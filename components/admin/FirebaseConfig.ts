import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    projectId: process.env.FIREBASE_PROJECT_ID,
    appId: process.env.FIREBASE_APP_ID,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

try {
    firebase.initializeApp(config);
} catch (err: any) {
    if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
    }
}

const db = firebase.firestore();

export default db;