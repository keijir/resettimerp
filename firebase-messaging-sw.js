importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// index.htmlと同じ設定値をここにも記述します
const firebaseConfig = {
    apiKey: "AIzaSyBEWkFXCVxrXONInlv0wdF2w0djz6MQKI0",
    authDomain: "ai-reset-timer.firebaseapp.com",
    projectId: "ai-reset-timer",
    messagingSenderId: "43382846437",
    appId: "1:43382846437:web:449416a4cad3c1c5e7b50c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// バックグラウンド通知を受信したときの処理
messaging.onBackgroundMessage((payload) => {
    console.log('バックグラウンドで通知を受信: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2310b981"/></svg>',
        badge: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2310b981"/></svg>',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
