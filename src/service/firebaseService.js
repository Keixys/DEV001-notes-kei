import { auth } from '../Firebase/configFirebase';
import {
    createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword
} from 'firebase/auth';


export const registerEmailAndPassword = (email, contraseña) => {
    return createUserWithEmailAndPassword(auth, email, contraseña);
};

export const googleRegister = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
};

export const loginEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };