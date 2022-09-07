import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/analytics'
import { getStorage } from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA9nrkix7dFrwjl_8yNsx9PbuX_Hs2-cBI',
	authDomain: 'linkedin-clone-69815.firebaseapp.com',
	projectId: 'linkedin-clone-69815',
	storageBucket: 'linkedin-clone-69815.appspot.com',
	messagingSenderId: '672507019814',
	appId: '1:672507019814:web:be259f72c927ec28149ce7',
	measurementId: 'G-6XTGHB89YD',
}

const app = firebase.initializeApp(firebaseConfig)
export const db = getFirestore(app)
const auth = firebase.default.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const storage = getStorage(app)
export { auth, provider, storage }
export default db
