// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAleRg2YlipMa5ODmRWzHC6z1f-exK0Mj4",
  authDomain: "quiz-2-55b49.firebaseapp.com",
  projectId: "quiz-2-55b49",
  storageBucket: "quiz-2-55b49.appspot.com",
  messagingSenderId: "556733501792",
  appId: "1:556733501792:web:8e511c65fb77bed857ce05",
  measurementId: "G-R1T2ZV8NCE",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }

export const storage = getStorage(firebaseApp);
