import * as firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
  googlePup: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebaseApp.auth().signInWithPopup(provider);
    return result;
  },
};
