import * as firebase from "firebase/app";
import "firebase/messaging";
import firebaseConfig from "./config-firebase.json"

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = initializedFirebaseApp.messaging();
export default messaging ;
