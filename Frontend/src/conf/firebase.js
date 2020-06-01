import * as firebase from "firebase/app";
import "firebase/messaging";
import firebaseConfig from "./config-firebase.json"

// eslint-disable-next-line import/no-mutable-exports
let messaging
try {
  const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);
  messaging = initializedFirebaseApp.messaging();
} catch (err) {
  console.warn(err.message)
  messaging = null
}

export default messaging ;
