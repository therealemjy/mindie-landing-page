import firebase from 'firebase';
import 'firebase/firestore';

import config from 'config';

export default class Api {
  public driver: firebase.firestore.Firestore;
  public userId: string;

  constructor() {
    firebase.initializeApp(config.firebase);
    this.driver = firebase.firestore();
  }

  registerUser = async (email: string) => {
    console.log('REGISTERING');

    const newUserDocRef = await this.driver.collection('users').add({
      email,
    });

    // TODO: check for errors

    this.userId = newUserDocRef.id;
  };
}
