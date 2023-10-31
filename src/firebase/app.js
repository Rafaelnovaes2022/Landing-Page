
import firebase from 'firebase/compat/app'
import "firebase/compat/storage";
import credentials from './credentials'

firebase.initializeApp(credentials.config);

export const App = firebase.initializeApp(credentials.config);