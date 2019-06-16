import config from 'config';

export default class Api {
  public driver: firebase.firestore.Firestore;
  public userDocRef: firebase.firestore.DocumentReference;

  constructor() {
    const firebase = import('firebase');
    const firestore = import('firebase/firestore');

    Promise.all([firebase, firestore]).then(([firebase]) => {
      firebase.initializeApp(config.firebase);
      this.driver = firebase.firestore();
    });
  }

  registerUser = async (email: string) => {
    const newUserDocRef = await this.driver.collection('user').add({
      email,
    });

    // TODO: check for errors

    this.userDocRef = newUserDocRef;
  };

  registerUserMotivation = async (motivation: string) =>
    this.userDocRef.update({ motivation });
}
