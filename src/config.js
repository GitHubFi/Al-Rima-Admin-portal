import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAaW2SVkUlv9JminD7WICxmGOOoxD44YvU",
    authDomain: "real-state-app-f55aa.firebaseapp.com",
    databaseURL: "https://real-state-app-f55aa.firebaseio.com",
    projectId: "real-state-app-f55aa",
    storageBucket: "real-state-app-f55aa.appspot.com",
    messagingSenderId: "419163463767"
};
let dbConfig = firebase.initializeApp(config);

export default dbConfig;