import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyAx9FSQwJ5SKN7o6NY_tOIb4vEA4EBXF0I",
    authDomain: "simple-linktree.firebaseapp.com",
    projectId: "simple-linktree",
    storageBucket: "simple-linktree.appspot.com",
    messagingSenderId: "915299646293",
    appId: "1:915299646293:web:725ffc324b7565f2de0ddc",
    measurementId: "G-JY4E781SR0"
};


const app = initializeApp(config)
const db = getFirestore(app);

async function getCollection(db: any, colType: string) {
    const col = collection(db, colType);
    const snap = await getDocs(col);
    const list = snap.docs.map(doc =>  doc.data());

    return list;
}

async function setDocument(db: any, name: string, link: string) {
    await updateDoc(doc(db, "links", "new"), {
        facebook: "", instagram: "", youtube:"", store:"", classes:"", website: "",
    });

    //'https://www.facebook.com/makeupbyshimona')
    //https://www.instagram.com/makeupbyshimona/
    //https://www.youtube.com/channel/UClN4K6mzcg4pk9a97Y6oYgQ
    //https://shimonarastogi.wixsite.com/makeupbyshimona
    //https://shimmerbazaar.com/
    //https://docs.google.com/forms/d/e/1FAIpQLSeBGAFo0Zq0NDXv9Wu0ndXwGoVdvOEeg74ec_YP5fLWNpv4OQ/viewform

}

export { app, db, getCollection, setDocument }