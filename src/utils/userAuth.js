import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from "../firebase"


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
	loginWithEmailAndPassword,
	registerWithEmailAndPassword,
	logOut
}