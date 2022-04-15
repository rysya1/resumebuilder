import React from 'react'
import classes from './Contact.module.css'
import HeaderMain from '../UI/HeaderMain/HeaderMain'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ResumePreview from '../ResumePreview/ResumePreview'
import { useDispatch } from 'react-redux'
import { setFirstName } from '../../features/user/userSlice'
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`
const Contact = () => {
	const navigate = useNavigate()
	const main = () => {
		navigate('/')
	}
	const experienceTips = () => {
		navigate('/experience-tips')
	}
	const dispatch = useDispatch()

	return (
		<>
			<GlobalStyle />
			<div className={classes.main_container}>
				<div className={classes.container}>
					<div className={classes.contactH1}>
						<h1>Контакты</h1>
					</div>
					<div>
						<span className={classes.Ltsbz}>
							Расскажите нам немного о себе
						</span>
						<div>
							<span className={classes.Ltstext}>
								Сообщите нам, кто вы, как работодатели могут
								связаться с вами и какая у вас
								<br /> профессия.
							</span>
						</div>
					</div>
					<div>
						<div className={classes.pAndInput}>
							<p>Имя</p>
							<input type='text' onChange={(e) => {dispatch(setFirstName(e.target.value))}}/>
						</div>
						<div className={classes.pAndInput}>
							<p>Адрес</p>
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
							<div className={classes.Zipcode}>
								<p>почтовый индекс</p>
								<input type='text' />
							</div>
						</div>
						<div className={classes.d_flex}>
							<div className={classes.email}>
								<p>Эл. адрес</p>
								<input required type='email' />
							</div>
							<div className={classes.phone}>
								<p>Телефон</p>
								<input type='text' />
							</div>
						</div>

						<div className={classes.buttons}>
							<button onClick={main} className={classes.logout}>
								<p>НАЗАД</p>
							</button>
							<button
								className={classes.next}
								onClick={experienceTips}
							>
								<p> ДАЛЕЕ</p>
							</button>
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

export default Contact
