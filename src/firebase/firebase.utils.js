import firebase from 'firebase/app';
import 'firebase/auth';



const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const prodConfig = {};


const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;



class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.firebaseAuth = firebase.auth()
  }



  async register(displayName, email, password) {
    try {
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.firebaseAuth.currentUser.updateProfile({ displayName, });
    } catch (err) {
      console.log('F.error:', err)
    }


  }

  useGoogleProvider() {
    try {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      googleProvider.setCustomParameters({ promt: 'select_account' }); // to open select account window
      this.firebaseAuth.signInWithPopup(googleProvider);
    } catch (err) {
      console.log(err)
    }
  }
  async signOut() {
    try {
      await this.firebaseAuth.signOut()
    } catch (err) {
      console.log(err)
    }
  }
  async login(email, password) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err)
    }
  }

  async forgetPassword(email) {
    try {
      await this.firebaseAuth.sendPasswordResetEmail(email);
    } catch (err) {
      console.log(err)
    }
  }

}



export default new Firebase();



