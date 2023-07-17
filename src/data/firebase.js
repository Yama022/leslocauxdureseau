import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // Si vous utilisez la base de données en temps réel de Firebase

let firebaseConfig = {
  // Votre configuration ici
    apiKey: "AIzaSyAZMJ86PJNtxnj_QKudn8fijpJkZRcfonA",
    databaseURL: "https://les-locaux-du-reseau-default-rtdb.europe-west1.firebasedatabase.app",
    authDomain: "les-locaux-du-reseau.firebaseapp.com",
    projectId: "les-locaux-du-reseau",
    storageBucket: "les-locaux-du-reseau.appspot.com",
    messagingSenderId: "969526981296",
    appId: "1:969526981296:web:045eb99087121acadc0175",
    measurementId: "G-QC1VSXGJ7E"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
