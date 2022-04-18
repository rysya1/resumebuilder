import React from 'react'
import classes from './ResumePreview.module.css'
import { useSelector } from 'react-redux'
import AddSkillsForm from '../AddSkillsForm/AddSkillsForm'
import AddSkillsResume from '../AddSkillResume/AddSkillResume'
const ResumePreview = () => {
	const name = useSelector((state) => state.user.firstName)
	const address = useSelector((state) => state.user.address)
	const city = useSelector((state) => state.user.city)
	const state = useSelector((state) => state.user.state)
	const postCode = useSelector((state) => state.user.postCode) //postСode
	const elementAddress = useSelector((state) => state.user.elementAddress)
	const phone = useSelector((state) => state.user.phone)
	const skills = useSelector((state) => state.skills.skills)
	console.log(postCode)
	return (
		<div className={classes.document_contaner}>
			<div className={classes.container}>
				<header className={classes.header_contact}>
					<div className={classes.contact_description}>
						<p className={classes.name}>{name}</p>
						<div className={classes.container_description}>
							<div className={classes.description}>
								<div className={classes.contacts_item}>
									<img
										className={classes.icon}
										src='https://img.icons8.com/material/24/ffffff/worldwide-location--v1.png'
									/>
									<samp>{address}</samp>
								</div>
								<div className={classes.contacts_item}>
									<img
										className={classes.icon}
										src='https://img.icons8.com/material/24/ffffff/worldwide-location--v1.png'
									/>
									<samp>{city}</samp>
								</div>
								<div className={classes.state_index}>
									<samp>{state}</samp>
									<samp>{postCode}</samp>
								</div>
								<div className={classes.contacts_item}>
									<img
										className={classes.icon}
										src='https://img.icons8.com/material-rounded/24/ffffff/new-post.png'
									/>
									<samp>{elementAddress}</samp>
								</div>
								<div className={classes.contacts_item}>
									<img
										className={classes.icon}
										src='https://img.icons8.com/material-outlined/24/ffffff/add-phone.png'
									/>
									<samp>{phone}</samp>
								</div>
							</div>
						</div>
					</div>
				</header>
				<section>
					<div className={classes.experience}>
						<div className={classes.main_text}>
							<span>Опыт</span>
						</div>
						<div className={classes.main_description}>
							<div>
								<span>Програмирование,</span>
								<span>js,</span>
								<span>Bishkek,</span>
								<span>16</span>
							</div>
							<samp>
								16.02.21
							</samp>
							<samp>23.08.22</samp>
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
							<span>Образование</span>
						</div>
						<div className={classes.main_description}>
							<div>
								<span>BBA,</span>
								<span>add</span>
							</div>
						<div>
								<span>Uvkg,</span>
								
								<span>Bishkek,</span>
								<span>16</span>
								
							</div>
							<samp>
								16.02.21,
							</samp>
							<samp>23.08.22</samp>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nobis natus magnam accusantium
								animi enim sit iure necessitatibus labore optio
								et modi obcaecati minima dolores temporibus,
								nemo deserunt incidunt sapiente veniam.
							</p>
						</div>
						<div className={classes.experience}>
							<div className={classes.main_text}>
								<span>Навыки</span>
							</div>
							{skills.map((skill) => (
								<AddSkillsResume key={skill.id} skill={skill} />
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default ResumePreview
