import React from 'react'
import HeaderMain from '../UI/HeaderMain/HeaderMain'
import classes from './ExperienceTips.module.css'
const ExperienceTips = () => {
	return (
		<div>
			<HeaderMain />
			<div className={classes.container}>
				<span>Следующий раздел:</span>
				<div>
					<p>Опыт Работы</p>
				</div>
				<div>
					<div>
						{/* <img src="https://img.icons8.com/color/48/E74C3C/1-circle-c--v2.png"/> */}
						<img src='https://img.icons8.com/color/48/000000/1-cute.png' />
						<p>
							Опыт работы обычно является самым важным разделом во
							всем резюме
						</p>
					</div>
					<div>
						<img src='https://img.icons8.com/color/48/000000/2-cute.png' />
						<p>
							Здесь рекрутеры будут искать
							доказательства,демонстрирующие,что у вас есть все
							необходимое для работы.
						</p>
					</div>
					<div>
						<img src='https://img.icons8.com/color/48/000000/3-cute.png' />
						<p>
							Давайте соберем информацию о ваших достижениях на
							прошлых местах работы, чтобы заполнить этот раздел.
						</p>
					</div>
				</div>
				<div className={classes.buttons}>
					<button onClick={main} className={classes.logout}>
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
