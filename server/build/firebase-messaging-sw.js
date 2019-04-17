importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

if (!firebase.apps.length) {
    try {
        firebase.initializeApp({
            messagingSenderId: '273870685964' // troque pelo seu sender id 
        });
        const messaging = firebase.messaging();
    } catch (err) {
        console.error('Firebase initialization error raised', err.stack);
    }
}




