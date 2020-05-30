importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js')

const firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const { data } = payload
  const options = {
    body: data.body,
  }
  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(data.title, options)
})
