import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config = {
    apiKey: "AIzaSyDRUK8u_EdTmphKuChNZi3Ss8WfOHkaEj0",
    authDomain: "react-ecommerce-web-page.firebaseapp.com",
    projectId: "react-ecommerce-web-page",
    storageBucket: "react-ecommerce-web-page.appspot.com",
    messagingSenderId: "764118857138",
    appId: "1:764118857138:web:d01d5ba7f06696b346e0ab",
    measurementId: "G-11ZE1KCXJW"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase