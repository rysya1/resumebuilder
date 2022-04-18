import React from 'react'
import ResumePreview from '../ResumePreview/ResumePreview'
import classes from './Finish.module.css'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Finish = () => {
	const navigate = useNavigate()
	const contact = () => {
		navigate('/contact')
	}
	const experience = () => {
		navigate('/experience')
	}
	const education = () => {
		navigate('/education')
	}
	const skills = () => {
		navigate('/skills')
	}
	return (
		<>
			<GlobalStyle />
			<div className={classes.main_container}>
				<div className={classes.container}>
					<div className={classes.finish_styled}>
						<div className={classes.finish_main_text}>
							<h1>Вот ваше резюме!</h1>
						</div>
						<div className={classes.download}>
							<button>
								<span>СКАЧАТЬ</span>
							</button>
						</div>
						<div className={classes.resume_sections}>
							<div className={classes.resume_sections_text}>
								<span>РАЗДЕЛЫ РЕЗЮМЕ</span>
							</div>
							<div >
								<div onClick={contact} className={classes.all_project_pages}>
									<div className={classes.sections}>
										<img src='https://img.icons8.com/material-rounded/24/4bb0f6/contacts.png' />
										<span>Контакты</span>
									</div>
								</div>
								<div onClick={experience} className={classes.all_project_pages}>
									<div className={classes.sections}>
										<img src='https://img.icons8.com/windows/24/4bb0f6/school-backpack.png' />
										<span>Опыт</span>
									</div>
								</div>
								<div onClick={education} className={classes.all_project_pages}>
									<div className={classes.sections}>
										<img src='https://img.icons8.com/windows/24/4bb0f6/books--v2.png' />
										<span>Образование</span>
									</div>
								</div>
								<div onClick={skills} className={classes.all_project_pages}>
									<div className={classes.sections}>
										<img src='https://img.icons8.com/ios-filled/24/4bb0f6/menu-rounded.png' />
										<span>Навыки</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<ResumePreview />
				</div>
			</div>
		</>
	)
}

export default Finish
