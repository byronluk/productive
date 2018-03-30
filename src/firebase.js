import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'productive-483e5.firebaseapp.com',
  databaseURL: 'https://productive-483e5.firebaseio.com',
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: 'productive-483e5.appspot.com',
  messagingSenderId: '28977859912'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();
