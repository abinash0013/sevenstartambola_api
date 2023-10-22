// Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth'; // You can import other Firebase services as needed

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyAHTly3YJDEfgw4-LjpOGLdbsK43iCodec",
  authDomain: "sevenstarttambola.firebaseapp.com",
  projectId: "sevenstarttambola",
  storageBucket: "sevenstarttambola.appspot.com",
  messagingSenderId: "58410367493",
  appId: "1:58410367493:web:5f11a4d6d5a5922ed27a6c",
  measurementId: "G-BS4T9F2MK2"
};

firebase.initializeApp(firebaseConfig);
