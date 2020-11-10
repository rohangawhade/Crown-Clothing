import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4G9H_hhGqc3foaP5T1oG4BChNwcRbDg8",
    authDomain: "crown-db-82fad.firebaseapp.com",
    databaseURL: "https://crown-db-82fad.firebaseio.com",
    projectId: "crown-db-82fad",
    storageBucket: "crown-db-82fad.appspot.com",
    messagingSenderId: "569268098039",
    appId: "1:569268098039:web:2dcb4c62270591f44ad4f2",
    measurementId: "G-CK1VGGT4WR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;