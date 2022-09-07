import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/analytics'
import { getStorage } from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	
}

const app = firebase.initializeApp(firebaseConfig)
export const db = getFirestore(app)
const auth = firebase.default.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const storage = getStorage(app)
export { auth, provider, storage }
export default db
