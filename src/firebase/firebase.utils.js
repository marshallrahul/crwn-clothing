import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAOcm9GkR8JrcE__X_Y4Q-w0xUKQ5zc5Lw",
    authDomain: "crwn-db-own.firebaseapp.com",
    projectId: "crwn-db-own",
    storageBucket: "crwn-db-own.appspot.com",
    messagingSenderId: "197828274378",
    appId: "1:197828274378:web:de96db4a165c9d4328ac33",
    measurementId: "G-N0MDQG70E4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) => {
    const user = result.user;
    console.log(user);
})

export default firebase;