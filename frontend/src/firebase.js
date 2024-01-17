import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDehR6JooRpxnYA12EcSH3PWqKbJQdxgCo",
    authDomain: "spark-b31af.firebaseapp.com",
    projectId: "spark-b31af",
    storageBucket: "spark-b31af.appspot.com",
    messagingSenderId: "132351968626",
    appId: "1:132351968626:web:7dddaf5f72bb04d64b89eb",
    measurementId: "G-LGC6NGPY9G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };