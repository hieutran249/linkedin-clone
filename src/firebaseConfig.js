// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbsxdq4dpe8s6zqQW59TuuWjU2ooimtgA',
  authDomain: 'linkedin-clone-33c3b.firebaseapp.com',
  projectId: 'linkedin-clone-33c3b',
  storageBucket: 'linkedin-clone-33c3b.appspot.com',
  messagingSenderId: '772786411094',
  appId: '1:772786411094:web:ac28f0a3d0832edcac0df7',
  measurementId: 'G-50147PKF83',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };
