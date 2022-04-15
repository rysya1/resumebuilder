import React from 'react'
import Constructor from '../../UI/Constructor/Constructor'
import HeaderMain from '../../UI/HeaderMain/HeaderMain'
import classes from './MainPageForm.module.css'
const MainPageForm = () => {
	return (
		<div>
			{/* <HeaderMain /> */}
			<section className={classes.container}>
				<div>
					<h1 className={classes.build_the_resume}>
						Создайте резюме, которое даст вам работу
					</h1>
					<div className={classes.subtitle}>
						<font className={classes.jumbotron__subtitle}>
							Сделайте это за считанные минуты с помощью нашего
							конструктора резюме и создателя сопроводительного
							письма.Получите на 70% больше интервью. Более 5
							миллионов пользователей уже нашли у нас достойную
							работу.
						</font>
					</div>
				</div>
				<Constructor />
				<div className={classes.resume_img}>
					<img
						src='https://resume-example.com/wp-content/uploads/2021/03/budapest-half.png'
						alt='a'
					/>
				</div>
				<div className={classes.advantages}>
					<div className={classes.jumbotron__advantages}>
						<div className={classes.wrapper__advantages}>
							<div className={classes.flex_end}>
								<div>
									<p
										className={
											classes.jumbotron__advantages__text
										}
									>
										Шаблоны для получения работы
									</p>
									<p
										className={
											classes.jumbotron__advantages__p
										}
									>
										Попадите в 3% лучших, прошедших первый
										раунд.
									</p>
								</div>
								<div>
									<p
										className={
											classes.jumbotron__advantages__text
										}
									>
										Профессиональное создание
										сопроводительных писем
									</p>
									<p
										className={
											classes.jumbotron__advantages__p
										}
									>
										Наслаждайтесь эффективным руководством
										по сопроводительным письмам и
										вдохновляющими примерами.
									</p>
								</div>
							</div>

							<div className={classes.flex_start}>
								<div>
									<p
										className={
											classes.jumbotron__advantages__text
										}
									>
										Интегрированный поиск
									</p>
									<p
										className={
											classes.jumbotron__advantages__p
										}
									>
										Наслаждайтесь эффективным руководством
										по сопроводительным письмам и
										вдохновляющими примерами.
									</p>
								</div>
								<div>
									<p
										className={
											classes.jumbotron__advantages__text
										}
									>
										Пошаговый коуч
									</p>
									<p
										className={
											classes.jumbotron__advantages__p
										}
									>
										Советы экспертов и примеры из жизни
										успешных соискателей.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default MainPageForm
