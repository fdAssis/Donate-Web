import * as firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import crypto from 'crypto';

import { VoidFunctionComponent } from 'react';
import SignUpOngData from '../pages/SignUpOng/ongInterface';
import UserInterface from '../pages/SignUp/interfaceUser';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

export default {
  googlePup: async (latitude: number, longitude: number): Promise<void> => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebaseApp.auth().signInWithPopup(provider);

    await db.collection('users').doc(result.user?.uid).set({
      name: result.user?.displayName,
      email: result.user?.email,
      phone: result.user?.phoneNumber,
      location: {
        latitude,
        longitude,
      },
      password: null,
      url_avatar: result.user?.photoURL,
      medals: [],
    });
  },

  signUpOng: async (ong: SignUpOngData): Promise<void> => {
    const hashPassword = crypto
      .createHash('md5')
      .update(ong.password)
      .digest('hex');

    await db.collection('ongs').doc().set({
      name: ong.name,
      email: ong.email,
      phone: ong.phone,
      category: ong.category,
      city: ong.city,
      cep: ong.cep,
      uf: ong.uf,
      password: hashPassword,
      description: ong.description,
      location: ong.location,
      url_avatar: ong.url_avatar,
      solidarity_campaigns: ong.solidarity_campaigns,
      charitable_actions: ong.charitable_actions,
      medals: ong.medals,
    });
  },
  signUpUser: async (user: UserInterface): Promise<void> => {
    const hashPassword = crypto
      .createHash('md5')
      .update(user.password)
      .digest('hex');

    await db.collection('users').add({
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      password: hashPassword,
      url_avatar: user.url_avatar,
      medals: user.medals,
    });
  },
};
