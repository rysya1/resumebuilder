import React from 'react'
import classes from './SkillTips.module.css'
import HeaderMain from '../UI/HeaderMain/HeaderMain'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const SkillTips = () => {
	const navigate = useNavigate()
	const education = () => {
		navigate('/education')
	}
	const experience = () => {
		navigate('/experience')
	}
	return (
		<div>
			{/* <HeaderMain /> */}
			<GlobalStyle />
			<div className={classes.container}>
				<h2 className={classes.live_funnel}>Следующий раздел:</h2>
				<div className={classes.experienceH1}>
					<h1>Навыки</h1>
				</div>
				<ul>
					<li className={classes.tips_item}>
						<img src='https://img.icons8.com/color/48/000000/1-cute.png' />
						<span>
							Этот раздел объединяет разделы об опыте работы и
							образовании.
						</span>
					</li>
					<li className={classes.tips_item}>
						<img src='https://img.icons8.com/color/48/000000/2-cute.png' />
						<span>
							Это ваш шанс продемонстрировать потенциальным
							работодателям навыки, которые вы приобрели в ходе
							своей карьеры и образования.
						</span>
					</li>
				</ul>
				<div className={classes.buttons}>
					<button onClick={education} className={classes.logout}>
						<p>НАЗАД</p>
					</button>
					<button  className={classes.next} >
						<p> ДАЛЕЕ</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SkillTips
