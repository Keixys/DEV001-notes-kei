import { auth, database} from '../Firebase/configFirebase';
import {
    createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from 'firebase/auth';
import { collection, addDoc, getDocs} from "firebase/firestore"




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

export const logOut = () => signOut(auth);

export const newNoteCollection = (title, note, option, uid) => {
    addDoc(collection(database, 'notes'), {
      title,
      note,
      uid,
      option
    });
  };

export const getNotes = getDocs(collection(database, "notes"))


//   export const user = () => {
//     auth.onAuthStateChanged((us) => {
//       if (us) {
//         console.log(us)
//       } else {
//         // User is signed out.
//         console.log('No ha iniciado sesion');
//       }
//     });
  //};