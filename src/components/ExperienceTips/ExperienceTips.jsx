import React from 'react'
import HeaderMain from '../UI/HeaderMain/HeaderMain'
import classes from './ExperienceTips.module.css'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const ExperienceTips = () => {
	const navigate = useNavigate()
	const contact = () => {
		navigate('/contact')
	}
	return (
		<div>
			<HeaderMain />
			<GlobalStyle />
			<div className={classes.container}>
				<h2 className={classes.live_funnel}>Следующий раздел:</h2>
				<div className={classes.experienceH1}>
					<h1>Опыт Работы</h1>
				</div>
				<ul>
					<li className={classes.tips_item}>
						{/* <img src="https://img.icons8.com/color/48/E74C3C/1-circle-c--v2.png"/> */}
						<img src='https://img.icons8.com/color/48/000000/1-cute.png' />
						<span>
						Опыт работы обычно является самым важным разделом во всем вашем резюме.
						</span>
					</li>
					<li className={classes.tips_item}>
						<img src='https://img.icons8.com/color/48/000000/2-cute.png' />
						<span>
						Здесь рекрутеры будут искать доказательства, демонстрирующие, что у вас есть все необходимое для работы.
						</span>
					</li>
					<li className={classes.tips_item}>
						<img src='https://img.icons8.com/color/48/000000/3-cute.png' />
						<span>
							Давайте соберем информацию о ваших достижениях на
							прошлых местах работы, чтобы заполнить этот раздел.
						</span>
					</li>
				</ul>
				<div className={classes.buttons}>
					<button onClick={contact} className={classes.logout}>
						<p>НАЗАД</p>
					</button>
					<button className={classes.next}>
						<p> ДАЛЕЕ</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ExperienceTips
