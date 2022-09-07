import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './login.css'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [profilePic, setProfilePic] = useState('')
	const dispatch = useDispatch()

	const loginToApp = (e) => {
		e.preventDefault()
		auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
			dispatch(
				login({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: userAuth.user.displayName,
					photoURL: userAuth.user.photoURL,
				})
			)
		})
	}
	const register = () => {
		if (!name) {
			return alert('Please enter Full Name')
		}
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic,
							})
						)
					})
			})
			.catch((error) => alert(error))
	}

	return (
		<div className='login'>
			<img
				src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FLinkedin-Logo-2011-2019.png&f=1&nofb=1'
				alt=''
			/>
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					placeholder='Full name (required if registering)'
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					type='text'
					placeholder='Profile pic URL {optional}'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='Email'
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
					placeholder='password'
				/>
				<button type='submit' onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member? {''}
				<span className='login__register' onClick={register}>
					Register Now
				</span>
			</p>
			<h4 className='creator'>Created with ❤️ by Nasrat Nejat</h4>
		</div>
	)
}

export default Login
