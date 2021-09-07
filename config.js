import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIfxt32uk1iHloQuOlBV29gBCZ3X1Qfk",
  authDomain: "project-67-fdb72.firebaseapp.com",
  projectId: "project-67-fdb72",
  storageBucket: "project-67-fdb72.appspot.com",
  messagingSenderId: "500197738645",
  appId: "1:500197738645:web:61e18bb6d18c9014f6b39c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();