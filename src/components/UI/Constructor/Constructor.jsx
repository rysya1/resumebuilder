import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Constructor.module.css'

const Constructor = () => {
	const navigate = useNavigate()
	const contact = () => {
		navigate('/contact')
	}
	return (
		<div className={classes.container} onClick={contact}>
			<div className={classes.constructor}>
				<img
					className={classes.icon_construct}
					src='https://img.icons8.com/pastel-glyph/64/ffffff/website-builder--v2.png'
				/>
				<span className={classes.cta}>НАЧАТЬ КОНСТРУКТОР РЕЗЮМЕ</span>
			</div>
		</div>
	)
}

export default Constructor
