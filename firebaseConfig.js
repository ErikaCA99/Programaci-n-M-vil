import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeZBZ-zTr99VtKA2TwO9_palB08smtkGw",
    authDomain: "noreply@gymprogress-b17f4.firebaseapp.com",
    projectId: "gymprogress-b17f4",
    storageBucket: "gymprogress-b17f4.firebasestorage.app",
    messagingSenderId: "922104682144",
    appId: "1:922104682144:android:06af29611864ce92245bc5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
