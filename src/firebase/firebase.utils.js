import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBbaMBuq7uO8HBYx9eQZtvrkYb3WioPg_g",
    authDomain: "crwn-db-bd073.firebaseapp.com",
    databaseURL: "https://crwn-db-bd073.firebaseio.com",
    projectId: "crwn-db-bd073",
    storageBucket: "crwn-db-bd073.appspot.com",
    messagingSenderId: "1010032953374",
    appId: "1:1010032953374:web:9188cfac13be56a829060f",
    measurementId: "G-5EPVJ0G6X9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;