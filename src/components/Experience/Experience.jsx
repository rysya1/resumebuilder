import React from 'react'
import classes from './Experience.module.css'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import HeaderMain from '../UI/HeaderMain/HeaderMain'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Experience = () => {
	const navigate = useNavigate()
	const experienceTips = () => {
		navigate('/experiencetips')
	}
	return (
		<>
			<HeaderMain />
			<GlobalStyle />
			<div className={classes.container}>
				<div className={classes.experience_text}>
					<h1>Опыт Работы</h1>{' '}
					<span>Начните с вашего последнего опыта работы.</span>
				</div>
				<div>
					<div className={classes.pAndInput}>
						<p>Название работы</p>
						<input type='text' />
					</div>

					<div className={classes.pAndInput}>
						<p>Работодатель</p>
						<input type='text' />
					</div>

					<div className={classes.d_flex}>
						<div className={classes.city}>
							<p>Город</p>
							<input type='text' />
						</div>
						<div className={classes.state}>
							<p>Состояние</p>
							<input type='text' />
						</div>
					</div>
					<div className={classes.d_flex_date}>
						<div>
							<p>Дата начала</p>
							<input className={classes.date} type='date' />
						</div>
						<div>
							<p>Дата окончания</p>
							<input className={classes.date} type='date' />
							<div className={classes.checkbox_style}>
								<input  type='checkbox' name='' id='' />
								<font>я сейчас на этой работе</font>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.buttons}>
					<button className={classes.logout} onClick={experienceTips}>
						<p>НАЗАД</p>
					</button>
					<button className={classes.next}>
						<p> ДАЛЕЕ</p>
					</button>
				</div>
			</div>
		</>
	)
}

export default Experience
