import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaBm38Iochfwc2vLV2mhcH7yjPUEb7cdo",
  authDomain: "ecommerce-clothing-db-ccf5e.firebaseapp.com",
  projectId: "ecommerce-clothing-db-ccf5e",
  storageBucket: "ecommerce-clothing-db-ccf5e.appspot.com",
  messagingSenderId: "626198352287",
  appId: "1:626198352287:web:ead60bbf7cce0213b16daa",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // to add all of our objects to this collection
  const collectionRef = collection(db, collectionKey);
  // allows me to do is attach a bunch of different => delete / commit / update
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    // get the document reference
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // set that location and set it with the value of the object itself
    batch.set(docRef, object);
  });

  // to begin firing it off
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  // generate a query from collectionRef
  const q = query(collectionRef);

  //await Promise.reject(new Error("somes troubles"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  //console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAdt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAdt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userSnapshot;
};

export const creatAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListnner = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
