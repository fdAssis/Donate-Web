import * as firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

interface SignUpOngData {
  name: string;
  email: string;
  phone: string;
  category: string;
  city: string;
  cep: string;
  uf: string;
  password: string;
  location: {
    latitude: number;
    longitude: number;
  };
  url_avatar: string;
  solidarity_campaigns: [];
  charities: [];
  medals: [];
}

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

export default {
  googlePup: async (): Promise<firebase.auth.UserCredential> => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebaseApp.auth().signInWithPopup(provider);
    return result;
  },
  signUpOng: async (ong: SignUpOngData): Promise<void> => {
    await db
      .collection('ongs')
      .doc()
      .set({
        name: ong.name,
        email: ong.email,
        phone: ong.phone,
        category: ong.category,
        city: ong.city,
        cep: ong.cep,
        uf: ong.uf,
        password: ong.password,
        location: {
          latitude: ong.location.latitude,
          longitude: ong.location.longitude,
        },
        url_avatar: ong.url_avatar,
        solidarity_campaigns: ong.solidarity_campaigns,
        charities: ong.charities,
        medals: ong.medals,
      });
  },
};
