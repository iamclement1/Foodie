//functons for saving new item

import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

export const saveItem = async (data) => {
    //set doc from firebase/firestore, fooditem is the collection name, date is the id while the data is the data object we saving
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {merge : true})
};


//fetch available items from the database


export const getAllItems = async () => { 
    const items = await getDocs( //getDocs is used to get all items from the database
        query (collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    return items.docs.map((doc) => doc.data());
};