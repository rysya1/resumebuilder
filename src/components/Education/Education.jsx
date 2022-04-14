import React from 'react'
import classes from './Education.module.css'
import { useNavigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import HeaderMain from '../UI/HeaderMain/HeaderMain'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Education = () => {
	const navigate = useNavigate()
	const skillTips = () => {
		navigate('/skill-tips')
	}
	const educationTips = () => {
		navigate('/education-tips')
	}
	return (
		<>
			<HeaderMain />
			<GlobalStyle />
			<div className={classes.container}>
				<div className={classes.experience_text}>
					<h1>Образование</h1> <span>Где вы ходили в школу?</span>
				</div>
				<div>
					<div className={classes.pAndInput}>
						<p>Название школы</p>
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
					<div className={classes.options}>
						<p>Степень</p>
						<select name='' id=''>
							<option value=''>Выберите свою степень</option>
							<option value=''>Диплом средней школы</option>
							<option value=''>GED</option>
							<option value=''>Ассоциированный искусств</option>
							<option value=''>
								ассоциированный научный сотрудник
							</option>
							<option value=''>
								Ассоциированный специалист по прикладным наукам
							</option>
                            <option value="">Бакалавр искусств</option>
                            <option value="">Бакалавр</option>
                            <option value="">ВВА</option>
                            <option value="">Магистр</option>
                            <option value="">Магистр наук</option>
                            <option value="">МВА</option>
                            <option value="">Джей Ди</option>
                            <option value="">доктор медицины</option>
                            <option value="">Кандидат наук.</option>
						</select>
					</div>
					<div className={classes.pAndInput}>
						<p>Область изучения</p>
						<input type='text' />
					</div>
					<div className={classes.d_flex_date}>
						<div>
							<p>Дата начала</p>
							<input className={classes.date} type='date' />
						</div>
						<div>
							<p>Дата окончания</p>
							<input className={classes.date} type='date' />
							{/* <div className={classes.checkbox_style}>
								<input type='checkbox' name='' id='' />
								<font>я сейчас на этой работе</font>
							</div> */}
						</div>
					</div>
					<div className={classes.pAndTextArea}>
						<p>Описание</p>
						<textarea name='' id='' cols='30' rows='10'></textarea>
					</div>
				</div>
				<div className={classes.buttons}>
					<button className={classes.logout} onClick={educationTips}>
						<p>НАЗАД</p>
					</button>
					<button onClick={skillTips} className={classes.next}>
						<p> ДАЛЕЕ</p>
					</button>
					
				</div>
			</div>
		</>
	)
}

export default Education
