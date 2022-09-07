import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className='widgets__article'>
			<div className='widgets__articleLeft'>
				<FiberManualRecordIcon />
			</div>
			<div className='widgets__articleRight'>
				<h2>{heading}</h2>
				<p>{subtitle}</p>
			</div>
		</div>
	)
	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle('Reactjs', 'Top News - 9099 readers')}
			{newsArticle('LinkedIn-clone', 'Code - 1000 reader')}
			{newsArticle('Firebase', 'Top news - 2099 readers')}
			{newsArticle('Redux', 'Top news - 3099 readers')}
		</div>
	)
}

export default Widgets
