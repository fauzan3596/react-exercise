import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB7M2xApEeRmoCfVWTO-jFZSjFxO182cnk",
    authDomain: "test-project-ebf61.firebaseapp.com",
    projectId: "test-project-ebf61",
    storageBucket: "test-project-ebf61.firebasestorage.app",
    messagingSenderId: "284822480229",
    appId: "1:284822480229:web:4da3b6e6fcc980d9e22d8c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
