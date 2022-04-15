import React from 'react'
import classes from './ResumePreview.module.css'
import { useSelector } from 'react-redux'
const ResumePreview = () => {
    const name = useSelector((state) => state.user.firstName)
	return (
		<div className={classes.document_contaner}>
			<div className={classes.container}>
				<header className={classes.header_contact}>
					<div className={classes.contact_description}>
						<p className={classes.name}>{name}</p>
						<div className={classes.container_description}>
							<div className={classes.description}>
								<samp>rysya@gmail.com</samp>
								<samp>Сокулук</samp>
								<samp>070034343</samp>

								<samp>Бишкек</samp>
								<div className={classes.state_index}>
									<samp>состояние</samp>
									<samp>индекс</samp>
								</div>
							</div>
						</div>
					</div>
				</header>
				<section>
					<div className={classes.experience}>
						<div className={classes.main_text}>
							<span >
								Опыт
							</span>
						</div>
						<div className={classes.main_description}>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nobis natus magnam accusantium
								animi enim sit iure necessitatibus labore optio
								et modi obcaecati minima dolores temporibus,
								nemo deserunt incidunt sapiente veniam.
							</p>
						</div>
					</div>
                    <div className={classes.experience}>
						<div className={classes.main_text}>
							<span >
								Образование
							</span>
						</div>
						<div className={classes.main_description}>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nobis natus magnam accusantium
								animi enim sit iure necessitatibus labore optio
								et modi obcaecati minima dolores temporibus,
								nemo deserunt incidunt sapiente veniam.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default ResumePreview
