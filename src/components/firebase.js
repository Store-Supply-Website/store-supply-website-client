// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage, ref } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBLrWPMdRe4QSJb1fRqvZVN0OPYY6Nrk",
  authDomain: "cs5610-5ea7c.firebaseapp.com",
  projectId: "cs5610-5ea7c",
  storageBucket: "cs5610-5ea7c.appspot.com",
  messagingSenderId: "410462085853",
  appId: "1:410462085853:web:d7b4f6dd2d6968339df134"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp)
// Create a storage reference from our storage service
const storageRef = ref(storage)

// Get a list of cities from your database
async function getCities (db) {
  const citiesCol = collection(db, 'cities')
  const citySnapshot = await getDocs(citiesCol)
  const cityList = citySnapshot.docs.map(doc => doc.data())
  return cityList
}