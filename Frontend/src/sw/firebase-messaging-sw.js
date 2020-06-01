importScripts("https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js");

const firebaseConfig = {
  "apiKey": "AIzaSyB2xfqqIkJ_mFuG0YpSjnqjWcJtXAfyAFI",
  "authDomain": "nextep-notifications.firebaseapp.com",
  "databaseURL": "https://nextep-notifications.firebaseio.com",
  "projectId": "nextep-notifications",
  "storageBucket": "nextep-notifications.appspot.com",
  "messagingSenderId": "53070194869",
  "appId": "1:53070194869:web:ebeedbca3e48efb5b3f6fc",
  "measurementId": "G-HHLTD6RZK6"
};

console.log(process.env.FIREBASE_CONFIG_MEASUREMENT_ID);

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
