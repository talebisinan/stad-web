import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDStawydUxklRN3rMDiz5VsRI2oeOMsDNU",
  authDomain: "stad-69e89.firebaseapp.com",
  projectId: "stad-69e89",
  storageBucket: "stad-69e89.appspot.com",
  messagingSenderId: "1000051457769",
  appId: "1:1000051457769:web:fbf6685e512db53b21fa78",
  measurementId: "G-D62BGV7P8D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage();
export const analytics = getAnalytics(app);
