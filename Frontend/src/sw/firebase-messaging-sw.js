importScripts("https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_CONFIG_DATABASE_URL,
  projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  // messagingSenderId: '53070194869',
  appId: process.env.FIREBASE_CONFIG_WEB_APP_ID,
  measurementId: process.env.FIREBASE_CONFIG_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const { data } = payload;
  const options = {
    body: data.body,
  };
  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(data.title, options);
});
