import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID

}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const loginWithEmailAndPassword = async(email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		alert(err.message)
	}
}

const registerWithEmailAndPassword = async(name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password)
											.then((userAuth) => {
												updateProfile(userAuth.user, {
													displayName: name
												})
											})
	} catch (err) {
		console.log(err)
		alert(err.message)
	}
}

const logOut = () => {
	signOut(auth)
}

export {
	auth,
	loginWithEmailAndPassword,
	registerWithEmailAndPassword,
	logOut
}

export default app