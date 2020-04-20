import firebase from 'firebase'
var fire;
var firebaseConfiguration = {
    apiKey: "AIzaSyA30udIoJGJs_B0BFyGXYfNI39yiPxnwxg",
    authDomain: "development-firebase-2a525.firebaseapp.com",
    databaseURL: "https://development-firebase-2a525.firebaseio.com",
    projectId: "development-firebase-2a525",
    storageBucket: "development-firebase-2a525.appspot.com",
    messagingSenderId: "484280879770",
    appId: "1:484280879770:web:37db8a25c3205e1cac2d23",
    measurementId: "G-D5R24SBBD7"
};
// Initialize Firebase
if (!firebase.apps.length) {
    fire = firebase.initializeApp(firebaseConfiguration);
}
else {
    fire = firebase.app()
}
export default fire

