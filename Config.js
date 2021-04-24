import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVqnSpQpA-Hnm5-QEUMF5JRmnJTAza0AU",
  authDomain: "instagram1-48b6b.firebaseapp.com",
  projectId: "instagram1-48b6b",
  storageBucket: "instagram1-48b6b.appspot.com",
  messagingSenderId: "752395833150",
  appId: "1:752395833150:web:a90a0aec98c666a358266f"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};



/*
const firebaseConfig = {
  apiKey: "AIzaSyBObtVh5uVmKiODoLuDmq5VP_DA-8PG9DQ",
  authDomain: "instagram-5abea.firebaseapp.com",
  projectId: "instagram-5abea",
  storageBucket: "instagram-5abea.appspot.com",
  messagingSenderId: "124994442780",
  appId: "1:124994442780:web:e92ba9b3dd19571d1b31d9"
};     

export default firebaseConfig;


*/

