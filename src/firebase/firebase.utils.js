import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    // Your web app's Firebase configuration
    apiKey: "AIzaSyCox7iJ9yBJQ7JYWic360TegYklVyvaWOI",
    authDomain: "fashion-clothing-db.firebaseapp.com",
    databaseURL: "https://fashion-clothing-db.firebaseio.com",
    projectId: "fashion-clothing-db",
    storageBucket: "",
    messagingSenderId: "637969355390",
    appId: "1:637969355390:web:37d253cda762b71f"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }catch(error){
        console.log('error creating user', error.message)
    }
    }
    return userRef;
}
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

