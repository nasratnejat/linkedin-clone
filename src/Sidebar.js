import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
	const user = useSelector(selectUser)

	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	)
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fretro-background-2.jpg&f=1&nofb=1'
					alt=''
				/>
				<Avatar src={user.photoURL} className='sidebar__avatar'>
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p className='sidebar__stat'>Who Viewd You</p>
					<p className='sidebar__statNumber'>9,999</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>2,332</p>
				</div>
			</div>
			<div className='sidebar__buttom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('webdevelopment')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	)
}

export default Sidebar
