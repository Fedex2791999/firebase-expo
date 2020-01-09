import * as firebase from "firebase"
import  "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAu3A2hVHwm0oTWa1_wVPm71GOr5RzBcQg",
  authDomain: "connect-firebase-b5e8e.firebaseapp.com",
  databaseURL: "https://connect-firebase-b5e8e.firebaseio.com",
  projectId: "connect-firebase-b5e8e",
  storageBucket: "connect-firebase-b5e8e.appspot.com",
  messagingSenderId: "66474538761",
  appId: "1:66474538761:web:92894077fc0797ff3045d8",
  measurementId: "G-46V9R2M41M"
}


// Add Data
// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then(function(docRef){
//     console.log("Document written with ID: ", docRef.id);

// })
// .catch(function(error){
//   console.error("Error adding document", error)
// })

// Get Data


  try {
    firebase.initializeApp(firebaseConfig)
    var db = firebase.firestore()

    db.collection("UserGmail")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log("===================");
        
        console.log(`${doc.id} => ${doc.data().UserName}`)
        console.log("========================");
        
       
      })
    })

  }catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error raised', err.stack)
      }
  }
  const firebaseApp= firebase;
export default firebaseApp;
