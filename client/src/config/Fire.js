import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBpYijXuiNckl2HpiVPyu29Fpg-L5U2clc",
    authDomain: "chefinately-1541259679268.firebaseapp.com",
    databaseURL: "https://chefinately-1541259679268.firebaseio.com",
    projectId: "chefinately-1541259679268",
    storageBucket: "chefinately-1541259679268.appspot.com",
    messagingSenderId: "1051256801889"
};

const fire = firebase.initializeApp(config);

export default fire;
