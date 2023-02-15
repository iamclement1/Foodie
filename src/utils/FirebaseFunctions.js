//functons for saving new item

import { doc, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

export const saveItem = async (data) => {
    //set doc from firebase/firestore, fooditem is the collection name, date is the id while the data is the data object we saving
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {merge : true})
};