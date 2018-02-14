import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCLGFanC-Zmpg1V_D9lW15Q8CXNVKIF4j8',
  authDomain: 'productive-483e5.firebaseapp.com',
  databaseURL: 'https://productive-483e5.firebaseio.com',
  projectId: 'productive-483e5',
  storageBucket: 'productive-483e5.appspot.com',
  messagingSenderId: '28977859912'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();
