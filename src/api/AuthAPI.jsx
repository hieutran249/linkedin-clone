import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};

export const RegisterAPI = (email, password) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};

export const GoogleSignInAPI = () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  } catch (error) {
    return error;
  }
};

export const onLogout = () => {
  try {
    return signOut(auth);
  } catch (error) {
    return error;
  }
};
