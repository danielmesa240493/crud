import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAohXRMO_nsN77rgZ8eeSWJ5yaiAe9JSiY",
    authDomain: "crud-f09c1.firebaseapp.com",
    projectId: "crud-f09c1",
    storageBucket: "crud-f09c1.appspot.com",
    messagingSenderId: "455249128286",
    appId: "1:455249128286:web:cb7ef097f85d33acf2fdcf"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)