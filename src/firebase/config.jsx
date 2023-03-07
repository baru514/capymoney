import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAl_kC-FQicFhwm2gl7jQlyfuuKXsK5bsE",
  authDomain: "capymoney.firebaseapp.com",
  projectId: "capymoney",
  storageBucket: "capymoney.appspot.com",
  messagingSenderId: "972254689821",
  appId: "1:972254689821:web:96cd852f020803fea564f4"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp }

