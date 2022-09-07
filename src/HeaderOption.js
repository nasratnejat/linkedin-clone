import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({ Icon, title, avatar, onClick }) {
	const user = useSelector(selectUser)
	return (
		<div onClick={onClick} className='header__option'>
			{Icon && <Icon className='headerOption__icon' />}
			{avatar && (
				<Avatar className='headerOption__icon' src={user?.photoURL}>
					{user?.email[0]}
				</Avatar>
			)}
			<h3 className='headerOption__title'>{user?.displayName}</h3>
		</div>
	)
}

export default HeaderOption
