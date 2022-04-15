import React from 'react'
import classes from './EducationTips.module.css'
import HeaderMain from '../UI/HeaderMain/HeaderMain'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const EducationTips = () => {
	const navigate = useNavigate()
	const education = () => {
		navigate('/education')
	}
	const experience = () => {
		navigate('/experience')
	}
	return (
		<div>
			<GlobalStyle />
			<div className={classes.container}>
				<h2 className={classes.live_funnel}>Следующий раздел:</h2>
				<div className={classes.experienceH1}>
					<h1>Образование</h1>
				</div>
				<ul>
					<li className={classes.tips_item}>
						<img src='https://img.icons8.com/color/48/000000/1-cute.png' />
						<span>
							Перечислите свои степени в порядке, начиная с самой
							последней полученной степени.
						</span>
					</li>
					<li className={classes.tips_item}>
						<img src='https://img.icons8.com/color/48/000000/2-cute.png' />
						<span>
							Если вы все еще учитесь в школе, укажите
							предполагаемую дату выпуска.
						</span>
					</li>
					<li className={classes.tips_item}>
						<img src='https://img.icons8.com/color/48/000000/3-cute.png' />
						<span>
							Необязательно включать любые почести, награды,
							стипендии или профессиональные сертификаты.
						</span>
					</li>
				</ul>
				<div className={classes.buttons}>
					<button onClick={experience} className={classes.logout}>
						<p>НАЗАД</p>
					</button>
					<button className={classes.next} onClick={education}>
						<p> ДАЛЕЕ</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default EducationTips
