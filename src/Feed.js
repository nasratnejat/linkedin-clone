import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import InputOPtion from './InputOPtion'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventIcon from '@mui/icons-material/Event'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import db from './firebase'
import firebase from 'firebase/compat/app'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import 'firebase/compat/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
	const user = useSelector(selectUser)
	const [input, setInput] = useState([])
	const [posts, setPosts] = useState([])

	useEffect(() => {
		onSnapshot(collection(db, 'posts'), (snapshot) =>
			setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
		)
	})
	const sendPost = (e) => {
		e.preventDefault()
		const docref = addDoc(collection(db, 'posts'), {
			name: user.displayName,
			description: user.email,
			message: input,
			photoUrl: user.photoURL || '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		setInput('')
	}

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type='text'
						/>
						<button onClick={sendPost} type='submit'>
							Send
						</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOPtion Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOPtion Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
					<InputOPtion Icon={EventIcon} title='Event' color='#c0cbcd' />
					<InputOPtion
						Icon={CalendarViewDayIcon}
						title='Write article'
						color='#7fc15e'
					/>
				</div>
			</div>
			<FlipMove>
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</FlipMove>
		</div>
	)
}

export default Feed
