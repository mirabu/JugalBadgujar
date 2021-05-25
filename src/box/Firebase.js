import firebase from 'firebase';

var firebaseApp= firebase.initializeApp({
    
        apiKey: "AIzaSyA37Hpay95dh9gO0s-1j8EEfCuzFd8SHmc",
        authDomain: "jugal-portofolio.firebaseapp.com",
        projectId: "jugal-portofolio",
        storageBucket: "jugal-portofolio.appspot.com",
        messagingSenderId: "948416183321",
        appId: "1:948416183321:web:9c1ecace5accc9dfd6be88",
        measurementId: "G-CJ99TG5J8L"
     
      
});

var db=firebaseApp.firestore();
export {db};