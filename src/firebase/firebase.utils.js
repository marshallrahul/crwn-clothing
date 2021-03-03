import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCM47XpWqfsmZgzCceJWKJjEDA97z5KYK8",
  authDomain: "crown-db-bb8b8.firebaseapp.com",
  projectId: "crown-db-bb8b8",
  storageBucket: "crown-db-bb8b8.appspot.com",
  messagingSenderId: "340379223402",
  appId: "1:340379223402:web:baf897d2d2b0ba4a725113",
  measurementId: "G-5V11EDC62C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

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
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;