import React from 'react'
import classes from './Constructor.module.css'
const Constructor = () => {
	return (
		<div className={classes.container}>
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
