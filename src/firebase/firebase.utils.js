import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyAOL2fBup3zg1XfKqCmDY-iAyPD9aGtUkQ",
  authDomain: "crwn-db-290a0.firebaseapp.com",
  projectId: "crwn-db-290a0",
  storageBucket: "crwn-db-290a0.appspot.com",
  messagingSenderId: "1042866548757",
  appId: "1:1042866548757:web:5c8a8f4a7a9c498f2f9e1c",
  measurementId: "G-RLB67NY6HC"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase