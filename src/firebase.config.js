import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyBYGQ3Cu1EHIc7ual6PRaQkh0UnEp2wvL0",
  
    authDomain: "restaurantapp-b7f1d.firebaseapp.com",
  
    databaseURL: "https://restaurantapp-b7f1d-default-rtdb.firebaseio.com",
  
    projectId: "restaurantapp-b7f1d",
  
    storageBucket: "restaurantapp-b7f1d.appspot.com",
  
    messagingSenderId: "252036996232",
  
    appId: "1:252036996232:web:72e6afe6bc5c0f0aead33d"
  
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);

  export { app, firestore, storage };