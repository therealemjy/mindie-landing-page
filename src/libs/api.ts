import firebase from 'firebase/app';

import config from 'config';

export default class Api {
  public db: firebase.firestore.Firestore;
  public userId: string;

  constructor() {
    firebase.initializeApp(config.firebase);
    this.db = firebase.firestore();
  }

  registerUser = async (email: string) => {
    const result = await this.db.collection('user').add({
      email,
    });

    // TODO: check for errors

    console.log(result);

    return result;
  };
}
