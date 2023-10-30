import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDXeLPirgEVV86Ivk-gkd8lPFMqNeJ-G7c",
    authDomain: "fir-2002d.firebaseapp.com",
    projectId: "fir-2002d",
    storageBucket: "fir-2002d.appspot.com",
    messagingSenderId: "575693485530",
    appId: "1:575693485530:web:65f5b341a107626103fce3",
    measurementId: "G-RGB2MYNDV6"
  };

   export default firebase.initializeApp(firebaseConfig)