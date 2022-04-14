import React from 'react'
import classes from './HeaderMain.module.css'

const HeaderMain = () => {
	return (
		<header className={classes.header}>
			<div className={classes.header_div}>
				<div className={classes.main_name}>
          <img src="https://www.resumecoach.com/wp-content/themes/cv-wp-theme-resumecoach/library/images/logo-rc-home.png" alt="РезюмеТренер" width="160" height="43"/>
          {/* <link rel="apple-touch-icon" href="https://www.resumecoach.com/wp-content/themes/cv-wp-theme-resumecoach/library/css/images/apple-touch-icon.png"> */}
          {/* <div><span className={classes.esume}>esume</span><span className={classes.coach}>Coach</span></div> */}
				</div>
			</div>
		</header>
	)
}

export default HeaderMain
