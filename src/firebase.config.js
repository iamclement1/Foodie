import { getApp, getApps, initializeApp } from  'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCjqa_ltMlnzIGdmND-OHe0QSSkia0B-ns",
    authDomain: "foodie-68c31.firebaseapp.com",
    databaseURL: "https://foodie-68c31-default-rtdb.firebaseio.com",
    projectId: "foodie-68c31",
    storageBucket: "foodie-68c31.appspot.com",
    messagingSenderId: "978973437287",
    appId: "1:978973437287:web:818d6eb13d750d551953c2",
    measurementId: "G-X0JCRWZ9NW"
};

//initialize firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// intialize db
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage};